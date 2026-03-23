# ============================================================
#  Photo Optimizer for My Little Corner (Windows PowerShell)
#  ------------------------------------------------------------
#  Generates two optimized versions of each photo:
#
#    thumbs/  — 640px long-edge, JPEG q80  (grid thumbnails)
#    full/    — 1920px long-edge, JPEG q85  (zoom view)
#
#  Originals are NEVER touched or deleted.
#  Existing optimized files are skipped (safe to re-run).
#
#  Requirements: ImageMagick 7 (`magick` command on PATH)
#  Usage:        powershell -ExecutionPolicy Bypass -File optimize-photos.ps1
# ============================================================

$ErrorActionPreference = "Stop"

$PHOTOS_DIR   = Join-Path $PSScriptRoot "photos"
$THUMB_LONG_EDGE = 640
$FULL_LONG_EDGE  = 1920
$THUMB_QUALITY   = 80
$FULL_QUALITY    = 85

$total         = 0
$createdThumbs = 0
$createdFull   = 0
$skipped       = 0

Write-Host "================================================"
Write-Host "  Photo Optimizer (Windows)"
Write-Host "================================================"
Write-Host "  Source:     $PHOTOS_DIR"
Write-Host "  Thumbnail:  ${THUMB_LONG_EDGE}px long-edge, q${THUMB_QUALITY}"
Write-Host "  Full:       ${FULL_LONG_EDGE}px long-edge, q${FULL_QUALITY}"
Write-Host "  Originals:  untouched"
Write-Host "================================================"
Write-Host ""

$extensions = @("*.jpg", "*.jpeg", "*.png", "*.webp", "*.tiff", "*.tif")

# Get all category sub-folders (one level deep)
$categoryDirs = Get-ChildItem -Path $PHOTOS_DIR -Directory | Where-Object {
    $_.Name -notin @("thumbs", "full")
}

foreach ($catDir in $categoryDirs) {
    foreach ($ext in $extensions) {
        $images = Get-ChildItem -Path $catDir.FullName -Filter $ext -File -ErrorAction SilentlyContinue
        foreach ($img in $images) {
            $total++
            $outName = [System.IO.Path]::ChangeExtension($img.Name, ".jpg")

            $thumbDir  = Join-Path $catDir.FullName "thumbs"
            $fullDir   = Join-Path $catDir.FullName "full"
            $thumbPath = Join-Path $thumbDir $outName
            $fullPath  = Join-Path $fullDir  $outName

            # Create output directories
            if (-not (Test-Path $thumbDir)) { New-Item -ItemType Directory -Path $thumbDir -Force | Out-Null }
            if (-not (Test-Path $fullDir))  { New-Item -ItemType Directory -Path $fullDir  -Force | Out-Null }

            # --- Thumbnail ---
            if (Test-Path $thumbPath) {
                $skipped++
            } else {
                $rel = $img.FullName.Substring($PHOTOS_DIR.Length + 1)
                Write-Host "  THUMB  $rel"
                & magick $img.FullName `
                    -auto-orient `
                    -resize "${THUMB_LONG_EDGE}x${THUMB_LONG_EDGE}>" `
                    -quality $THUMB_QUALITY `
                    -strip `
                    -interlace Plane `
                    $thumbPath
                if ($LASTEXITCODE -ne 0) { throw "magick failed on $($img.FullName)" }
                $createdThumbs++
            }

            # --- Full size ---
            if (Test-Path $fullPath) {
                $skipped++
            } else {
                $rel = $img.FullName.Substring($PHOTOS_DIR.Length + 1)
                Write-Host "  FULL   $rel"
                & magick $img.FullName `
                    -auto-orient `
                    -resize "${FULL_LONG_EDGE}x${FULL_LONG_EDGE}>" `
                    -quality $FULL_QUALITY `
                    -strip `
                    -interlace Plane `
                    $fullPath
                if ($LASTEXITCODE -ne 0) { throw "magick failed on $($img.FullName)" }
                $createdFull++
            }
        }
    }
}

Write-Host ""
Write-Host "================================================"
Write-Host "  Done!"
Write-Host "  Total originals scanned: $total"
Write-Host "  Thumbnails created:      $createdThumbs"
Write-Host "  Full-size created:       $createdFull"
Write-Host "  Skipped (already exist): $skipped"
Write-Host "================================================"

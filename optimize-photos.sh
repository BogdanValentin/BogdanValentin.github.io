#!/bin/bash
# ============================================================
#  Photo Optimizer for My Little Corner
#  ------------------------------------------------------------
#  Generates two optimized versions of each photo:
#
#    thumbs/  — 640px long-edge, JPEG q80  (grid thumbnails)
#    full/    — 1920px long-edge, JPEG q85  (zoom view)
#
#  Originals are NEVER touched or deleted.
#  Existing optimized files are skipped (safe to re-run).
#
#  Requirements: ImageMagick 7 (`magick` command)
#  Usage:        bash optimize-photos.sh
# ============================================================

set -euo pipefail

PHOTOS_DIR="$(cd "$(dirname "$0")" && pwd)/photos"
THUMB_LONG_EDGE=640
FULL_LONG_EDGE=1920
THUMB_QUALITY=80
FULL_QUALITY=85

# Counters
total=0
created_thumbs=0
created_full=0
skipped=0

echo "================================================"
echo "  Photo Optimizer"
echo "================================================"
echo "  Source:     $PHOTOS_DIR"
echo "  Thumbnail:  ${THUMB_LONG_EDGE}px long-edge, q${THUMB_QUALITY}"
echo "  Full:       ${FULL_LONG_EDGE}px long-edge, q${FULL_QUALITY}"
echo "  Originals:  untouched"
echo "================================================"
echo ""

# Find all image files (jpg, jpeg, png, webp, tiff) in category sub-folders
while IFS= read -r -d '' img; do
    total=$((total + 1))
    dir="$(dirname "$img")"
    base="$(basename "$img")"
    name="${base%.*}"
    # Always output as .jpg
    out_name="${name}.jpg"

    # Skip if the file is already inside thumbs/ or full/
    case "$dir" in
        */thumbs|*/full) continue ;;
    esac

    thumb_dir="${dir}/thumbs"
    full_dir="${dir}/full"
    thumb_path="${thumb_dir}/${out_name}"
    full_path="${full_dir}/${out_name}"

    # Create output directories
    mkdir -p "$thumb_dir" "$full_dir"

    # --- Thumbnail ---
    if [ -f "$thumb_path" ]; then
        skipped=$((skipped + 1))
    else
        echo "  THUMB  ${img#$PHOTOS_DIR/}"
        magick "$img" \
            -auto-orient \
            -resize "${THUMB_LONG_EDGE}x${THUMB_LONG_EDGE}>" \
            -quality "$THUMB_QUALITY" \
            -strip \
            -interlace Plane \
            "$thumb_path"
        created_thumbs=$((created_thumbs + 1))
    fi

    # --- Full size ---
    if [ -f "$full_path" ]; then
        skipped=$((skipped + 1))
    else
        echo "  FULL   ${img#$PHOTOS_DIR/}"
        magick "$img" \
            -auto-orient \
            -resize "${FULL_LONG_EDGE}x${FULL_LONG_EDGE}>" \
            -quality "$FULL_QUALITY" \
            -strip \
            -interlace Plane \
            "$full_path"
        created_full=$((created_full + 1))
    fi

done < <(find "$PHOTOS_DIR" -maxdepth 2 -type f \
    \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \
       -o -iname '*.webp' -o -iname '*.tiff' -o -iname '*.tif' \) \
    -not -path '*/thumbs/*' -not -path '*/full/*' \
    -print0 | sort -z)

echo ""
echo "================================================"
echo "  Done!"
echo "  Total originals scanned: $total"
echo "  Thumbnails created:      $created_thumbs"
echo "  Full-size created:       $created_full"
echo "  Skipped (already exist): $skipped"
echo "================================================"

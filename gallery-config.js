// ========================================================
//  GALLERY CONFIGURATION
//  --------------------------------------------------------
//  Photo categories for the gallery. To add/edit a category:
//
//  1. Place your images in  photos/<category>/
//  2. Run optimize-photos.ps1 (or .sh) to generate thumbs/ and full/
//  3. List the filenames in the 'images' array below
//  4. (Optional) Set a 'cover' path for the index preview
//
//  Category schema:
//    {
//      id:     string   — unique slug used in code and URL
//      label:  string   — display name shown in the category index
//      cover:  string   — path to the hero/preview image
//      images: string[] — paths to the original photos (thumbs/full
//                         variants are resolved automatically by the JS)
//    }
//
//  The gallery grid adapts automatically to image count:
//    ≤ 6   → 2×3    ≤ 12  → 3×4    ≤ 20  → 4×5
//    ≤ 36  → 5×8    ≤ 96  → 8×12   ≤ 180 → 12×15
//    ≤ 300 → 15×20  > 300 → 20×25
//
//  Categories with no images will use built-in placeholders.
// ========================================================

const GALLERY_CATEGORIES = [
  {
    id: 'animals',
    label: 'Animals',
    labelRo: 'Animale',
    cover: 'photos/animals/1.jpg',
    images: [
      'photos/animals/1.jpg',
      'photos/animals/2.jpg',
      'photos/animals/3.jpg',
      'photos/animals/4.jpg',
      'photos/animals/5.jpg',
      'photos/animals/6.jpg',
      'photos/animals/7.jpg',
      'photos/animals/8.jpg',
      'photos/animals/9.jpg',
      'photos/animals/10.jpg',
      'photos/animals/11.jpg',
      'photos/animals/12.jpg',
      'photos/animals/13.jpg',
      'photos/animals/14.jpg',
      'photos/animals/15.jpg',
      'photos/animals/16.jpg',
      'photos/animals/17.jpg',
      'photos/animals/18.jpg',
      'photos/animals/19.jpg',
      'photos/animals/20.jpg',
      'photos/animals/21.jpg',
      'photos/animals/22.jpg',
      'photos/animals/23.jpg',
      'photos/animals/24.jpg',
      'photos/animals/25.jpg',
      'photos/animals/26.jpg',
      'photos/animals/27.jpg',
      'photos/animals/28.jpg',
      'photos/animals/29.jpg',
      'photos/animals/30.jpg',
      'photos/animals/31.jpg',
      'photos/animals/32.jpg',
      'photos/animals/33.jpg',
      'photos/animals/34.jpg',
      'photos/animals/35.jpg',
      'photos/animals/36.jpg',
      'photos/animals/DSC_5682-Enhanced-NR.jpg',
      'photos/animals/DSC_5706-Enhanced-NR.jpg',
      'photos/animals/DSC_5709-Enhanced-NR.jpg',
      'photos/animals/DSC_5710.jpg',
      'photos/animals/DSC_5714-Enhanced-NR.jpg',
      'photos/animals/DSC_5799.jpg',
      'photos/animals/DSC_5812.jpg',
      'photos/animals/DSC_5821.jpg',
      'photos/animals/DSC_5822.jpg',
      'photos/animals/DSC_5828.jpg',
      'photos/animals/DSC_5843.jpg',
      'photos/animals/DSC_7002.jpg',
      'photos/animals/DSC_7287.jpg',
      'photos/animals/DSC_7460.jpg',
      'photos/animals/DSC_7537.jpg',
      'photos/animals/DSC_7563.jpg',
      'photos/animals/DSC_7615.jpg'
    ]
  },
  {
    id: 'architecture',
    label: 'Architecture',
    labelRo: 'Arhitectura',
    cover: 'photos/architecture/1.jpg',
    images: [
      'photos/architecture/1.jpg',
      'photos/architecture/2.jpg',
      'photos/architecture/3.jpg',
      'photos/architecture/4.jpg',
      'photos/architecture/5.jpg',
      'photos/architecture/6.jpg',
      'photos/architecture/7.jpg',
      'photos/architecture/8.jpg',
      'photos/architecture/9.jpg',
      'photos/architecture/10.jpg',
      'photos/architecture/11.jpg',
      'photos/architecture/12.jpg',
      'photos/architecture/13.jpg',
      'photos/architecture/14.jpg',
      'photos/architecture/15.jpg',
      'photos/architecture/16.jpg',
      'photos/architecture/17.jpg',
      'photos/architecture/18.jpg',
      'photos/architecture/19.jpg',
      'photos/architecture/20.jpg',
      'photos/architecture/21.jpg',
      'photos/architecture/22.jpg',
      'photos/architecture/23.jpg',
      'photos/architecture/DSC_5773.jpg',
      'photos/architecture/DSC_5775-Enhanced-NR.jpg',
      'photos/architecture/DSC_6992.jpg',
      'photos/architecture/DSC_7015.jpg',
      'photos/architecture/DSC_7082.jpg',
      'photos/architecture/DSC_7095.jpg',
      'photos/architecture/DSC_7102.jpg',
      'photos/architecture/DSC_7120.jpg',
      'photos/architecture/DSC_7434.jpg',
      'photos/architecture/DSC_7439.jpg',
      'photos/architecture/DSC_7445.jpg',
      'photos/architecture/DSC_7467.jpg',
      'photos/architecture/DSC_7619.jpg'
    ]
  },
  {
    id: 'portraits',
    label: 'Portraits',
    labelRo: 'Portrete',
    cover: 'photos/portraits/1.jpg',
    images: [
      'photos/portraits/1.jpg',
      'photos/portraits/2.jpg',
      'photos/portraits/3.jpg',
      'photos/portraits/4.jpg',
      'photos/portraits/5.jpg',
      'photos/portraits/6.jpg',
      'photos/portraits/7.jpg',
      'photos/portraits/8.jpg',
      'photos/portraits/9.jpg',
      'photos/portraits/10.jpg',
      'photos/portraits/11.jpg',
      'photos/portraits/12.jpg',
      'photos/portraits/DSC04807.jpg',
      'photos/portraits/DSC05096-Enhanced-NR.jpg',
      'photos/portraits/DSC05144-Enhanced-NR.jpg',
      'photos/portraits/DSC05172-Enhanced-NR.jpg',
      'photos/portraits/DSC05391-Enhanced-NR.jpg',
      'photos/portraits/DSC05846-Enhanced-NR.jpg',
      'photos/portraits/DSC06398-Enhanced-NR.jpg',
      'photos/portraits/DSC06738.jpg',
      'photos/portraits/DSC_5905.jpg',
      'photos/portraits/DSC_5936.jpg',
      'photos/portraits/DSC_5960.jpg'
    ]
  },
  {
    id: 'sport',
    label: 'Sport',
    labelRo: 'Sport',
    cover: 'photos/sport/1.jpg',
    images: [
      'photos/sport/1.jpg',
      'photos/sport/2.jpg',
      'photos/sport/3.jpg',
      'photos/sport/4.jpg',
      'photos/sport/5.jpg',
      'photos/sport/6.jpg',
      'photos/sport/7.jpg',
      'photos/sport/8.jpg',
      'photos/sport/9.jpg',
      'photos/sport/10.jpg',
      'photos/sport/11.jpg',
      'photos/sport/12.jpg',
      'photos/sport/13.jpg',
      'photos/sport/14.jpg',
      'photos/sport/15.jpg',
      'photos/sport/16.jpg',
      'photos/sport/17.jpg',
      'photos/sport/18.jpg',
      'photos/sport/19.jpg',
      'photos/sport/20.jpg',
      'photos/sport/DSC07066.jpg',
      'photos/sport/DSC07123.jpg',
      'photos/sport/DSC07234.jpg'
    ]
  },
  {
    id: 'landscapes',
    label: 'Landscapes',
    labelRo: 'Peisaje',
    cover: 'photos/landscapes/1.jpg',
    images: [
      'photos/landscapes/1.jpg',
      'photos/landscapes/2.jpg',
      'photos/landscapes/3.jpg',
      'photos/landscapes/4.jpg',
      'photos/landscapes/6.jpg',
      'photos/landscapes/7.jpg',
      'photos/landscapes/8.jpg',
      'photos/landscapes/9.jpg',
      'photos/landscapes/10.jpg',
      'photos/landscapes/11.jpg',
      'photos/landscapes/12.jpg',
      'photos/landscapes/DSC04723.jpg',
      'photos/landscapes/DSC04859.jpg',
      'photos/landscapes/DSC04877.jpg',
      'photos/landscapes/DSC04905.jpg',
      'photos/landscapes/DSC_2929.jpg',
      'photos/landscapes/DSC_6795.jpg',
      'photos/landscapes/DSC_6973.jpg',
      'photos/landscapes/DSC_7087.jpg',
      'photos/landscapes/DSC_7302.jpg',
      'photos/landscapes/DSC_7425.jpg',
      'photos/landscapes/DSC_7471.jpg',
      'photos/landscapes/DSC_7579.jpg',
      'photos/landscapes/DSC_7797.jpg'
    ]
  },
  {
    id: 'astronomy',
    label: 'Astronomy',
    labelRo: 'Astronomie',
    cover: 'photos/astronomy/1.jpg',
    images: [
      'photos/astronomy/1.jpg',
      'photos/astronomy/2.jpg',
      'photos/astronomy/3.jpg',
      'photos/astronomy/4.jpg',
      'photos/astronomy/5.jpg',
      'photos/astronomy/6.jpg',
      'photos/astronomy/7.jpg',
      'photos/astronomy/8.jpg'
    ]
  },
  {
    id: 'flowers',
    label: 'Flowers',
    labelRo: 'Flori',
    cover: 'photos/flowers/1.jpg',
    images: [
      'photos/flowers/1.jpg',
      'photos/flowers/2.jpg',
      'photos/flowers/3.jpg',
      'photos/flowers/4.jpg',
      'photos/flowers/5.jpg',
      'photos/flowers/6.jpg',
      'photos/flowers/7.jpg',
      'photos/flowers/8.jpg'
    ]
  },
  {
    id: 'events',
    label: 'Events',
    labelRo: 'Evenimente',
    cover: 'photos/events/DSC04377.jpg',
    images: [
      'photos/events/DSC04377.jpg',
      'photos/events/DSC04408.jpg',
      'photos/events/DSC04437.jpg',
      'photos/events/DSC04439.jpg',
      'photos/events/DSC04453.jpg',
      'photos/events/DSC04484.jpg',
      'photos/events/DSC04651.jpg',
      'photos/events/DSC07468-Enhanced-NR.jpg',
      'photos/events/DSC_6830.jpg',
      'photos/events/DSC_6844.jpg',
      'photos/events/DSC_6871.jpg',
      'photos/events/DSC_6879.jpg',
      'photos/events/DSC_6887.jpg',
      'photos/events/DSC_6888.jpg',
      'photos/events/DSC_6894-Enhanced-NR.jpg',
      'photos/events/DSC_6898-Enhanced-NR.jpg',
      'photos/events/DSC_6957.jpg',
      'photos/events/DSC_6965.jpg'
    ]
  },
  {
    id: 'art',
    label: 'Art',
    labelRo: 'Arta',
    cover: 'photos/art/DSC_7492.jpg',
    images: [
      'photos/art/DSC_7492.jpg',
      'photos/art/DSC_7493.jpg',
      'photos/art/DSC_7500.jpg',
      'photos/art/DSC_7504.jpg',
      'photos/art/DSC_7505.jpg',
      'photos/art/DSC_7507.jpg'
    ]
  },
  {
    id: 'autoportret',
    label: 'Autoportraits',
    labelRo: 'Autoportrete',
    cover: 'photos/autoportret/1.jpg',
    images: [
      'photos/autoportret/1.jpg',
      'photos/autoportret/2.jpg',
      'photos/autoportret/3.jpg',
      'photos/autoportret/4.jpg',
      'photos/autoportret/5.jpg',
      'photos/autoportret/6.jpg',
      'photos/autoportret/7.jpg',
      'photos/autoportret/8.jpg',
      'photos/autoportret/9.jpg',
      'photos/autoportret/10.jpg',
      'photos/autoportret/11.jpg',
      'photos/autoportret/DSC04810.jpg',
      'photos/autoportret/DSC04867.jpg',
      'photos/autoportret/DSC_3074.jpg',
      'photos/autoportret/DSC_3373.jpg',
      'photos/autoportret/DSC_3448.jpg',
      'photos/autoportret/DSC_5982.jpg',
      'photos/autoportret/DSC_7293.jpg',
      'photos/autoportret/DSC_7647.jpg'
    ]
  },
  {
    id: 'vehicles',
    label: 'Vehicles',
    labelRo: 'Vehicule',
    cover: 'photos/vehicles/1.jpg',
    images: [
      'photos/vehicles/1.jpg',
      'photos/vehicles/2.jpg',
      'photos/vehicles/3.jpg',
      'photos/vehicles/4.jpg',
      'photos/vehicles/6.jpg',
      'photos/vehicles/7.jpg',
      'photos/vehicles/8.jpg',
      'photos/vehicles/9.jpg',
      'photos/vehicles/11.jpg',
      'photos/vehicles/12.jpg',
      'photos/vehicles/14.jpg',
      'photos/vehicles/15.jpg',
      'photos/vehicles/16.jpg',
      'photos/vehicles/17.jpg',
      'photos/vehicles/18.jpg',
      'photos/vehicles/19.jpg',
      'photos/vehicles/20.jpg',
      'photos/vehicles/volga.jpg'
    ]
  },
];

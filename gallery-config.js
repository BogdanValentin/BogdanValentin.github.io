// ========================================================
//  GALLERY CONFIGURATION
//  --------------------------------------------------------
//  Your photo categories live here. To populate a category:
//
//  1. Place your images in  photos/<category>/
//  2. List the filenames in the 'images' array below
//  3. (Optional) Set a 'cover' path for the index preview
//
//  Example:
//    {
//      id: 'animals',
//      label: 'Animals',
//      cover: 'photos/animals/hero.jpg',
//      images: [
//        'photos/animals/01.jpg',
//        'photos/animals/02.jpg',
//        'photos/animals/03.jpg'
//      ],
//      imageData: [
//        { number: '01', title: 'Morning Visitor', description: 'A fox at dawn.' },
//        { number: '02', title: 'Wings',           description: 'Heron in flight.' },
//      ]
//    }
//
//  The gallery grid adapts automatically:
//    ≤ 6 images  → 2 × 3 grid
//    ≤ 12 images → 3 × 4 grid
//    ≤ 20 images → 4 × 5 grid
//    ≤ 36 images → 5 × 8 grid
//    > 36 images → 8 × 12 grid
//
//  Categories with no images will use built-in placeholders.
// ========================================================

const GALLERY_CATEGORIES = [
  {
    id: 'animals',
    label: 'Animals',
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
      'photos/animals/32.jpg'
    ],
    imageData: [
      { number: '01', title: 'Animal 1', description: '' },
      { number: '02', title: 'Animal 2', description: '' },
      { number: '03', title: 'Animal 3', description: '' },
      { number: '04', title: 'Animal 4', description: '' },
      { number: '05', title: 'Animal 5', description: '' },
      { number: '06', title: 'Animal 6', description: '' },
      { number: '07', title: 'Animal 7', description: '' },
      { number: '08', title: 'Animal 8', description: '' },
      { number: '09', title: 'Animal 9', description: '' },
      { number: '10', title: 'Animal 10', description: '' },
      { number: '11', title: 'Animal 11', description: '' },
      { number: '12', title: 'Animal 12', description: '' },
      { number: '13', title: 'Animal 13', description: '' },
      { number: '14', title: 'Animal 14', description: '' },
      { number: '15', title: 'Animal 15', description: '' },
      { number: '16', title: 'Animal 16', description: '' },
      { number: '17', title: 'Animal 17', description: '' },
      { number: '18', title: 'Animal 18', description: '' },
      { number: '19', title: 'Animal 19', description: '' },
      { number: '20', title: 'Animal 20', description: '' },
      { number: '21', title: 'Animal 21', description: '' },
      { number: '22', title: 'Animal 22', description: '' },
      { number: '23', title: 'Animal 23', description: '' },
      { number: '24', title: 'Animal 24', description: '' },
      { number: '25', title: 'Animal 25', description: '' },
      { number: '26', title: 'Animal 26', description: '' },
      { number: '27', title: 'Animal 27', description: '' },
      { number: '28', title: 'Animal 28', description: '' },
      { number: '29', title: 'Animal 29', description: '' },
      { number: '30', title: 'Animal 30', description: '' },
      { number: '31', title: 'Animal 31', description: '' },
      { number: '32', title: 'Animal 32', description: '' }
    ]
  },
  {
    id: 'architecture',
    label: 'Architecture',
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
      'photos/architecture/20.jpg'
    ],
    imageData: [
      { number: '01', title: 'Architecture 1', description: '' },
      { number: '02', title: 'Architecture 2', description: '' },
      { number: '03', title: 'Architecture 3', description: '' },
      { number: '04', title: 'Architecture 4', description: '' },
      { number: '05', title: 'Architecture 5', description: '' },
      { number: '06', title: 'Architecture 6', description: '' },
      { number: '07', title: 'Architecture 7', description: '' },
      { number: '08', title: 'Architecture 8', description: '' },
      { number: '09', title: 'Architecture 9', description: '' },
      { number: '10', title: 'Architecture 10', description: '' },
      { number: '11', title: 'Architecture 11', description: '' },
      { number: '12', title: 'Architecture 12', description: '' },
      { number: '13', title: 'Architecture 13', description: '' },
      { number: '14', title: 'Architecture 14', description: '' },
      { number: '15', title: 'Architecture 15', description: '' },
      { number: '16', title: 'Architecture 16', description: '' },
      { number: '17', title: 'Architecture 17', description: '' },
      { number: '18', title: 'Architecture 18', description: '' },
      { number: '19', title: 'Architecture 19', description: '' },
      { number: '20', title: 'Architecture 20', description: '' }
    ]
  },
  {
    id: 'portraits',
    label: 'Portraits',
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
      'photos/portraits/12.jpg'
    ],
    imageData: [
      { number: '01', title: 'Portrait 1', description: '' },
      { number: '02', title: 'Portrait 2', description: '' },
      { number: '03', title: 'Portrait 3', description: '' },
      { number: '04', title: 'Portrait 4', description: '' },
      { number: '05', title: 'Portrait 5', description: '' },
      { number: '06', title: 'Portrait 6', description: '' },
      { number: '07', title: 'Portrait 7', description: '' },
      { number: '08', title: 'Portrait 8', description: '' },
      { number: '09', title: 'Portrait 9', description: '' },
      { number: '10', title: 'Portrait 10', description: '' },
      { number: '11', title: 'Portrait 11', description: '' },
      { number: '12', title: 'Portrait 12', description: '' }
    ]
  },
  {
    id: 'sport',
    label: 'Sport',
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
      'photos/sport/20.jpg'
    ],
    imageData: [
      { number: '01', title: 'Sport 1', description: '' },
      { number: '02', title: 'Sport 2', description: '' },
      { number: '03', title: 'Sport 3', description: '' },
      { number: '04', title: 'Sport 4', description: '' },
      { number: '05', title: 'Sport 5', description: '' },
      { number: '06', title: 'Sport 6', description: '' },
      { number: '07', title: 'Sport 7', description: '' },
      { number: '08', title: 'Sport 8', description: '' },
      { number: '09', title: 'Sport 9', description: '' },
      { number: '10', title: 'Sport 10', description: '' },
      { number: '11', title: 'Sport 11', description: '' },
      { number: '12', title: 'Sport 12', description: '' },
      { number: '13', title: 'Sport 13', description: '' },
      { number: '14', title: 'Sport 14', description: '' },
      { number: '15', title: 'Sport 15', description: '' },
      { number: '16', title: 'Sport 16', description: '' },
      { number: '17', title: 'Sport 17', description: '' },
      { number: '18', title: 'Sport 18', description: '' },
      { number: '19', title: 'Sport 19', description: '' },
      { number: '20', title: 'Sport 20', description: '' }
    ]
  },
  {
    id: 'landscapes',
    label: 'Landscapes',
    cover: 'photos/landscapes/1.jpg',
    images: [
      'photos/landscapes/1.jpg',
      'photos/landscapes/2.jpg',
      'photos/landscapes/3.jpg',
      'photos/landscapes/4.jpg',
      'photos/landscapes/5.jpg',
      'photos/landscapes/6.jpg',
      'photos/landscapes/7.jpg',
      'photos/landscapes/8.jpg',
      'photos/landscapes/9.jpg',
      'photos/landscapes/10.jpg',
      'photos/landscapes/11.jpg',
      'photos/landscapes/12.jpg'
    ],
    imageData: [
      { number: '01', title: 'Landscape 1', description: '' },
      { number: '02', title: 'Landscape 2', description: '' },
      { number: '03', title: 'Landscape 3', description: '' },
      { number: '04', title: 'Landscape 4', description: '' },
      { number: '05', title: 'Landscape 5', description: '' },
      { number: '06', title: 'Landscape 6', description: '' },
      { number: '07', title: 'Landscape 7', description: '' },
      { number: '08', title: 'Landscape 8', description: '' },
      { number: '09', title: 'Landscape 9', description: '' },
      { number: '10', title: 'Landscape 10', description: '' },
      { number: '11', title: 'Landscape 11', description: '' },
      { number: '12', title: 'Landscape 12', description: '' }
    ]
  },
  {
    id: 'astronomy',
    label: 'Astronomy',
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
    ],
    imageData: [
      { number: '01', title: 'Astronomy 1', description: '' },
      { number: '02', title: 'Astronomy 2', description: '' },
      { number: '03', title: 'Astronomy 3', description: '' },
      { number: '04', title: 'Astronomy 4', description: '' },
      { number: '05', title: 'Astronomy 5', description: '' },
      { number: '06', title: 'Astronomy 6', description: '' },
      { number: '07', title: 'Astronomy 7', description: '' },
      { number: '08', title: 'Astronomy 8', description: '' }
    ]
  },
  {
    id: 'flowers',
    label: 'Flowers',
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
    ],
    imageData: [
      { number: '01', title: 'Flower 1', description: '' },
      { number: '02', title: 'Flower 2', description: '' },
      { number: '03', title: 'Flower 3', description: '' },
      { number: '04', title: 'Flower 4', description: '' },
      { number: '05', title: 'Flower 5', description: '' },
      { number: '06', title: 'Flower 6', description: '' },
      { number: '07', title: 'Flower 7', description: '' },
      { number: '08', title: 'Flower 8', description: '' }
    ]
  },
  {
    id: 'events',
    label: 'Events',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'art',
    label: 'Art',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'autoportret',
    label: 'Autoportraits',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'vehicles',
    label: 'Vehicles',
    cover: 'photos/vehicles/1.jpg',
    images: [
      'photos/vehicles/1.jpg',
      'photos/vehicles/2.jpg',
      'photos/vehicles/3.jpg',
      'photos/vehicles/4.jpg',
      'photos/vehicles/5.jpg',
      'photos/vehicles/6.jpg',
      'photos/vehicles/7.jpg',
      'photos/vehicles/8.jpg',
      'photos/vehicles/9.jpg',
      'photos/vehicles/10.jpg',
      'photos/vehicles/11.jpg',
      'photos/vehicles/12.jpg',
      'photos/vehicles/13.jpg',
      'photos/vehicles/14.jpg',
      'photos/vehicles/15.jpg',
      'photos/vehicles/16.jpg',
      'photos/vehicles/17.jpg',
      'photos/vehicles/18.jpg',
      'photos/vehicles/19.jpg',
      'photos/vehicles/20.jpg'
    ],
    imageData: [
      { number: '01', title: 'Vehicle 1', description: '' },
      { number: '02', title: 'Vehicle 2', description: '' },
      { number: '03', title: 'Vehicle 3', description: '' },
      { number: '04', title: 'Vehicle 4', description: '' },
      { number: '05', title: 'Vehicle 5', description: '' },
      { number: '06', title: 'Vehicle 6', description: '' },
      { number: '07', title: 'Vehicle 7', description: '' },
      { number: '08', title: 'Vehicle 8', description: '' },
      { number: '09', title: 'Vehicle 9', description: '' },
      { number: '10', title: 'Vehicle 10', description: '' },
      { number: '11', title: 'Vehicle 11', description: '' },
      { number: '12', title: 'Vehicle 12', description: '' },
      { number: '13', title: 'Vehicle 13', description: '' },
      { number: '14', title: 'Vehicle 14', description: '' },
      { number: '15', title: 'Vehicle 15', description: '' },
      { number: '16', title: 'Vehicle 16', description: '' },
      { number: '17', title: 'Vehicle 17', description: '' },
      { number: '18', title: 'Vehicle 18', description: '' },
      { number: '19', title: 'Vehicle 19', description: '' },
      { number: '20', title: 'Vehicle 20', description: '' }
    ]
  },
  {
    id: 'bw',
    label: 'Black & White',
    cover: null,
    images: [],
    imageData: []
  }
];

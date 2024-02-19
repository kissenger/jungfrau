import { ImageCollection, Image, OrientedImage, MultisizeImage } from './types';

export const imageCollection: ImageCollection = {
  "scorpionfish": <OrientedImage>{
    url: "assets/photos/parallax/scorpionfish-photographed-while-snorkelling-in-cornwall",
    ext: "webp",
    altText: "Photo of a Scorpionfish taking while snorkelling in Cornwall, Britain",
    portrait: {height: 740, width: 400},
    landscape: {height: 1333, width: 2000}
  },
  "cuddlingcrabs": <OrientedImage>{
    url: "assets/photos/parallax/cuddling-crabs-snorkelling-scotland-britain",
    ext: "webp",
    altText: "Photo of two crabs having a cuddle underwater, taken in Scotland",
    portrait: {height: 740, width: 400},
    landscape: {height: 1333, width: 2000}
  },
  "sittingchild": <OrientedImage>{
    url: "assets/photos/parallax/child-in-snorkelling-gear-scotland",
    ext: "webp",
    altText: "Photo of child sitting on a rock in snorkelling gear, looking out to sea",
    portrait: {height: 740, width: 400},
    landscape: {height: 1333, width: 2000}
  },
  "anemone": <OrientedImage>{
    url: "assets/photos/parallax/dahlia-anemone-snorkelling-dorset-britain",
    ext: "webp",
    altText: "Photo of a Snakelocks Anemone taken while snorkelling in Dorset, Britain",
    portrait: {height: 740, width: 400},
    landscape: {height: 1333, width: 2000}
  },
  "slideshow-child": <OrientedImage>{
    url: "assets/photos/slideshow/child-walking-beach-after-snorkelling-in-yorkshire-england-britain",
    ext: "webp",
    altText: "Photo of child walking up a beach holding snorkelling gear with blue-green sea behind",
    portrait: { height: 740, width: 400 },
    landscape: { height: 1333, width: 2000 }
  },
  "slideshow-drone": <OrientedImage>{
    url: "assets/photos/slideshow/drone-photo-woman-snorkelling-chesil-cove",
    ext: "webp",
    altText: "Photo showing drone view of woman snorkelling in Chesil Cove, Dorset, with wonderful visibility",
    portrait: { height: 740, width: 400 },
    landscape: { height: 1333, width: 2000 }
  },
  "slideshow-kids": <OrientedImage>{
    url: "assets/photos/slideshow/children-rock-pool-snorkelling-in-cornwall-britain",
    ext: "webp",
    altText: "Photo showing children pointing at marine life while snorkelling in a rock pool",
    portrait: { height: 740, width: 400 },
    landscape: { height: 1333, width: 2000 }
  },
  "content-woman": <MultisizeImage>{
    url: "assets/photos/content/woman-staring-out-to-sea-holding-snorkelling-gear",
    ext: "webp",
    altText: "Woman looking out to sea holding snorkelling gear in Britain",
    sizes: {
      large: { height: 600, width: 600},
      small: { height: 300, width: 300},
    }
  },
  "content-kids": <MultisizeImage>{
    url: "assets/photos/content/children-showing-their-snorkelling-finds-scotland-britain",
    ext: "webp",
    altText: "Children shows off their finds after snorkelling in Scotland",
    sizes: {
      large: { height: 600, width: 600},
      small: { height: 300, width: 300},
    }
  },
  "snorkpooling": <MultisizeImage>{
    url: "assets/photos/articles/children-snorkelling-in-rock-pool-cornwall-britain",
    ext: "webp",
    altText: "Kids snorkpooling in a tidal pool in Cornwall",
    sizes: {
      small: { height: 300, width: 300 },
      large: { height: 1000, width: 1000 }
    }
  },
  "snorkelling-gear": <MultisizeImage>{
    url: "assets/photos/articles/snorkelling-gear-on-a-pebble-beach-norfolk-britain",
    ext: "webp",
    altText: "Snorkelling gear on a beach in Norfolk",
    sizes: {
      small: { height: 300, width: 300 },
      large: { height: 1000, width: 1000 }
    }
  },
  "youtube": <Image>{
    url: "assets/socials/youtube",
    ext: "webp",
    href: "https://www.youtube.com/channel/UCahtVWtV4eBCqFPVSfgdpbg",
    altText: "Click to see our YouTube channel",
    height: 40,
    width: 40
  },
  "instagram": <Image>{
    url: "assets/socials/instagram",
    ext: "webp",
    href: "https://www.instagram.com/snorkelology/",
    altText: "Click to see our instagram feed",
    height: 40,
    width: 40
  },
  "email": <Image>{
    url: "assets/socials/email",
    ext: "webp",
    href: "mailto:snorkelology@gmail.com",
    altText: "Click to send us an email",
    height: 40,
    width: 40
  }
}

export const partners: Array<Image> =  [
  {
    url: "assets/partners/christaylorphoto",
    ext: 'webp',
    href: 'https://www.christaylorphoto.co.uk',
    altText: 'Chris Taylor Photo Logo',
    height: 100,
    width: 100
  },
  {
    url: "assets/partners/alphamarine",
    ext: 'webp',
    href: 'https://www.alphamarinephoto.com',
    altText: 'Alphamarine Logo',
    height: 100,
    width: 133
  },
  {
    url: "assets/partners/wildlifetrusts",
    ext: 'webp',
    href: 'https://www.wildlifetrusts.org',
    altText: 'Wildlife Trusts Logo',
    height: 101,
    width: 250
  },
  {
    url: "assets/partners/wild-running-jacket-cover",
    ext: 'webp',
    href: 'https://jenandsimbenson.co.uk/',
    altText: 'Wild Running by Sim and Jen Benson',
    height: 100,
    width: 82
  },
  {
    url: "assets/partners/wild-things-publishing",
    ext: 'webp',
    href: 'https://wildthingspublishing.com',
    altText: 'Wild Things Publishing Logo',
    height: 104,
    width: 100
  },
  {
    url: "assets/partners/jethro-haynes",
    ext: 'png',
    href: 'https://www.jethrophoto.com/',
    altText: 'Jethro Haynes Photography',
    height: 104,
    width: 100
  },
  {
    url: "assets/partners/St Martins Watersports Logo Navy",
    ext: 'webp',
    href: 'https://www.stmartinswatersports.co.uk/',
    altText: 'St Martin\'s Watersports',
    height: 89,
    width: 196
  },
  {
    url: "assets/partners/Snorkel Wild logo v2",
    ext: 'webp',
    href: 'https://www.snorkelwild.com/',
    altText: 'Snorkel Wild Logo',
    height: 100,
    width: 100
  }
]


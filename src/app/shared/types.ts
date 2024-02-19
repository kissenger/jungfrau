
export type Partners = Array<{
  link: string,
  imageShortName: string,
  caption: string
}>


export type InstaPost = {
  caption: string,
  media_url: string,
  permalink: string,
  media_type: string,
  timestamp: string,
  category: 'Instagram',
  header: ''
}

export type ArticlePreview = {
  caption: string,
  media_url: string,
  permalink: string,
  category: 'Article',
  header: string,
  timestamp: '',
  media_type: '',
}

export type Article = {
  imageShortName: string,
  header: string,
  caption: string,
  href: string
}

// export type ArticlePost = {
//   text: string,
//   link: string,
//   timestamp: string,
//   header: string,
//   category: 'Article'
// }



// type Image = {
//     fname: "xxxxxxx",
//     extension: "webp"
//     path: "/assets/photos/static/"
//     altText: "blah",
// }


type BasicImage = {
  url: string,
  ext: string,
  altText: string,
}

export type Image = {
  height: number,
  width: number,
  href: string,
} & BasicImage

export type ImageCollection = {
  [shortName: string]: Image | OrientedImage | MultisizeImage
}

// export type OrientedImageCollection = {
//   [shortName: string]: OrientedImage
// }

export type OrientedImage = {
  portrait: {height: number, width: number},
  landscape: {height: number, width: number}
} & BasicImage

// export type MultisizeImageCollection = {
//   [shortName: string]: MultisizeImage
// }

export type MultisizeImage = {
  sizes: ImageSizes
} & BasicImage

type ImageSizes = {
  [sizeDescriptor: string]:
    {height: number, width: number}
}


export type DeviceOrientation = 'landscape' | 'portrait';
export type WidthDescriptor = 'large' | 'small';

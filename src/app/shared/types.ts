export type PartnerCards = Array<{
  link: string,
  imgPath: string,
  height: string,
  width: string,
  alt: string,
  caption: string
}>

export type InstaFeed = Array<{
  caption: string,
  media_url: string,
  media_type: string,
  permalink: string,
  timestamp: string
}>

// type Image = {
//     fname: "xxxxxxx",
//     extension: "webp"
//     path: "/assets/photos/static/"
//     altText: "blah",
// }


export type ImageDB = {
  [shortName: string]: ImageDescriptor
}

export type ImageDescriptor = {
    basePath?: string,
    fname: string,
    extension?: string,
    altText: string,
    href?: string,
    caption?: string,
    height?: number,
    width?: number,
    landscape?: { height: number, width: number},
    portrait?: { height: number, width: number},
}

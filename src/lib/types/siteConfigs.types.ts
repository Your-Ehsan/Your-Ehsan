export type ImageReference = {
  _ref: string
  _type: 'reference'
}

export type ImageType = {
  _type: 'image'
  asset: ImageReference
}

export type LinkType = {
  _type: 'links'
  _key: string
  link: string
  icon: ImageType
}

export type SiteConfigsType = {
  poster: {
    _type: 'image'
    asset: ImageReference
  }
  socialLinks: LinkType[]
  _createdAt: string
  Icon: ImageType
  title: string
  _updatedAt: string
  overview: string
  _rev: string
  _type: 'siteConfigs'
  _id: string
}

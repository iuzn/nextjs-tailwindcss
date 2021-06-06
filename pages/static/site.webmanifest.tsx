import React, { Component } from 'react'
import { config as x } from '../../config'

export default class SiteWebmanifest extends Component {
  static getInitialProps({ res }: { res: any }) {
    res.setHeader('Content-Type', 'text/json')
    res.write(`{
  "name": "${x.name}",
  "short_name": "${x.name}",
  "icons": [
    {
      "src": "${x.icon192}",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "${x.icon512}",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "description": "Element Blog",
  "theme_color": "${x.themeColor}",
  "display": "standalone",
  "background_color": "${x.backgroundColor}",
  "start_url": "/",
  "dir": "ltr",
  "lang": "tr-TR",
  "orientation": "portrait-primary",
  "prefer_related_applications": true,
  "manifestUrl": "https://${x.webSite}/static/site.webmanifest",
}
`)
    res.end()
  }
}

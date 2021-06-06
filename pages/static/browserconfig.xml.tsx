import React, { Component } from "react";
import { config as x } from "../../config";

export default class SiteWebmanifest extends Component {
  static getInitialProps({ res }: { res: any }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(`<?xml version="1.0" encoding="utf-8"?>
<browserconfig><msapplication><tile><square70x70logo src="${x.icon70}"/><square150x150logo src="${x.icon150}"/><square310x310logo src="${x.icon310}"/><TileColor>#ffffff</TileColor></tile></msapplication></browserconfig>`);
    res.end();
  }
}

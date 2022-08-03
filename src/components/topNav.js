import React, { PureComponent } from 'react'
import {Menu,Button} from "antd"
export default class TopNav extends PureComponent {
    consoleHello(){
        console.log("hello")
    }
  render() {
    return (
        <>
        <Button type="primary" onClick={e=>{this.consoleHello()}}>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </>
    )
  }
}

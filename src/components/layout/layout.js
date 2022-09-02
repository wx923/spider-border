import React, { memo } from 'react'
import Topbar from "./layout-top/topbar.js"
import WxContent from './layout-content/content.js'
const Pagelayout = memo((props) => {
  return (<>
    <Topbar></Topbar>
    <WxContent routes={props.routes}></WxContent>
    </>
  )
})

export default Pagelayout;
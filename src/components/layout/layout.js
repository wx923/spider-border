import React, { memo } from 'react'
import Topbar from "./layout-top/topbar.js"
import WxContent from './layout-content/content.js'
import Footer from './layout-footer/layout-footer.js'
const Pagelayout = memo((props) => {
  return (<>
    <Topbar></Topbar>
    <WxContent routes={props.routes}></WxContent>
    <Footer></Footer>
    </>
  )
})

export default Pagelayout;
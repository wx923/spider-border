import Pagelayout from "@/components/layout/layout"
import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"
const Home = memo((props) => {
  return (
    <>
    <Pagelayout routes={props.route.routes}></Pagelayout>
    </>
    )
})

export default Home
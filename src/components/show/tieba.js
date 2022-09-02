import React, { useState } from 'react'
import { renderRoutes } from 'react-router-config'

function WXTieba(props){
  return (
    <>
    {renderRoutes(props.route.routes)}
    </>
  )
}

export default WXTieba;
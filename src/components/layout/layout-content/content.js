import React, { memo,Component} from 'react'
import { renderRoutes } from 'react-router-config'
import {NavLink} from "react-router-dom"
import ContentWarapper, {ContentWarapperLeft,ContentWarapperRight}from "./content-wrapper"

class WxContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            leftChoose:[{"tieba":"贴吧"},{"xiaohongshu":"小红书"},{"other":"其他网站"},{"tips":"注意事项"}]
        }
    }
    render(){
    return (
    <>
    <ContentWarapper className='wrap-middle'>
        <ContentWarapperLeft>
            <div className='badge'>
                <div className='circle-badge wrap-middle'></div>
            </div>
            <div className="divider"></div>
            {
                this.state.leftChoose.map((value,index)=>(
                    <NavLink to={'/home/'+Object.keys(value)[0]} key={Object.keys(value)[0]}><div className='show-options' >{Object.values(value)[0]}</div></NavLink>
                ))
            }
        </ContentWarapperLeft>
        <ContentWarapperRight>{renderRoutes(this.props.routes)}</ContentWarapperRight>
    </ContentWarapper>
    </>
  )
    }
}

export default WxContent;
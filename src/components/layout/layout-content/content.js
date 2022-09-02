import React, { memo, Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from "react-router-dom"
import ContentWarapper, { ContentWarapperLeft, ContentWarapperRight, ListWrapperRight } from "./content-wrapper"
import { List, Menu } from 'antd';
import { SlidersTwoTone, ProfileTwoTone } from '@ant-design/icons';

class WxContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftChoose: [{ "tieba": "贴吧" }, { "xiaohongshu": "小红书" }, { "other": "其他网站" }, { "tips": "注意事项" }]
        }
    }
    render() {
        return (
            <>
                <ContentWarapper className='wrap-middle'>
                    <ContentWarapperLeft>
                        <div className='badge'>
                            <div className='circle-badge wrap-middle'></div>
                        </div>
                        <div className="divider"></div>
                        {
                            this.state.leftChoose.map((value, index) => (
                                <NavLink to={'/home/' + Object.keys(value)[0]} key={Object.keys(value)[0]}><div className='show-options' >{Object.values(value)[0]}</div></NavLink>
                            ))
                        }
                    </ContentWarapperLeft>
                    <ContentWarapperRight>
                        <div className='value-group-selection'>
                            <Menu mode="horizontal" defaultSelectedKeys={['high-value']}>
                                <Menu.Item key="high-value" icon={<SlidersTwoTone />}>
                                    <NavLink to="/home/tieba/higtlist">高价值组</NavLink>
                                </Menu.Item>
                                <Menu.Item key="low-value" icon={<SlidersTwoTone />}>
                                   <NavLink to="/home/tieba/lowerlist">低价值组</NavLink> 
                                </Menu.Item>
                                <Menu.Item key="history-replay"  icon={<ProfileTwoTone />}>
                                    <NavLink to="/home/tieba/updata">文件下载</NavLink>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <ListWrapperRight>{renderRoutes(this.props.routes)}
                        </ListWrapperRight>
                    </ContentWarapperRight>
                </ContentWarapper>
            </>
        )
    }
}

export default WxContent;
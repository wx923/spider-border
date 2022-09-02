import React, { memo } from 'react'
import { Topwarpper } from './topwrapper'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const Topbar = memo(() => {
  const { Search } = Input;
  const setSearchValue=(value,event)=>{
    console.log(value)
    localStorage.setItem("search",value);
  }
  return (
    <div className='top-clor'>
    <Topwarpper>
    <div>爬虫项目</div>
    <Search placeholder="input search text" onSearch={setSearchValue} style={{ width: 200 }} className="top-search" />
    </Topwarpper>
    </div>
  )
})

export default Topbar
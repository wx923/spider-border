import { Button, Table, message} from 'antd';
import React, { useState } from 'react';
import ListWrapper from "./tiebaWrapper";
import {RequestLowTieba,sendChooseLowerTiebaItem} from "@/axios/index"
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render:(text)=>{
      return <a href={text.link}>{text.mytext}</a>;
    }
  },
  {
    title: '文本',
    dataIndex: 'text',
    render:(text)=>{
      return <a href={text.link}>{text.mytext}</a>;
    }
  },
  {
    title: '时间',
    dataIndex: 'time',
    render:(text)=>{
      return <a href={text.link}>{text.mytext}</a>;
    }
  },
];

var data = [];
var page_num=0;


RequestLowTieba().then((value) => {
    var firstData=value.data;
    console.log(value);
    page_num=firstData.page_num;
    firstData.forEach((value,index)=>{
        data[index]={
            key:value._id.$oid,
            text:{
              mytext:value.post_text,
              link:value.post_link
            },
            name:{
              mytext:value.user_name,
               link:value.user_link
             },
            time:{
              mytext:value.post_time,
               link:'https://www.82cat.com/tieba/reply/'+value.user_name+'/1'
             },
        }
    })
    console.log(data);
});


const WXTiebaLowShow = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const sendNewData=()=>{
    sendChooseLowerTiebaItem(selectedRowKeys,page_num).then((value)=>{
        var firstData=value.data;
        console.log(firstData);
        page_num=firstData.page_num;
        firstData.forEach((value,index)=>{
          data[index]={
            key:value._id.$oid,
            text:{
              mytext:value.post_text,
              link:value.post_link
            },
            name:{
              mytext:value.user_name,
               link:value.user_link
             },
            time:{
              mytext:value.post_time,
               link:'https://www.82cat.com/tieba/reply/'+value.user_name+'/1'
             },
        }
        })
    })

  }
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
        <ListWrapper>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          取消选择
        </Button>
        <Button type="primary" onClick={sendNewData} className="button-left">
          下一组
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `有 ${selectedRowKeys.length} 项已被选择` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </ListWrapper>
    </div>
  );
};

export default WXTiebaLowShow;
import React, { memo, useState } from 'react'
import { Col, Row, Button, message, Upload,Typography } from 'antd';
import { RequestfileNameList, RequestfileNodeNameList } from "@/axios/index.js"
import {LoadWrapper} from "./tiebaWrapper";
const { Text, Link } = Typography;
var fileName = [];
var childName = {};
var fileList=[];
RequestfileNameList().then((value) => {
  fileName = value.data;
}).then(()=>{
  fileList=Object.keys(fileName);
  fileList.map((index)=>{
    RequestfileNodeNameList(fileName[index].folder_name).then((value)=>{
      var name=fileName[index].folder_name;
      childName[name]=value.data[0];
  })
  })
});
const WXTiebaFileShow = memo(() => {
  const props = {
    name: 'file',
    action: 'http://121.196.208.81/home/files',
    headers: {
      authorization: 'authorization-text',
    },
  };
  const sendDown=(downFileName,downFileNodeName)=>{
    var Option=[
      'http://121.196.208.81/home/files?file='+downFileNodeName+'&purpose='+downFileName,
      "CNN_WindowName",
    ]
    window.open(...Option);
  }
  return (<>
  {fileName.map((value)=>{
    return (<LoadWrapper>
    <div key={value._id.$oid} ><Text strong>{value.folder_name}</Text></div>
    <div key={childName[value.folder_name]._id.$oid} >{childName[value.folder_name].contain_file_names.map((name)=>{
      return <>
      <Row gutter={10}>
          <Col span={8}>{name}</Col>
          <Upload {...props}>
                <Button >上传</Button>
          </Upload>
          <Button onClick={()=>{
            sendDown(value.folder_name,name);
            console.log(value.folder_name);
          }}>下载</Button>
        </Row>
      </>
    })}</div>
  </LoadWrapper>)
  })}
  </>)
})

export default WXTiebaFileShow
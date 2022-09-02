import React,{useRef, useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Alert } from 'antd';
import "@/asset/css/loginStyle.css"
import classnames from "classnames"
export default function Login(props) {
  var [errorTipsPass,setErrorTipsPass]=useState(true);
  var [errorTipsMes,setErrorTipsMes]=useState(true);
  
  const onFinish = (values) => {
        if(values.username=="admin"&&values.password=="mas20091226"){
          localStorage.setItem("admin","true");
          props.history.push("/home/tieba");
        }else{
          setErrorTipsPass(false);
          setErrorTipsMes(true);
          return false;
        };
      };
    const onFinishFailed=function(){
      setErrorTipsMes(false);
      setErrorTipsPass(true);
    }
  return (
    <>
    <div className={classnames({"alertTips":errorTipsMes})}>
    <Alert type="error" message="输入信息有误请重新输入" banner/>
    </div>
    <div className={classnames({"alertTips":errorTipsPass})}>
    <Alert type="error" message="输入的账号密码错误" banner/>
    </div>
    <div className='login'>
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      name="username"
      rules={[{ required: true, message: 'Please input your Username!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your Password!' }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
    </Form.Item>
  </Form>
  </div>
  </>
  )
}

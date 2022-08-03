import React,{useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Alert } from 'antd';
import "@/css/loginStyle.css"
import classnames from "classnames"
export default function Login(props) {
  var [errorTips,setErrorTips]=useState(true);
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        if(values.username=="admin"&&values.password=="123456"){
          localStorage.setItem("admin","true");
          props.history.push("/");
        }else{
          return false;
        };
      };
    const onFinishFailed=function(){
      setErrorTips(false);
    }
  return (
    <>
    <Alert type="error" message="Error text" banner className={'alertTips'}/>
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
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <a className="login-form-forgot" href="">
        Forgot password
      </a>
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

import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
  componentWillMount(){
    var a=localStorage.getItem("admin");
    if(!a){
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>H</div>
    )
  }
}

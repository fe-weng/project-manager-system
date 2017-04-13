/**
 * Created by 51212 on 2017/4/11.
 */
import React, { Component } from 'react';
import { Icon, Modal } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LoginOutConfirm = Modal.confirm;
require('./Header.scss');
class Header extends Component{
    constructor(props){
        super(props);
        this.handleLoginOut = this.handleLoginOut.bind(this);
        console.log(this.props);
    }
    handleLoginOut(){
        var _this = this;
        LoginOutConfirm({
            title : "确定要推出登录么？",
            onOk(){
                _this.props.history.push('/LoginIn')
            },
            onCancel(){
                console.log('cancel');
            }
        });
    }
    render(){
        return(
            <header className="header">
                <div className="header-info">
                    <Icon type="appstore" />
                    项目管理系统
                </div>
                <div className="login-info">
                    <span className="userName">{ this.props.location.state.userName}</span>
                    <Icon type="poweroff" onClick={this.handleLoginOut}/>
                </div>
            </header>
        )
    }
}

export default Header;
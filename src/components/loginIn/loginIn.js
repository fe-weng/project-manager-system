/**
 * Created by 51212 on 2017/4/7.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import createBrowserHistroy from 'history/createBrowserHistory';
import ProjectManage from '../projectManage/projectManage';

require('./loginIn.scss');
//const newHistroy = createBrowserHistroy();
class LoginIn extends Component{
    static contextTypes : {
        router : React.PropTypes.object
    }
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            password : '',
            nameErr : '',
            pwdErr : '',
            canLoginIn : true
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginIn = this.handleLoginIn.bind(this);
        this.handleForgetPwd = this.handleForgetPwd.bind(this);
    }
    //用户名输入
    handleUserNameChange(e){
        this.setState({
            userName : e.target.value
        })
    }
    //用户密码输入
    handlePasswordChange(e){
        this.setState({
            password : e.target.value
        })
    }
    //登录
    handleLoginIn(){
        if(this.state.userName === null || this.state.userName === '' || this.state.password === null || this.state.password === ''){
            if(this.state.userName === null || this.state.userName === ''){
                this.setState({
                    nameErr : '用户名不能为空'
                })
            }else{
                this.setState({
                    nameErr : ''
                })
            }
            if(this.state.password === null || this.state.password === ''){
                this.setState({
                    pwdErr : '密码不能为空'
                })
            }else{
                this.setState({
                    pwdErr : ''
                })
            }
            this.setState({
                canLoginIn : false
            })
        }else{
            this.setState({
                nameErr : '',
                pwdErr : '',
                canLoginIn : true
            })
        }
        if(!this.state.canLoginIn) {return;}
        //提交用户信息，跳转到管理系统主页
        //TODO
        //没有建立本地服务器，之后在研究，直接跳转
        console.log(this.props.history);
        //this.proop.router.push('/projectManage');
        this.props.history.push('/ProjectManage');
    }
    handleForgetPwd(){
        //TODO
        //跳转到忘记密码页面
    }
    render(){
        return (
            <div className="login-view">
                <div className="login-container">
                    <div className="login-title">后台管理系统</div>
                    <div className="login-main">
                        <div className="login-userName" >
                            <label>
                                <span className="userName-span">User name</span>
                                <input type="text" className="userName-input" onChange={this.handleUserNameChange}/>
                                <span className="error-tip">{this.state.nameErr}</span>
                            </label>
                        </div>
                        <div className="login-password">
                            <label>
                                <span className="pwd-span">Password</span>
                                <input type="password" className="password-input" onChange={this.handlePasswordChange}/>
                                <span className="error-tip">{this.state.pwdErr}</span>
                            </label>
                        </div>
                        <div className="loginIn-btn" onClick={this.handleLoginIn}>Login In</div>
                        <span className="forget-pwd" onClick={this.handleForgetPwd}>forget password</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginIn;
/**
 * Created by 51212 on 2017/4/11.
 */
import React, { Component } from 'react';
import { Icon } from 'antd';

require('./Header.scss');
class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className="header">
                <div className="header-info">
                    <Icon type="appstore" />
                    项目管理系统
                </div>
                <div className="login-info">
                    <span className="userName">{ this.props.params.userName}</span>
                    <Icon type="poweroff" />
                </div>
            </header>
        )
    }
}

export default Header;
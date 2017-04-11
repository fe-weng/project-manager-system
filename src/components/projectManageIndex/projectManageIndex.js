/**
 * Created by 51212 on 2017/4/10.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
import Header from '../Header/Header';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class ProjectManageIndex extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header params={this.props.location.state}></Header>
                <Tabs type="card" className="project-tabs">
                    <TabPane tab="项目管理" key="project-manage">1</TabPane>
                    <TabPane tab="员工管理" key="employee-manage">2</TabPane>
                    <TabPane tab="设置" key="settings">3</TabPane>
                </Tabs>
            </div>
        )
    }
}
export default ProjectManageIndex;
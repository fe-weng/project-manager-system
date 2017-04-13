/**
 * Created by 51212 on 2017/4/10.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
import Header from '../Header/Header';
import ProjectManage from '../projectManage/projectManage';
import TextTable from '../textTable/textTable';
import { Icon, Tabs } from 'antd';
//import TabExtraContent from '../TabExtraContent/TabExtraContent';
require('./projectManageIndex.scss');
const TabPane = Tabs.TabPane;

const TabExtraContent =  <div className="project-tabExtraContent"><span className="search"><Icon type="search" />查询</span><span className="add"><Icon type="plus" />新增</span></div>;
class ProjectManageIndex extends Component{
    constructor(props){
        super(props);
        //模拟后台数据，获取项目数
        let projectData = require('../../json/projectData..json');
        let lastestNews = require('../../json/lastestNews..json');
        let taskData = require('../../json/taskData..json');
        console.log(projectData);
        this.state = {
            projectData : projectData,
            lastestNews : lastestNews,
            taskData : taskData
        }
    }
    render(){
        let { projectData, lastestNews, taskData } = this.state;
        return (
            <div>
                <Header {...this.props}></Header>
                <Tabs type="card" className="project-tabs" tabBarExtraContent={TabExtraContent}>
                    <TabPane tab="项目管理" key="project-manage">
                        <ProjectManage projectData={projectData} className="mg30"></ProjectManage>
                        <div className="pd30 clear-both">
                            <TextTable className="fl-l" lastestNews={lastestNews} textStyle="0"></TextTable>
                            <TextTable className="fl-r" taskData={taskData} textStyle="1"></TextTable>
                        </div>
                    </TabPane>
                    <TabPane tab="员工管理" key="employee-manage">2</TabPane>
                    <TabPane tab="设置" key="settings">3</TabPane>
                </Tabs>
            </div>
        )
    }
}
export default ProjectManageIndex;
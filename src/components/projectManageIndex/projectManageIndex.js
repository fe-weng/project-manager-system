/**
 * Created by 51212 on 2017/4/10.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, browserHistory, Switch} from 'react-router-dom';
import Header from '../Header/Header';
//import ProjectManage from '../projectManage/projectManage';
//import TextTable from '../textTable/textTable';
import { Icon, Tabs } from 'antd';
import ProjectManageFirstView from '../projectManageFirstView/projectManageFirstView';
import ProjectInfo from '../projectInfo/projectInfo';

require('./projectManageIndex.scss');
const TabPane = Tabs.TabPane;

const TabExtraContent =  <div className="project-tabExtraContent"><span className="search"><Icon type="search" />查询</span><span className="add"><Icon type="plus" />新增</span></div>;

class ProjectManageIndex extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header {...this.props}></Header>
                <Tabs type="card" className="project-tabs" tabBarExtraContent={TabExtraContent}>
                    <TabPane tab="项目管理" key="project-manage">
                        <Router>
                            <div>
                                <Route exact path="/projectManageIndex" component={ProjectManageFirstView}></Route>
                                <Route path="/projectManageIndex/projectInfo" component={ProjectInfo}></Route>
                            </div>
                        </Router>
                    </TabPane>
                    <TabPane tab="员工管理" key="employee-manage">2</TabPane>
                    <TabPane tab="设置" key="settings">3</TabPane>
                </Tabs>
            </div>
        )
    }
}
export default ProjectManageIndex;
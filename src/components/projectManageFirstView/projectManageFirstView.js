/**
 * Created by 51212 on 2017/4/19.
 */
import React from 'react';
import ProjectManage from '../projectManage/projectManage';
import TextTable from '../textTable/textTable';

class ProjectManageFirstView extends React.Component{
    constructor(props){
        super(props);

        //模拟后台数据，获取项目数
        let projectData = require('../../json/projectData..json');
        let lastestNews = require('../../json/lastestNews..json');
        let taskData = require('../../json/taskData..json');
        this.state = {
            projectData : projectData,
            lastestNews : lastestNews,
            taskData : taskData
        }
    }
    render(){
        let { projectData, lastestNews, taskData } = this.state;
        return(
            <div>
                <ProjectManage projectData={projectData} className="mg30"></ProjectManage>
                <div className="pd30 clear-both">
                    <TextTable className="fl-l" lastestNews={lastestNews} textStyle="0"></TextTable>
                    <TextTable className="fl-r" taskData={taskData} textStyle="1"></TextTable>
                </div>
            </div>
        )
    }
}
export default ProjectManageFirstView;
/**
 * Created by 51212 on 2017/4/19.
 */
import React from 'react';
import { Table, Icon, Progress } from 'antd';

//获取后台数据的对应配置
const configParams = require('../../json/config.json');
const { statusList, priorityList } = configParams;

class ProjectInfo extends React.Component{
    constructor(props) {
        super(props);
        const projectId = this.props.location.state.projectId;
        //将 projectId 传入后台，获取项目信息
        //无后台所以直接模拟数据
        const projectInfoData = require('../../json/projectInfo..json');
        this.state = {
            projectInfoData : projectInfoData
        };
    }
    render() {
        const { projectInfoData } = this.state;
        return (
            <div className="projectInfo-component">
                <div className="title">
                    <span>{ projectInfoData.name}</span>
                    <Icon type="edit" className="icon-edit"/>
                </div>
                <div className="main">
                    <ul className="project-info-des">
                        <li>项目编号：{ projectInfoData.projectNum }</li>
                        <li>负责人：{ projectInfoData.principal }</li>
                        <li>statue : { statusList[projectInfoData.status] }</li>
                        <li>计划开始时间：{ projectInfoData.plan_start_time }</li>
                        <li>计划完成时间：{ projectInfoData.plan_end_time }</li>
                        <li>预估耗时：{ projectInfoData.plan_durantion }</li>
                        <li>实际开始时间：{ projectInfoData.actual_start_time }</li>
                        <li>实际完成时间：{ projectInfoData.actual_end_time }</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default ProjectInfo;
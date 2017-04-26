/**
 * Created by 51212 on 2017/4/19.
 */
import React from 'react';
import { Table, Icon, Progress, Modal } from 'antd';
import TextTable from '../textTable/textTable';

require('./projectInfo..scss');
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
        this.addPerson = this.addPerson.bind(this);
    }
    addPerson(){

    }
    render() {
        const { projectInfoData } = this.state;
        let percentData = projectInfoData.progress;
        let percent = (() => {
            if(percentData.indexOf('%') !== -1){
                return Number(percentData.slice(0, percentData.indexOf('%')));
            }
            return Number(percentData);
        })();
        console.log(percent);
        let partner = () => {
            let partnerArr =  projectInfoData.partner;
            if(partnerArr.length != 0){
                return partnerArr.map( (value, index) => {
                    //未准备人物头像，拿个图标替换
                    return (
                        <div className="partner-img-container">
                            <Icon type="frown-o" />
                        </div>
                    )
                })
            }
        };
        return (
            <div className="projectInfo-component">
                <div className="top-part">
                    <div className="title">
                        <span>{ projectInfoData.name}</span>
                        <Icon type="edit" className="icon-edit"/>
                    </div>
                    <div className="main">
                        <ul className="project-info-des">
                            <li>项目编号：{ projectInfoData.projectNum }</li>
                            <li>负责人：{ projectInfoData.principal }</li>
                            <li>状态 : { statusList[projectInfoData.status] }</li>
                            <li>计划开始时间：{ projectInfoData.plan_start_time }</li>
                            <li>计划完成时间：{ projectInfoData.plan_end_time }</li>
                            <li>预估耗时：{ projectInfoData.plan_duration }天</li>
                            <li>实际开始时间：{ projectInfoData.actual_start_time }</li>
                            <li>实际完成时间：{ projectInfoData.actual_end_time }</li>
                            <li>优先级：{ priorityList[projectInfoData.priority] }</li>
                            <li>进度：<div><Progress className="progress" type="line" percent={percent} showInfo={false} strokeWidth={20}/> {percent}%</div></li>
                            <li>{ partner() } <div className="partner-img-add" onClick={ this.addPerson }><Icon type="plus" /></div></li>
                        </ul>
                        <div className="project-info-right-part">
                            <div className="right-part-title">项目描述</div>
                            <div className="right-part-content">{ projectInfoData.project_des }</div>
                        </div>
                    </div>
                </div>
                <div className="bottom-part">
                    <TextTable textStyle="2" className="fl-l" lastestNews={ projectInfoData.history_log }></TextTable>
                </div>
            </div>
        )
    }
};
class ChoosePersonModal extends React.Component{
    static defaultProps = {
        showModal : false
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
                <Modal title="选人">
                    <div className="modal-main">
                        <div className="left-part"></div>
                        <div className="right-part"></div>
                    </div>
                </Modal>
        )
    }
}
export default ProjectInfo;
/**
 * Created by 51212 on 2017/4/10.
 */
import React, { Component } from 'react';
import { Table, Progress, Modal, Icon } from 'antd';
import { Link } from 'react-router-dom';

const configParams = require('../../json/config.json');
const { statusList, priorityList } = configParams;
//const statusList = ["最新", "进行中", "完成"];
//const priorityList = ["待定", "普通", "紧急"]
require('./projectManage.scss');
class ProjectManage extends Component{
    constructor(props){
        super(props);
        //获取父级组件传入的参数
        const { projectData } = this.props;
        const columns = [{
            title : "项目名称",
            dataIndex : "name",
            key : "name",
            className : "project-manage-name",
            width : "10%"
        },{
            title : "负责人",
            dataIndex : "principal",
            key : "principal",
            width : "10%"
        },{
            title : "开始时间",
            dataIndex : "actual_start_time",
            key : "actual_start_time",
            width : "15%"
        },{
            title : "结束时间",
            dataIndex : "actual_end_time",
            key : "actual_end_time",
            width : "15%"
        },{
            title : "进度",
            //dataIndex : "progress",
            key : "progress",
            className : "project-manage-progress",
            width : "20%",
            render : (text, record, index) => {
                const percent = ((text) => {
                    if(text.progress.indexOf('%') > -1){
                        return Number(text.progress.slice(0, text.progress.indexOf('%')));
                    }
                    return Number(text.progress);
                })(text);
                return <div><Progress type="line" percent={percent} showInfo={false} strokeWidth={20}/> {percent}%</div>
            }
        },{
            title : "状态",
            //dataIndex : "status",
            key : "status",
            className : "project-manage-status",
            width : "5%",
            render : (text, record, index) => {
                const className = "status-" + text.status;
                return <span className={className} onClick={ () => this.showStatus(text)}>{statusList[text.status]}</span>
            }
        },{
            title : "操作",
            key : "action",
            render : (text, record, index) => (
                <span>
                    <Link className="show-info" to={{pathname : "/projectManageIndex/projectInfo", state : {projectId : text.projectId}}}>查看信息</Link>
                    <span className="show-task">分配任务</span>
                    <span className="delete">删除</span>
                </span>
            ),
            width : "25%"
        }];
        this.state = {
            table : {
                pagination : true,
                bordered : true,
                dataSource : projectData,
                columns : columns,
                className : 'project-manage-table'
            }
        };
    }
    showStatus(text){
        this.setState({
           statusModal : {
                showModal : true,
                params : text
           }
        })
    }
    render(){
        return (
            <div>
                <Table { ...this.state.table } />
                <StatusModal {...this.state.statusModal}></StatusModal>
            </div>
        )
    }
}
class StatusModal extends Component{
    static defaultProps = {
        showModal : false
    };
    constructor(props){
        super(props);
        this.state = {
            showModal : this.props.showModal,
            params : this.props.params
        };
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState ({
            showModal : nextProps.showModal,
            params : nextProps.params
        });
    }
    handleClose(){
        this.setState({
            showModal : false,
            params : {}
        })
    }
    render(){
        const showModal = this.state.showModal;
        if(showModal){
            return(
                <div className="showModal">
                    <div className="showModal-container">
                        <div className="title-container">
                            <span className="title">{this.state.params.name}</span>
                            <Icon type="close" className="fl-r close-btn" onClick={this.handleClose}/>
                        </div>
                        <ul className="modal-list">
                            <li className="modal-each-li">负责人：{this.state.params.principal}</li>
                            <li className="modal-each-li">状态：<span className="col-blue">{statusList[this.state.params.status]}</span></li>
                            <li className="modal-each-li">计划开始时间：{ this.state.params.plan_start_time }</li>
                            <li className="modal-each-li">计划完成时间：{ this.state.params.plan_end_time }</li>
                            <li className="modal-each-li">实际开始时间：{ this.state.params.actual_start_time }</li>
                            <li className="modal-each-li">实际结束时间：{ this.state.params.actual_end_time }</li>
                            <li className="modal-each-li">优先级：{ priorityList[this.state.params.priority] }</li>
                            <li className="modal-each-li">预计耗时：{ this.state.params.plan_duration }天</li>
                            <li className="modal-each-li">进度：{ progress(this.state.params.progress) }</li>
                            <li className="modal-each-li partner-li">配合人：{ this.state.params.partner.join(', ')}</li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}
export default ProjectManage;

const progress = (progress) => {
        let percent;
        if(progress.indexOf('%') > -1){
            percent = Number(progress.slice(0, progress.indexOf('%')));
        }else{
            percent = Number(progress);
        }
    return <div className="progress-container"><Progress type="line" percent={percent} showInfo={false} strokeWidth={20}/> {percent}%</div>
};

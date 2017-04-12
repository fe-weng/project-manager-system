/**
 * Created by 51212 on 2017/4/10.
 */
import React, { Component } from 'react';
import { Table, Progress } from 'antd';

const statusList = ["最新", "进行中", "完成"];
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
                return <span className={className}>{statusList[text.status]}</span>
            }
        },{
            title : "操作",
            key : "action",
            render : (text, record, index) => (
                <span>
                    <span className="show-info">查看信息</span>
                    <span className="show-task">分配任务</span>
                    <span className="delete">删除</span>
                </span>
            ),
            width : "25%"
        }];
        this.state = {
            pagination : true,
            bordered : true,
            dataSource : projectData,
            columns : columns,
            className : 'project-manage-table'
        }
    }
    render(){
        return (
            <Table { ...this.state } />
        )
    }
}
export default ProjectManage;
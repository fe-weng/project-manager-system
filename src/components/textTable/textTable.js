/**
 * Created by 51212 on 2017/4/12.
 */
import React, { Component } from 'react';
import { Icon, Popover } from 'antd';

require('./textTable..scss');

const textList = ['最新动态', '任务提醒'];
class TextTable extends Component{
    constructor(props){
        super(props);
        this.getLists = this.getLists.bind(this);
    }
    getLists(){
        if(this.props.textStyle == 0){
            let lists = this.props.lastestNews;
            return lists.map( (item, index ) => {
                return (
                    <li className="news-each-li" key={item.time}>{ formatDate(item.time) } {item.des}</li>
                )
            })
        }else if(this.props.textStyle == 1){
            let lists = this.props.taskData;
            console.log(lists);
            return lists.map( (item, index) => {
                return(
                    <li className="news-each-li" key={item.time}>
                        距离<span className="col-blue">{item.projectName}</span>结束时间{formatTaskDate(item.time)}还剩<span className="col-red">{item.time_left}</span>天，目前完成度{item.progress}。
                    </li>
                )
            })
        }
    }
    render(){
        const content = textList[this.props.textStyle];
        let className =  'project-manage-text-container ' + this.props.className ;
        console.log(content);
        return(
            <div className={className}>
                <div className="title">
                    <span className="title-info">{content}</span>
                    <Popover content="查看更多" trigger="click"><span className="more-icon-container"><Icon type="bars" className="more-icon"/></span></Popover>
                </div>
                <ul className="news-list">{this.getLists()}</ul>
            </div>
        )
    }
}
const formatDate = (timestamp) => {
    let date = new Date(Number(timestamp));
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    M = M > 9 ? M : '0' + M;
    let D = date.getDate();
    D = D > 9 ? D : '0' + D;
    let H = date.getHours();
    H = H > 9 ? H : '0' + H;
    let m = date.getMinutes();
    m = m > 9 ? m : '0' + m;
    return Y + "-" + M + "-" + D + " " + H + ": " + m
};
const formatTaskDate = (timestamp) => {
    let date = new Date(Number(timestamp));
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    M = M > 9 ? M : '0' + M;
    let D = date.getDate();
    D = D > 9 ? D : '0' + D;
    return Y + "-" + M + "-" + D;
};
export default TextTable;
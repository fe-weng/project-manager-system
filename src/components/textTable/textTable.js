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
        const lists = this.props.lastestNews;
        console.log(lists);
        return lists.map( (item, index ) => {
            return (
                <li key={item.time}>{ formatDate(item.time) } {item.des}</li>
            )
        })
    }
    render(){
        const content = textList[this.props.textStyle];
        console.log(content);
        return(
            <div className="project-manage-text-container">
                <div className="title">
                    <span className="title-info">{content}</span>
                    <Popover content="查看更多" trigger="click"><Icon type="bars" /></Popover>
                </div>
                <ul>{this.getLists()}</ul>
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
export default TextTable;
/**
 * Created by 51212 on 2017/4/11.
 */
import React, { Component } from 'react';
import { Icon } from 'antd';

class TabExtraContent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <span><Icon type="search" />查询</span>
                <span><Icon type="plus" />新增</span>
            </div>
        )
    }
}
export default TabExtraContent;
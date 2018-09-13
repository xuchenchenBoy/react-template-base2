import React, { PropTypes } from 'react';
import { Breadcrumb } from 'antd';
import {Link} from 'react-router';
import Deliver from '../../components/Deliver';
import './index.less'

/**
 * 特殊格式面包屑，适用于无法通过route生成的情况
 * How to use: 页面的Viewconfig: hideBreadcrumb 设置为true, 然后引用当前组件
 * <BreadCrumb current={'查看详情'} prefix={[{link: '/manage/product-list', text: '商品管理'}]} />
 * @param prefix[array]
 * @param current[string]
 * @returns {XML}
 * @constructor
 */
function BreadCrumb ({prefix, current}) {
  return  <div className="breadcrumb">
            <Breadcrumb separator=">">
              {prefix.map(p => {
                return <Breadcrumb.Item key={p.link}>
                  <Link to={p.link}>{p.text}</Link>
                </Breadcrumb.Item>
              })}
              <Breadcrumb.Item>{current}</Breadcrumb.Item>
            </Breadcrumb>
            <Deliver vertical={true} height={16} />
          </div>
}

BreadCrumb.propTypes = {

};

export default BreadCrumb;




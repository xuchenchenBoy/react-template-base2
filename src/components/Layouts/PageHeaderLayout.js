import React from 'react';
import BreadCrumb from '../../components/BreadCrumb'
import './index.less'

console.log('BreadCrumb===', BreadCrumb)

const PageHeaderLayout = (props) => {
  const { prefix, current } = props;
  console.log(props)

  return (
    <div>
      <BreadCrumb prefix={prefix} current={current}/>
      <div className="normal-layout">{props.children}</div>
    </div>
  )
}

export default PageHeaderLayout
import React from 'react';
import './index.less'

const NormalLayout = (props) => {
  return (
    <div className="normal-layout">{props.children}</div>
  )
}

export default NormalLayout;
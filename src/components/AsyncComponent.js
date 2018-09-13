import React, { Component } from 'react';

export default function asyncComponent(importComponent, WrapperComponent = null) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      })
    }

    render() {
      const Component = this.state.component;
      if (!Component) return null
      return WrapperComponent 
        ? <WrapperComponent><Component { ...this.props } /></WrapperComponent> 
        : <Component { ...this.props } />;
    }
  }

  return AsyncComponent;
}
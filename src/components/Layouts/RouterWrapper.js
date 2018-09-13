import React from 'react'
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';

import './index.less'

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const nickName = '';
    const avatar = '';
    const menu = (
      <Menu selectedKeys={[]} >
        <Menu.Item key="logout">
          <Icon type="logout" />&nbsp;退出登录
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout className="layout-wrapper">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>网赚列表</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className="right">
              {nickName ? (
                <Dropdown overlay={menu}>
                  <span className={`action account`}>
                    <Avatar size="small" className="avatar" src={avatar} />
                    <span className="name">{nickName}</span>
                  </span>
                </Dropdown>
              ) : (
                <Spin size="small" style={{ marginLeft: 8 }} />
              )}
            </div>
          </Header>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
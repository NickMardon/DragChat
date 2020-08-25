import { Tabs } from 'antd';
import React from 'react';
import Grid from "../Grid/Grid"
import "./index.css"
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Demo = () => (
    <div className="tabs">
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Hall 1" key="1">
        <Grid />
      </TabPane>
      <TabPane tab="Hall 2" key="2">
        <Grid />
      </TabPane>
      <TabPane tab="Hall 3" key="3">
        <Grid />
      </TabPane>
      <TabPane tab="Hall 4" key="4">
        <Grid />
      </TabPane>
    </Tabs>
    </div>
);

export default Demo

import * as React from 'react';
import './TeamsCardLayout.module.css';
import { Card, Icon, Avatar, Row, Col, Descriptions, Layout, Statistic, Form, Select, List } from 'antd';
import { ITeamsCardLayoutProps } from './ITeamsCardLayoutProps';
const { Meta } = Card;
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

export default class TeamsCardLayout extends React.Component<ITeamsCardLayoutProps, {}> {


  public render(): React.ReactElement<ITeamsCardLayoutProps> {
    const { Content, Footer } = Layout;
    const data = [{
      title: "Title1",
      description: "Test description",
      status: "InProgress",
      priority: "5",
      assignedTeam: "Team1",
      assignedPerson: "Peson1",
      requesterurl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      title: "Title2",
      description: "Test description",
      status: "InProgress",
      priority: "5",
      assignedTeam: "Team2",
      assignedPerson: "Peson2",
      requesterurl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      title: "Title3",
      description: "Test description",
      status: "InProgress",
      priority: "5",
      assignedTeam: "Team3",
      assignedPerson: "Peson3",
      requesterurl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      title: "Title4",
      description: "Test description",
      status: "InProgress",
      priority: "5",
      assignedTeam: "Team4",
      assignedPerson: "Peson4",
      requesterurl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      title: "Title5",
      description: "Test description",
      status: "InProgress",
      priority: "5",
      assignedTeam: "Team5",
      assignedPerson: "Peson5",
      requesterurl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      title: "Title6",
      description: "Test description",
      status: "InProgress",
      priority: "5",
      assignedTeam: "Team6",
      assignedPerson: "Peson6",
      requesterurl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      title: "Title7",
      description: "Test description",
      status: "InProgress",
      priority: "5",
      assignedTeam: "Team7",
      assignedPerson: "Peson7",
      requesterurl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }];
    return (
      <div>
        <Layout className="layout">
          <Content style={{ padding: '0 50px' }}>
            <div className="gutter-example">
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                  <Col className="gutter-row" span={6}>
                    <Card id="myview">
                      <Statistic
                        title="My Tickets"
                        value="3"
                        precision={0}
                        valueStyle={{ color: '#3f8600' }}
                      />
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <Card id="unassignedview">
                      <Statistic
                        title="UnAssigned Tickets"
                        value="30"
                        precision={0}
                        valueStyle={{ color: '#3f8600' }}
                      />
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <Card id="openview">
                      <Statistic
                        title="Open Tickets"
                        value="10"
                        precision={0}
                        valueStyle={{ color: '#3f8600' }}
                      />
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <Card id="allview">
                      <Statistic
                        title="All Tickets"
                        value="450"
                        precision={0}
                        valueStyle={{ color: '#3f8600' }}
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item label="Status">
                    <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Select filter"
                    >
                      {children}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Priority">
                    <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Select filter"
                    >
                      {children}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Teams">
                    <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Select filter"
                    >
                      {children}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Type">
                    <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Status filter"
                    >
                      {children}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <Card style={{ width: 300 }} actions={[<Icon type="setting" key="setting" />, <Icon type="edit" key="edit" />, <Icon type="ellipsis" key="ellipsis" />,]}>
                        <Meta avatar={<Avatar src={item.requesterurl} />} title={item.title} />
                        <p>{item.description}</p>
                        <Descriptions>
                          <Descriptions.Item label="status" span={3}>{item.description}</Descriptions.Item>
                          <Descriptions.Item label="Priority" span={3}> <Avatar shape="square" style={{ background: "rgb(69, 107, 43)", color: "#fff" }}>{item.priority}</Avatar></Descriptions.Item>
                          <Descriptions.Item label="Assigned Team" span={3}>{item.assignedTeam}</Descriptions.Item>
                          <Descriptions.Item label="Assigned Person" span={3}>{item.assignedPerson}</Descriptions.Item>
                        </Descriptions>
                      </Card>
                    </List.Item>
                  )}
                />
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import Toggle from 'react-toggle'

import { CounterWidget, ProgressTrackWidget, BarChartWidget, TeamMembersWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import './DashboardOverview.css';
import "react-toggle/style.css"
import mock from './mock.js';

console.log('mock', mock);

const GraphComponent = ({ type }) => (
  <Row className="justify-content-md-center">
  <Col xs={12} sm={6} xl={4} className="mb-4">
    <AcquisitionWidget
        className="text-info"
        heading={mock[type].stats.header}
        text={mock[type].stats.text}
      />
    </Col>
  <Col xs={12} sm={6} xl={4} className="mb-4">
      <AcquisitionWidget
        className="text-success"
        heading={mock[type].recommend.header}
        text={mock[type].recommend.text}
      />
    </Col>

    <Col xs={12} sm={6} xl={4} className="mb-4">
      {/* <CounterWidget
        category="Revenue"
        title="$43,594"
        period="Feb 1 - Apr 1"
        percentage={28.4}
        icon={faCashRegister}
        iconColor="shape-tertiary"
      /> */}
    </Col>

    <Col xs={12} sm={6} xl={4} className="mb-4">
      {/* <CircleChartWidget
        title="Traffic Share"
        data={trafficShares} /> */}
    </Col>
    <Col xs={12} className="mb-4 d-none d-sm-block">
      <SalesValueWidget
        title={mock[type].chartTitle}
        value={mock[type].chartCurrentValue}
        percentage={mock[type].yesterdayPercentage}
        data={mock[type].data}
        type={mock[type].chartType}
      />
    </Col>
    <Col xs={12} className="mb-4 d-sm-none">
      {/* <SalesValueWidgetPhone
        title="Sales Value"
        value="10,567"
        percentage={10.57}
      /> */}
    </Col>

  </Row>
);

const CardComponent = ({ type }) => (
  <Row className="justify-content-md-center">
    {mock[type].data.map(item => (
      <Col xs={12} sm={6} xl={4} className="mb-4">
      <AcquisitionWidget
          className="text-info"
          heading={item.header}
          text={item.text}
        />
      </Col>
    ))}
  </Row>
);

const SettingsComponent = ({ type }) => (
<>
<h3 className="notification-text">Notification preferences:</h3>
<p className="sub-text">Changing below settings will turn on/off notification in dariowatch linked to your account.</p>
<Row>
    {mock[type].data.map(item => (
      <Col xs={12} sm={12} xl={12} className="mb-4">
        <label className="notification-label">
          <Toggle
            defaultChecked={item.checked}
            icons={false}
          />
          <span className="setting-title">{item.title}</span>
        </label>
      </Col>
    ))}
  </Row>
</>
);

export default () => {
  let type = 'stress';
  const params = useParams();
  if (params && params.type) {
    type = params.type;
  }

  let renderComponent = null;
  if (type === 'lifestyle') {
    renderComponent = <CardComponent type={type} />;
  } else if (type === 'settings') {
    renderComponent = <SettingsComponent type={type} />;
  } else {
    renderComponent = <GraphComponent type={type} />;
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <h3 className="mx-auto dario-color">{mock[type].title}</h3>
      </div>
      {renderComponent}
      {/* <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <TeamMembersWidget />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Total orders"
                    value={452}
                    percentage={18.2}
                    data={totalOrders} />
                </Col>

                <Col xs={12} className="px-0 mb-4">
                  <RankingWidget />
                </Col>

                <Col xs={12} className="px-0">
                  <AcquisitionWidget />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> */}
    </>
  );
};

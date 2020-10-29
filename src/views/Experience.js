import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  Container
} from 'reactstrap';

import Job from '../components/Job';

import '../styles.css'

const Experience = (props) => {
  const [activeTab, setActiveTab] = useState('0');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  let renderTabs = (jobs) => {
    let tabs = [];
    jobs.map((job, i) => {
      tabs.push(
        // style this for tab colors
        <NavItem key={job + '_' + i} style={{borderColor: '#bc13fe'}}> 
        {/* Style below for text colors */}
          <NavLink
            style={{color: '#c62a88'}} 
            className={classnames({active: activeTab === i.toString()})}
            onClick={() => { toggle('' + i); }}
          >
          {job.company}
        </NavLink>
      </NavItem>
      )
    });

    return (
      <Nav tabs>
        {tabs}
      </Nav>
    );
  };

  let renderJobs = (jobs) => {
    let jobArray = [];
    jobs.map((job, i) => {
      jobArray.push(
          <TabPane 
          key={job + '_pane_' + i} tabId={i.toString()}>
            <Job job={job} />
          </TabPane>
      );
    });
    return (
      <TabContent activeTab={activeTab}>
        {jobArray}
      </TabContent>
    );
  };

  return (
    <Container>
      <CardTitle className={css(styles.title)}> <h3>{props.experience.title}</h3> </CardTitle>
      <Card className={css(styles.card)}>
        <CardBody>
            {renderTabs(props.experience.jobs)}
            {renderJobs(props.experience.jobs)}
        </CardBody>
      </Card>
    </Container>
  )
}

const styles = StyleSheet.create({
  card:{
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: 'rgba(89, 9, 149, 0.6)'
  },
  title: {
    textAlign: 'left',
    color: 'white'
  }
});

export default Experience;
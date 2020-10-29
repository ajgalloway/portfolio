import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import School from './School';


const Education = (props) => {
  const [activeTab, setActiveTab] = useState('0');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  let renderTabs = (schools) => {
    let tabs = [];
    schools.map((school, i) => {
      tabs.push(
        <NavItem key={school + '_' + i}>
          <NavLink
            style={{color: '#c62a88'}} 
            className={classnames({active: activeTab === i.toString()})}
            onClick={() => {toggle(''+ i); }}
          >
            {school.name}
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

  let renderSchools = (schools) => {
    let schoolArray = [];
    schools.map((school, i) => {
      schoolArray.push(
      <TabPane 
        key={school + '_pane_' + i} tabId={i.toString()} 
        style={{borderColor: '#c62a88'}}
        >
        <School school={school} />
      </TabPane>
      )
    });
    return (
      <TabContent activeTab={activeTab} style={{borderColor: '#c62a88'}}>
        {schoolArray}
      </TabContent>
    );
  };

  return (
    <Container>
      <CardTitle className={css(styles.title)}> <h3>{props.education.title}</h3> </CardTitle>
      <Card className={css(styles.card)}>
        <CardBody>
          {renderTabs(props.education.schools)}
          {renderSchools(props.education.schools)}
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
  },
  logo: {
    height: 'auto',
    width: 100,
    margin: 10,
  }
});

export default Education;
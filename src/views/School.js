import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Container,
} from 'reactstrap';
import { RenderIcon } from '../components/Icons';

const School = (props) => {

  let renderDegrees = (degrees) => {
    return (
      <div>
        {degrees.map((degree, i) => {
          return (
            <div key={degree + '_' + i}>
              <h5 className={css(styles.degree_text)}>{degree}</h5>
            </div>
          );
        })}
      </div>
    )
  };

  let renderIcons = (names) => {
    return (
      <Container className={css(styles.icon_row)}>
        {names.map((name, i) => {
          return (
            <div key={'icon_' + i} className={css(styles.icon_group)}>
              <RenderIcon name={name} />
              <p className={css(styles.icon_text)}>{name}</p>
            </div>
          );
        })}
      </Container>
    )
  };

  let renderActivities = (activities) => {
    return (
      <div>
        <h5 style={{textAlign: 'left', color: 'white'}}>Activities: </h5>
        <ul className={css(styles.activity_list)}>
          {activities.map((activity, i) => {
            return (
              <li key={'activity_' + i} className={css(styles.activity)}>{activity}</li>
            )
          })}
        </ul>
      </div>
    )
  };

  let renderRelatedCoursework = (relatedCourses) => {
    return (
      <div>
        <h5 style={{textAlign: 'left', color: 'white'}}>Related Coursework: </h5>
        <div className={css(styles.row)}>
          <div className={css(styles.column)}>
            <ul>
              {relatedCourses.map((course, i) => {
                if (i % 2 != 0) {
                  return (
                    <li key={'course_' + i} className={css(styles.course)}>{course}</li>
                  )
                }
              })}
            </ul>
          </div>
          <div className={css(styles.column)}>
            {relatedCourses.map((course, i) => {
                if (i % 2 == 0) {
                  return (
                    <li key={'course_' + i} className={css(styles.course)}>{course}</li>
                  )
                }
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Container>
    <img className={css(styles.logo)} src={require('../media/logos/' + props.school.logo)} alt='Logo'></img>
    <h3 className={css(styles.school)}>{props.school.name}</h3>
    {renderDegrees(props.school.degrees)}
    <h5 className={css(styles.text)}>{props.school.location} | {props.school.duration}</h5>
    {renderRelatedCoursework(props.school.related_coursework)}
    {renderActivities(props.school.activities)}
    {renderIcons(props.school.technologies)}
  </Container>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 'auto',
    width: 100,
    margin: 25,
  },
  icon_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'auto'
  },
  icon_group: {
    flexDirection: 'column',
    margin: 5,
    fontSize: 40
  },
  icon_text: {
    alignSelf: 'baseline',
    padding: 0,
    margin: 0,
    fontSize: 16,
    color: 'white'
  },
  activity_list: {
    textAlign: 'left',
    listStylePosition: 'inside',
    padding: 0,
    color: 'white'
  },
  activity: {
    padding: 0,
    margin: 0
  },
  degree_text: {
    padding: 0,
    margin: 5,
    color: 'white'
  },
  column: {
    float: 'left',
    width: '50%',
    padding: 10  
  },
  row: {
    display: 'table',
    clear: 'both',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  multi_column_list: {
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 0,
    color: 'white'
  },
  course: {
    padding: 0,
    margin: 0,
    textAlign: 'left',
    listStylePosition: 'inside',
    flex: 1,
    color: 'white'
  },
  text: {
    color: 'white'
  },
  school: {
    color: 'white'
  }
});

export default School;
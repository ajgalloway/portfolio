import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import { 
  Container
 } from 'reactstrap';
import Project from '../components/Project';

const Projects = (props) => {

  let renderProjects = (projects) => {
    return (
      <Container>
        {projects.map((project, i) => {
          return <Project key={'project_' + i} project={project} index={i} />
        })}
      </Container>
    );
  };

  return (
    <Container style={{paddingTop: 125, paddingBottom: 50}}>
      <h3 className={css(styles.title)}>{props.projects.title}</h3>
      <div>
        {renderProjects(props.projects.projects)}
      </div>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: 'white'
  }
});

export default Projects;
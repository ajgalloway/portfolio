import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Card,
  CardBody,
  CardTitle,
  Container,
} from 'reactstrap';
import Skill from '../components/Skill';

const Skills = (props) => {
  let renderIcons = (skills) => {
    return (
      <Container className={css(styles.icon_row)}>
        {skills.map((skill, i) => {
          return (
              <Skill key={skill + '_' + i} skill={skill} />
          )
        })}
      </Container>
    )
  }

  return (
    <Container>
      <CardTitle className={css(styles.title)}><h3>{props.skills.title}</h3></CardTitle>
      <Card className={css(styles.card)}>
        <CardBody>
          {renderIcons(props.skills.skills)}
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
  icon_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'auto'
  }
});

export default Skills;
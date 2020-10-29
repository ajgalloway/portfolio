import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container
} from 'reactstrap';
import Profile from '../components/Profile';


const AboutMe = (props) => {
  return (
    <Container>
      <Profile />
      <CardTitle className={css(styles.title)}> <h3>{props.about_me.title}</h3> </CardTitle>
      <Card className={css(styles.card)}>
        <CardBody>
          <CardText className={css(styles.card_text)}>{props.about_me.text}</CardText>
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
  card_text: {
    color: 'white'
  }
});

export default AboutMe;
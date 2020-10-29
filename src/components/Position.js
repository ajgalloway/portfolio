import React from 'react';
import {
  Container
} from 'reactstrap';
import {StyleSheet, css} from 'aphrodite';

const Position = (props) => {
  return (
    <Container>
      <h5 className={css(styles.position)}>{props.role.position}</h5>
      <h5 className={css(styles.text)}>{props.role.location} | {props.role.duration}</h5>
      <p className={css(styles.text)}>{props.role.description}</p>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  position: {
    color: 'white'
  }
});

export default Position;
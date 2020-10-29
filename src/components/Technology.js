import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Container
} from 'reactstrap';

import logo from '../media/logos/mcneese.png'

const Technology = (props) => {
  return (
    <Container className={css(styles.icon_group)}>
      <img className={css(styles.icon)} src={logo} alt="Logo"></img>
      <br></br>
      McNeese
    </Container>
  )
}


const styles = StyleSheet.create({
  icon_group: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 5,
    padding: 0
  },
  icon: {
    height: 50,
    weight: 50,
  }
});

export default Technology;
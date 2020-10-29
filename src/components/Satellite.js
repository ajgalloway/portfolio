import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Button,
  Container
} from 'reactstrap';
import {RenderIcon} from './Icons';


const Satellite = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Container className={css(styles.satellite)}>
      <Button  id={props.icon + '_satellite'} className={css(styles.icon_button)} href={props.link} target='_blank'>
        <RenderIcon name={props.icon} style={{color: 'white'}} />
      </Button>
      <p className={css(styles.icon_text)}>{props.icon}</p>
    </Container>
  )
}

const styles = StyleSheet.create({
  satellite: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0
  },
  icon_button: {
    fontSize: 30,
    borderRadius: '50%',
    borderColor: 'white',
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c62a88'
  },
  icon_text: {
    padding: 0,
    margin: 0,
    textAlign: 'center',
    color: 'white'
  }
});

export default Satellite;
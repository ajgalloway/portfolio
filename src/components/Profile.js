import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {Container, Button} from 'reactstrap';
import Typing from 'react-typing-animation';
import {Planet} from 'react-planet';
import Satellite from './Satellite';

const Profile = (props) => {
  return (
    <Container className={css(styles.profile)}>
      <div className={css(styles.planet_container)}>
        <Planet centerContent={
          <img src={require('../media/headshot.png')} alt="Headshot" className={css(styles.headshot)} />
                }
              open
              // autoClose
              hideOrbit
              bounce
              orbitRadius={150}
          >
          <Satellite icon='LinkedIn' link='https://www.linkedin.com/in/ajgalloway/'/>
          <Satellite icon='Resume' link={require('../media/files/andrew_galloway_resume.pdf')} />
          <Satellite icon='GitHub' link='https://github.com/ajgalloway'/>
        </Planet>
      </div>
    <Typing>
      <h1 className={css(styles.name)}>Andrew Galloway</h1>
    </Typing>
    <h2 className={css(styles.title)}>Full-Stack Software Engineer</h2>
  </Container>
  )
}

const styles = StyleSheet.create({
  profile: {
    paddingTop: 175,
    paddingBottom: 25
  },
  planet_container: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50,
    height: 200,
    width: 200,
  },  
  headshot: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 200,
    width: 200,
    borderRadius:'50%',
  },
  name: {
    fontSize: 50,
    textTransform: 'capitalize',
    margin: 5,
    textAlign: 'center',
    color: 'white'
  },
  title: {
    textTransform: 'capitalize',
    margin: 5,
    textAlign: 'center',
    color: 'white'
  },
  icon_button: {
    fontSize: 30,
    margin: 10,
    borderRadius: '50%',
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Profile;
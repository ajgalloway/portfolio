import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Container,
} from 'reactstrap';
import Position from './Position';
import {RenderIcon} from './Icons';



const Job = (props) => {
  let renderPositions = (roles) => {
    let positions = [];
    roles.map((role, i) => {
      positions.push(
        <Position key={role + '_' + i} role={role} />
      );
    });
    return (
      <Container>
        {positions}
      </Container>
    );
  };

  let renderIcons = (names) => {
    return (
        <Container className={css(styles.icon_row)}>
          {names.map((name, i) => {
            return (
              <div key={name + '_div_' + i} className={css(styles.icon_group)}>
                <RenderIcon name={name} />
                <p className={css(styles.icon_text)}>{name}</p>
              </div>
            );
          })}
        </Container>
    )
  };

  return (
    <Container>
    <img className={css(styles.logo)} src={require('../media/logos/' + props.job.logo)} alt='Logo'></img>
    <h3 className={css(styles.company)}>{props.job.company}</h3>
    {renderPositions(props.job.roles)}
    {renderIcons(props.job.technologies)}
  </Container>
  );
}

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
  company: {
    color: 'white'
  }
});

export default Job;
import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {Tooltip} from 'reactstrap';
import { RenderIcon } from './Icons';


const Skill = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div  id={props.skill.name} className={css(styles.icon_group)}>
      <RenderIcon name={props.skill.name} />
      <Tooltip placement='right' isOpen={tooltipOpen} target={props.skill.name} toggle={toggle}>
        <p className={css(styles.tool_tip_text)}>{props.skill.name}</p>
        <p className={css(styles.tool_tip_text)}>{props.skill.duration}</p>
      </Tooltip>
    </div>
  )
}


const styles = StyleSheet.create({
  icon_group: {
    flexDirection: 'column',
    margin: 5,
    marginBottom: 10,
    fontSize: 40
  },
  tool_tip_text: {
    padding: 0,
    margin: 0
  }
});

export default Skill;
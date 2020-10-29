import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Tooltip
} from 'reactstrap';
import {RenderIcon} from './Icons';

const ProjectIcon = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div  id={props.icon + props.i} key={props.icon + '_' + props.i} className={css(styles.icon_group)}>
      <RenderIcon name={props.icon}/>
      <Tooltip placement='right' isOpen={tooltipOpen} target={props.icon + props.i} toggle={toggle}>
        <p className={css(styles.tool_tip_text)}>{props.icon}</p>
      </Tooltip>
    </div> 
  )
}

const styles = StyleSheet.create({
  icon_group: {
    margin: 5,
    borderRadius: '50%',
    backgroundColor: 'white',
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  tool_tip_text: {
    padding: 0,
    margin: 0
  }
})

export default ProjectIcon;
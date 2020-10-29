import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Container,
  Badge, 
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem 
} from 'reactstrap';
import ProjectIcon from './ProjectIcon';

const Project = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const dropdownToggle = () => setOpen(!dropdownOpen);
  const [showOverlay, setShowOverlay] = useState(false);

  let renderIcons = (names) => {
    return (
      <Container className={css(styles.icon_row)}>
      {names.map((name, i) => {
        return (
          <ProjectIcon key={name + '_' + i} icon={name} i={i} />
        )
      })}
      </Container>
    )
  };

  let renderBadge = (projectType) => {
    let badge = <div></div>;
    if (projectType === 'personal') {
      badge = <Badge color="primary" className={css(styles.project_badge)}>Personal Project</Badge>;
    }
    else if (projectType === 'experience') {
      badge = <Badge color="info" className={css(styles.project_badge)}>Work Project</Badge>;
    }
    else if (projectType === 'education') {
      badge = <Badge color="success" className={css(styles.project_badge)}>School Project</Badge>;
    }

    return badge;
  };

  let renderLinks = (links) => {
    if (links.length > 0) {
      return (
        <ButtonDropdown className={css(styles.project_link_button)} isOpen={dropdownOpen} toggle={dropdownToggle}>
          <DropdownToggle caret>
            Links
          </DropdownToggle>
          <DropdownMenu>
          {links.map((link, i) => {
            return <DropdownItem key={link.title + '_' + i} href={link.link} target='_blank'>{link.title}</DropdownItem>
          })}
          </DropdownMenu>
        </ButtonDropdown>
      )
    }
    else {
      return <div></div>
    }
  }

  let renderProject = (project) => {
    return (
      <div onMouseEnter={ () => setShowOverlay(true)} onMouseLeave={ () => setShowOverlay(false)} className={css(styles.image_container)}>
        <img src={require('../media/projects/' + project.image)} alt="Project Logo" className={css(styles.image)} />
        {/* (showOverlay || true) */}
        { showOverlay&& (
          <div className={css(styles.project_info)}>
            <h3 className={css(styles.project_title)}>{project.title}</h3>             
            {renderBadge(project.project_type)}
            <p className={css(styles.project_description)}>{project.description}</p>
            {renderIcons(project.technologies)}
            {renderLinks(project.links)}
          </div>
        )}
      </div>
    )
  }

  return (
    <Container>
      {renderProject(props.project)}
    </Container>
  )
}


const styles = StyleSheet.create({
  image_container: {
    display: 'flex',
    overflow: 'auto',
    flex: 1,
    flexWrap: 'wrap',
    position: 'relative',
    height: 'auto',
    width: 'auto',
    maxWidth: 750,
    marginTop: 25,
    marginBottom: 25,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    opacity: 1,
    transition: '.5s ease',
    backfaceVisibility: 'hidden',
    display: 'block'
  }, 
  project_info: {
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'rgb(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    padding: 0
  },
  project_title: {
    color: 'white',
    marginTop: 25
  },
  project_description: {
    color: 'white',
    margin: 25,
  },
  project_badge: {
    margin: 10 
  },
  icon_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'auto'
  },
  project_link_button: {
    marginTop: 25,
  }
});

export default Project;
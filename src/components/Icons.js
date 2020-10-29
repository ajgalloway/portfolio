import React from 'react';
import {FaDownload} from 'react-icons/fa';

export const RenderIcon = ({name}) => {
  name = name.toLowerCase();
  switch (name) {
    case 'java':
      return <i className="devicon-java-plain colored"></i>;
    case 'android':
      return <i className="devicon-android-plain colored"></i>;
    case 'nodejs':
      return <i className="devicon-nodejs-plain colored"></i>;
    case 'express':
      return <i className="devicon-express-original colored"></i>;
    case 'aws':
      return <i className="devicon-amazonwebservices-original colored"></i>;
    case 'mysql':
      return <i className="devicon-mysql-plain colored"></i>;
    case 'python':
      return <i className="devicon-python-plain colored"></i>;
    case 'angularjs':
      return <i className="devicon-angularjs-plain colored"></i>;
    case 'c':
      return <i className="devicon-c-plain colored"></i>;
    case 'postgresql':
      return <i className="devicon-postgresql-plain colored"></i>;
    case 'swift':
      return <i className="devicon-swift-plain colored"></i>;
    case 'django':
      return <i className="devicon-django-plain colored"></i>;
    case 'javascript':
      return <i className="devicon-javascript-plain colored"></i>;
    case 'react':
      return <i class="devicon-react-original colored"></i>;
    case 'confluence':
      return <i className="devicon-confluence-plain colored"></i>;
    case 'bitbucket':
      return <i className="devicon-bitbucket-plain colored"></i>;
    case 'docker':
      return <i className="devicon-docker-plain colored"></i>;
    case 'gitlab':
      return <i className="devicon-gitlab-plain colored"></i>;
    case 'github':
      return <i className="devicon-github-plain"></i>;
    case 'vim':
      return <i className="devicon-vim-plain colored"></i>;
    case 'mongodb':
      return <i className="devicon-mongodb-plain colored"></i>;
    case 'trello':
      return <i className="devicon-trello-plain colored"></i>;
    case 'vscode':
      return <i className="devicon-visualstudio-plain colored"></i>;
    case 'linkedin': 
      return <i class="devicon-linkedin-plain"></i>;
    case 'download', 'resume':
      return <FaDownload />;
    default:
      return <div></div>
  };
}
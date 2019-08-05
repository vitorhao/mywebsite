import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { github } from 'react-icons-kit/fa/github';
import foto from './foto.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <div id="header" className="box-shadow">
          <span>Vitor Águila</span>
          <span>vitoraguila@hotmail.com</span>
        </div>

        <div id="main">
          <div className="box box-shadow">
            <img src={foto} />
            <span className="tit">Vitor Hugo Águila</span>
            <span className="subtit">Fullstack Developer</span>

            <div className="contacts">
              <a
                href="https://github.com/vitoraguila"
                style={{ color: '#6547a0' }}
              >
                <div style={{ width: 70, height: 70 }}>
                  <Icon size={'100%'} icon={github} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/vitoraguila/"
                style={{ color: '#326d98' }}
              >
                <div style={{ width: 70, height: 70 }}>
                  <Icon size={'100%'} icon={linkedinSquare} />
                </div>
              </a>
            </div>
            <div className="summary">
              <p>
                I'm a full stack developer passionate about new technologies
                that helps to create products and solutions to empower humanity.
              </p>
              <p>
                Deep knowledge in ReactJS and React Native. Also, have a solid
                experience NodeJS, Express. I always try to update myself as
                better technologies and focus on being able to keep up with the
                trends to help in the development of my career.
              </p>
            </div>

            <br />
            <span className="txt-skills">MAIN SKILLS</span>
            <div className="skills">
              <span>ReactJS</span>
              <span>React native</span>
              <span>NodeJS</span>
              <span>TypeScript</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Firebase</span>
              <span>Docker</span>
              <span>Git / GitFlow</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Flag, Segment } from 'semantic-ui-react';
import UserCreate from './userCreate';

class App extends Component {
  state = {
    language: 'english',
  };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a Language :
          <Flag
            style={{ height: 20 }}
            name='us'
            onClick={() => {
              this.onLanguageChange('english');
            }}
          />
          <Flag
            name='pk'
            onClick={() => {
              this.onLanguageChange('urdu');
            }}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;

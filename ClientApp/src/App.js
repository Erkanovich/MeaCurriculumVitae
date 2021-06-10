import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/pages/Home';
import { Education } from './components/pages/Education';
import { Work } from './components/pages/Work';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';
import { Game } from './components/pages/Game';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/game' component={Game} />
      </Layout>
    );
  }
}

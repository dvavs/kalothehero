import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PageCtxProvider } from './utils/PageCtx'

import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Challenge from './pages/Challenge';
import Media from './pages/Media';
import NotFound from './pages/NotFound';

import Nav from './components/Nav';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <PageCtxProvider>
          <Nav />
          <div id='pad' />
          <Switch>
            <Route exact path='/' component={() => <Home />} />
            <Route exact path='/about' component={() => <About />} />
            <Route exact path='/resources' component={() => <Resources />} />
            <Route exact path='/challenge' component={() => <Challenge />} />
            <Route exact path='/media' component={() => <Media />} />
            <Route component={() => <NotFound />} />
          </Switch>
          <div id='pad' />
          <Footer />
        </PageCtxProvider>
      </Router>
    </div>
  );
}

export default App;

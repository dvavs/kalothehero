import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PageCtxProvider } from './utils/PageCtx'

import Home from './pages/Home';
import About from './pages/About';
import Contest from './pages/Contest';
import Resources from './pages/Resources';
import Klassroom from './pages/Klassroom';
import Media from './pages/Media';
import NotFound from './pages/NotFound';

import Nav from './components/Nav';
import Footer from './components/Footer'

import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      ddOpen: false
    }

    this.closeDdNav = () => {
      this.setState({
        ddOpen: false
      })
    }
  
    this.toggleDdNav = () => {
      this.setState(prevState => ({
        ddOpen: !prevState.ddOpen
      }))
    }
  }


  render() {

    const { ddOpen } = this.state

    return (
      <div className='App'>
        <Router>
          <PageCtxProvider>
            <Nav toggleNav={this.toggleDdNav} closeDdNav={this.closeDdNav} ddOpen={ddOpen}/>
            <div className='pad' />
            <Switch>
              <Route exact path='/' component={() => <Home />} />
              <Route exact path='/about' component={() => <About />} />
              <Route exact path='/contest' component={() => <Contest />} />
              <Route exact path='/resources' component={() => <Resources />} />
              <Route exact path='/klassroom' component={() => <Klassroom />} />
              <Route exact path='/media' component={() => <Media />} />
              <Route component={() => <NotFound />} />
            </Switch>
            <div className='pad' />
            <Footer />
          </PageCtxProvider>
        </Router>
      </div>
    );
  }
}

export default App;

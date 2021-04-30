import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.scss';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import kmLogo from './assets/images/kmLogo.jpg';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Kellie Matteson',
      headerLinks: [
        { title: 'Portfolio', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home:  {
        title: `All the Internet's a Stage`,
        subTitle: `And I'm an Actor who Codes`,
        text: 'Check out my portfolio projects below'
      },
      about:  {
        title: 'About Me'
      },
      contact:  {
        title: `Let's chat!`,
        subTitle: 'interested in collaboration?'
      }
    }
  }
  render(){

  return(
    <Router>
      <Container className="p-0" fluid={true}>
        
        <NavBar className="border-bottom" bg="transparent" expand="lg">
          <NavBar.Brand>
            <img className="kmLogo" src={kmLogo} style={{width:100, marginTop: -7, paddingRight:8}} />
                    <a href="/">Kellie Matteson</a>    
          </NavBar.Brand>
          <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <NavBar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Portfolio</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>

            </Nav>
          </NavBar.Collapse>
        </NavBar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle}/>} />
        
        
        <Footer />


      </Container>
    </Router>
  )
    
  }
}

export default App;

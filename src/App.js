import React from "react";
import "./App.css";
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Container from './components/Container/container';
import Row from './components/Row/row';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import {  BrowserRouter as Router,  Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Header> */}
      {/* </Header> */}
      {/* <Container>
      <Row> */}
    <Router>
      <Navbar />
      <Route path="/" component={About} exact/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact} />
      <Footer />
    </Router>
      {/* </Row>
      </Container> */}

    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Page from './components/page';
import Accordian from './components/accordian';
import './themestr.css';
import NavTabs from './components/navtabs';
/*
navbar top
carousel
  restuarant name
*/
class App extends React.Component {
  constructor(props) {
    super(props)
    this.props = {navItems:["Home","Menu","Directions"]};
  }
  render() {
    return (
      <>
        <Navbar />
        <Page />
        <Footer />
      </>
      /*
      state {0:home, 1:menu}
      state == 0 ? jumbotron+carousel : menu, title, col, accordians, subtitle, dishes
      */


    );
  }
}

export default App;

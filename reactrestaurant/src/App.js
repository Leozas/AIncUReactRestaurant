import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Page from './components/page';

/*
navbar top
carousel
  restuarant name
*/
function App() {
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

export default App;

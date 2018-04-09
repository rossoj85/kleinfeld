import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Fade } from 'react-router-dom';
import {LandingPage, Navbar} from './components'

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        language: 'eng',
      }
    this.changeLanguage= this.changeLanguage.bind(this)
  }

  changeLanguage(){
    this.state.language==='eng' ? 
    this.setState({
      language: 'esp'
    })
    :
    this.setState({
      language: 'eng'
    })
  }
  render() {
    console.log(LandingPage)
    console.log(this.state.language)
    const landingPageFunc =(props)=>{
      return(
        <LandingPage language={this.state.language}
        {...props}
        />
      )
    }

    //Renderings 
    return (
      <div className="root">
        <Navbar language={this.state.language} changeLanguage={this.changeLanguage}/>
        <Route exact path='/' render={landingPageFunc} />
      </div>
    );
  }
}

export default App;

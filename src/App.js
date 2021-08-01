import React from 'react';
import './App.css';
import Header from './Components/Header'
import Login from './Components/Login'
import Footer from './Components/Footer'
import Signup from './Components/Signup';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={pageNumber: 0}
  }

  setPageToSignup = () => {
    this.setState({pageNumber: 1})
  }

  setPageToLogin = () => {
    this.setState({pageNumber : 0})
  }
  // this.state= {page: 0}

  changePage = () => {
    if (this.state.pageNumber == 0) {
      return(
        <Login action = {this.setPageToSignup} />)
    } else {
      return(
        <Signup action = {this.setPageToLogin} />)
    }
  }

  render() {
    return (
      <div>
      <Header />

      {this.changePage()}

      <Footer />
      </div>
    );
    }
}

export default App;

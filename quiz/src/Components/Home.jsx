import React, { Component } from 'react'
import './Component.css'
import { Link } from 'react-router-dom'
export default class HomeComponent extends Component {

  pageup=()=>{
    this.props.pageProp(1)
  }

  render() {
    return (
      <div className='main'>
        <h1>Quiz App</h1>
    <Link to='/Quiz'><button className="play" onClick={this.pageup}>Play</button></Link>
      </div>
    )
  }
}
import React, { Component } from 'react'

export default class Class extends Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    increment=()=>{
        this.setState({
            counter :this.state.counter+1
        })
    }
    decrment=()=>{
        this.setState({
            counter :this.state.counter-1
        })
    }
    reset=()=>{
        this.setState({
            counter :this.state.counter=0
        })
    }


  render() {
    return (
      <div>
        <h1>ChariCode : {this.state.counter} </h1>
        <button onClick={this.increment}>Incrament</button>
        <button onClick={this.decrment}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}


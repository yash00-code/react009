import React, { Component } from 'react'

export default class  extends Component {

  constructor(){
    super()
    console.log("helo am the constructure----------");

    this.state={
      counter : 0
    }
    
  }

  componentDidMount(){
    console.log("helo am the compoentdidmouth-------------");
    
  }
     increament=()=>{
      this.setState({
        counter : this.state.counter+1
      })
     }
     shouldComponentUpdate(){
      console.log("i am shouldcojjpoentupadate------");
      return true
      
     }



     getSnapshotBeforeUpdate(){
      console.log("i amm getsnapshotbeforeupdate");
      
      
     }
  render() {
    return (
      <div>
      <h1>ChairCode : {this.state.counter}</h1>
      <button onClick={this.increament}>Incrament</button>

      </div>
    )
  }
}



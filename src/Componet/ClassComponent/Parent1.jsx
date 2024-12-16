import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent1 extends Component {
    recivedata=(mall)=>[
        console.log(mall,"sending data to the user")
        
      ]
    
  render() {
  
    return (
      <div>Parent1
        <Child1 recivedata={ this.recivedata}></Child1>
      </div>
    )
  }
}


import React, { Children, Component } from 'react'
import Child2 from './Child2'

export default class Parent2 extends Component {
    recivedata=(data)=>{
     console.log(data,"hai bhumika kese ha");
     
    }
  render() {
    return (
      <div>Parent2
        <Child2 recivedata={this.recivedata}></Child2>
      </div>
    )
  }
}

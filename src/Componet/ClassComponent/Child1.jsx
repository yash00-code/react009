import React, { Component } from 'react'


export default class Child1 extends Component {
    senddata=()=>[
        this.props.recivedata('hI')


    ]
      render() {
    return (
      <div>Child1
     <button onClick={this.senddata}> Click me</button>
      </div>
    )
  }
}

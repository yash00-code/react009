import React, { Component } from 'react'

export default class Child2 extends Component {
    sendata=()=>{
        this.props.recivedata("Yashwant and bhumi")

    }
  render() {
    return (
      <div>Child2

        <button onClick={this.sendata}>Send</button>
      </div>
    )
  }
}

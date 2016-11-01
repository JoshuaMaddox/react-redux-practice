import React, { Component } from 'react';
import Counter from './Counter'

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>React Webpack</h1>
        <Counter />
      </div>
    )
  }
}

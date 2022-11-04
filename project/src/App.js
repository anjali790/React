import './App.css';
import { Component } from 'react';
import { Names } from './components/Names';
// import Shopping from './components/Shopping';
// import { Toggle } from './Toggle';
// import { Header } from './components/Header';
// import { Main } from './components/Main';
// import { Select } from './components/Select';
// import { Checkbox } from './components/Checkbox';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'React' };
  }

  render() {
    return (
      <>
        {/* <Header name={this.state.name} /> */}
        {/* <Main paraNo={1}/> */}
        {/* <Main paraNo={2}/> */}
        {/* <Main paraNo={3}/> */}
        {/* <Main paraNo={4}/> */}
        {/* <Select /> */}
        {/* <Checkbox/> */}
        {/* <Shopping/> */}
        <Names/>
      </>
      )
  }
}
<<<<<<< HEAD
import './App.css';
import {InstaHeader} from './components/InstaHeader';
import {InstaPost} from './components/InstaPost';




function App() {
  return (
    <>
    <InstaHeader/>
    <InstaPost/>
    </>
  );
}

export default App;
=======
import { Component } from 'react';
import './App.css';
// import { Toggle } from './Toggle';
import { Header } from './components/Header';
import { Main } from './components/Main';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { name: 'React' };
  }

  render() {
    return (
      <>
        <Header name={this.state.name} />
        <Main paraNo={1}/>
        <Main paraNo={2}/>
        <Main paraNo={3}/>
        <Main paraNo={4}/>
      </>
      )
  }
}
>>>>>>> d71c78cc669ef59d4b0ed639a4f8b2ca8874d3e1

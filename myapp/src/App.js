import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'black', id:1},
      {name: '', age: 20, belt: 'black', id:1},
      {name: 'Ryu', age: 30, belt: 'black', id:1},
    ]
  }

  addNinja = (ninja) => {
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja]
      this.setState({
        ninjas : ninjas
      })
  }

  render(){
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>welcome</p>
        <Ninjas ninjas= {this.state.ninjas}/>
        <AddNinja addNinja= {this.addNinja} />

      </div>
    );
  }
}


export default App;

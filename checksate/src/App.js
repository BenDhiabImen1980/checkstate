// import photo from './image.jpg';
import './App.css';
import React, { Component } from 'react'
import Person from './Person'

class App extends Component {
constructor(props){
  super (props);
   this.Person ={ 
      fullName:"Mr Ali",
      bio:"aaa",
      imgSrc:'./image.jpg',
      profession:"Developpeur",
      show:false,
      counter:0
  };
}

incrementCounter = () => {
  const { counter } = this.Person;
  this.setState({ counter: counter + 1 });
};

componentDidMount() {

  setInterval(this.incrementCounter, 1000);
}

toggleShow () {
  this.setState({
    show: !this.Person.show
  })
}
  render() {
    return (
      <div className="App-header">
        
        <button onClick={this.toggleShow()} >show person </button>
         <Person data={this.Person} />}

        {/* <button onClick={this.setState({show:true})}>Show</button> */}
        <h2>{this.Person.counter}</h2>
      </div>
    )
  }
}
export default App

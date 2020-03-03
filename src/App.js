import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button} from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer:6660000,
      test:false,
      
        
    }
    setInterval(
      () => {
        this.state.test &&
        this.setState({
         timer:(this.state.timer + 1000)
        })
      },
      1000)
  }
  reset=()=>{
    this.setState({
      timer:0,

      
    })
  }
  start=()=>{
    this.setState({
      test:true,
      
      
    })
  }
  stop=()=>{
    this.setState({
      test:false,
      
    })
  }
  render() {
    let bouton
    let second = Math.floor((this.state.timer / 1000) % 60)
    let mun = Math.floor((this.state.timer / 60000) % 60)
    let hour = Math.floor((this.state.timer / 3600000) % 24)
    if (!this.state.test)
     bouton=<Button variant="success"  onClick={this.start}>Start</Button>
    else
     bouton=<Button variant="warning"  onClick={this.stop}>Pause</Button>
    // <Button variant="warning">Warning</Button>
    return (
      <div className="container">
        <h1> CHRONOMETRE </h1>
        <div className="time">
           <h1> { String(hour).padStart(2, 0) } : { String(mun).padStart(2, 0) } : { String(second).padStart(2, 0) } </h1>
        </div>
        
        <div className="text-timer">
            <div className="text-timers">Hour</div>
            <div className="text-timers">Munite</div>
            <div className="text-timers">Second</div>
        </div>
        <div className="bouton">
          {bouton}
        {/* <Button variant="success"  onClick={this.start}>Start</Button> */}
        <Button variant="danger"   onClick={this.reset}>Reset</Button>
        </div>
      </div>
      
    );
  }
}

export default App;

import React,{ Component } from 'react';
import './App.css';
import Profile from './Component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css' ;

class App extends Component {
  state = { data:{fullname:'Bouyahi Ali' ,
            bio:'I’m a freelance Tunisien web designer and developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript' ,
            profession:' Web Developer & Designer' ,
            imgSc:'/avatar.png' },
            show: false,
            count: 0,
            date: new Date(),
          } 
 
  render() { 
    return (
      <div>
        <button className='btn  btn-primary al'
         onClick={()=>this.setState({show:!this.state.show})}>
         {this.state.show?"hide":"show"}
         </button>
       {this.state.show? <Profile info={this.state.data}/> :null}
      </div>
    );
  }
}
export default App;
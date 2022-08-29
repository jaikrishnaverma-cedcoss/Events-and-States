import React, { Component } from 'react';
class Incr extends Component {
    constructor(props) {
        super(props);
    this.state = { counter:0,message:"",sepCounter:0 } 
    }
    Actioner=()=>
    {
        this.setState({counter:this.state.counter+1},()=>{
            (this.state.counter%2===0)?this.setState({message:"Even"}):this.setState({message:"Odd"})
        });
        
    }
    Counter=(type)=>
    {
     
  type=type.target.innerText;
  if(type==="DECREASE")
  {
    if(this.state.sepCounter!==0)
    this.setState({sepCounter:this.state.sepCounter-1})
  }
  else if(type==="INCREASE")
  {

    this.setState({sepCounter:this.state.sepCounter+1})
  }
  else if(type==="RESET")
  {

    this.setState({sepCounter:0})

  }
    }
    render() { 
        return (
            <>
            <h3>Q1. a: Create a Button that counts no of clicks and displays on button itself.  Now display odd or even next to the button based on the value of count.</h3>
            <button style={{padding:"10px",fontSize:"30px"}} onClick={this.Actioner}>Click {this.state.counter} Times</button>
            <p>{this.state.message}</p>
            <hr style={{width:"900px"}} />
            <h3>Q2. Create a counter with increment, decrement and reset functionality.</h3>
            <h1>Counter</h1>
            <h1>{this.state.sepCounter}</h1>
            <div style={{display:"flex" ,justifyContent:"space-between",width:"300px"}}>
                <button onClick={this.Counter}>DECREASE</button>
                <button onClick={this.Counter}>RESET</button>
                <button onClick={this.Counter}>INCREASE</button>
            </div>
            </>
        );
    }
}
 
export default Incr;
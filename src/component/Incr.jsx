import React, { Component } from 'react';
class Incr extends Component {
    constructor(props) {
        super(props);
    this.state = { counter:0,message:"" } 
    }
    Actioner=()=>
    {
        this.setState({counter:this.state.counter+1},()=>{
            (this.state.counter%2===0)?this.setState({message:"Even"}):this.setState({message:"Odd"})
        });
        
    }
    render() { 
        return (
            <>
            <button style={{padding:"10px",fontSize:"30px"}} onClick={this.Actioner}>The Number is {this.state.counter}</button>
            <p>{this.state.message}</p>
            </>
        );
    }
}
 
export default Incr;
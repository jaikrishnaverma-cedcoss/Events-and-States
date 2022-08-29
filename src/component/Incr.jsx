import React, { Component } from 'react';
class Incr extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, message: "", sepCounter: 0, number: 0, timer: '00:00:00' }
    }
    
    Actioner = () => {
        this.setState({ counter: this.state.counter + 1 }, () => {
            (this.state.counter % 2 === 0) ? this.setState({ message: "Even" }) : this.setState({ message: "Odd" })
        });

    }

    Counter = (type) => {

        type = type.target.innerText;
        if (type === "DECREASE") {
            if (this.state.sepCounter !== 0)
                this.setState({ sepCounter: this.state.sepCounter - 1 })
        }
        else if (type === "INCREASE") {

            this.setState({ sepCounter: this.state.sepCounter + 1 })
        }
        else if (type === "RESET") {

            this.setState({ sepCounter: 0 })

        }
    }
    interval = "";
    CounterTime = (event) => {
        let today = new Date();
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        if(this.state.number===0){
        this.interval = setInterval(()=> {
        sec = sec - 1;
            if (sec < 0) {
                min = min - 1;
                sec = 59;
                }
            if (min < 0) {
                hr = hr - 1;
                min = 59
            }
            this.setState({ timer: hr + "h " + min + "m " + sec + "s" });
            if (hr < 0) {
                clearInterval(this.interval)
            }
        }, 1000)
    }
    this.setState({number:this.state.number+1})

    }
    render() {
        return (
            <>
                <h3>Q1. a: Create a Button that counts no of clicks and displays on button itself.  Now display odd or even next to the button based on the value of count.</h3>
                <button style={{ padding: "10px", fontSize: "30px" }} onClick={this.Actioner}>Click {this.state.counter} Times</button>
                <p>{this.state.message}</p>
                <hr style={{ width: "900px" }} />
                <h3>Q2. Create a counter with increment, decrement and reset functionality.</h3>
                <h1>Counter</h1>
                <h1>{this.state.sepCounter}</h1>
                <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
                    <button onClick={this.Counter}>DECREASE</button>
                    <button onClick={this.Counter}>RESET</button>
                    <button onClick={this.Counter}>INCREASE</button>
                </div>
                <h3>Q3. Create a count down clock that starts on a button click with current time as start and decrements second by second.</h3>
                <h1 id="h1">React Coun Down Timer</h1>
                <h1>{this.state.timer}</h1>
                <button onClick={this.CounterTime}>START</button>
                <h3>Q4. Create a stop watch.</h3>
                <h1 id="h1">React StopWatch</h1>
                <h1>0</h1>
                <div style={{ display: "flex", justifyContent: "space-between", width: "350px" }}>
                    <button onClick={this.CounterTime}>START</button>
                    <button onClick={this.CounterTime}>PAUSE</button>
                    <button onClick={this.CounterTime}>RESUME</button>
                    <button onClick={this.CounterTime}>RESET</button>
                </div>
            </>
        );
    }
}

export default Incr;
import React, { Component } from 'react';

class DigitalClock extends Component {
    constructor(props) {
        super();

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentDidMount() {
        this.updateCanvas();
        setInterval(() => this.clock(), 1000)
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, 400, 400);
    }

    clock() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        this.setState({hours, minutes, seconds})     
    }

    showTime(){
        const {hours, minutes, seconds} = this.state;
        return (
            <div>{`Current time: ${this.leading0(hours)}:${this.leading0(minutes)}:${this.leading0(seconds)}`}</div>
        )
    }

    leading0(num){
        if (num < 10){
            return `0${num}`;
        }
        return num;
    }

    render() {
        return (
            <div>
                {this.showTime()}
                <canvas ref="canvas" width={400} height={400} />
            </div>
        );
    }
}
export default DigitalClock;
import React from "react";
import './Button.css';

class Button extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter = () =>{
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }
    
     resetCounter() {
        this.setState({ count: 0 })
    }

    render(){
        return (
                <div>
                    <p>clicker counter = {this.state.count}</p>
                    
                    <button
                        id="button"
                        onClick={(e) => this.addCounter(e)}>
                        🐼 Click me!! 🐼
                    </button>
                    
                    <button
                        id="button"
                        onClick={(e) => this.resetCounter(e)}>
                         🐼 Reset  🐼
                    </button>
                </div>
            
        )
    }
}

export default Button
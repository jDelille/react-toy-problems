import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor(props){
        super(props)
        this.state= {
            userInput:"",
            palindrome:""
        }
    }

    handleChange = (input) => {
        this.setState({ userInput: input })
    };
    handleClick = () => {
        let reverseStr = [];
        let userPhrase = this.state.userInput.replace(/\s/g, "").toLowerCase();
        
    
        for (let i = this.state.userInput.length - 1; i >= 0; i--) {
          if (this.state.userInput.charAt(i) === " ") {
            continue;
          }
          reverseStr.push(this.state.userInput.toLowerCase().charAt(i));
        }
    
        if (reverseStr.join("") === userPhrase) {
          this.setState({palindrome: "true"});
        } else {
          this.setState({palindrome: "false"});
        }
    };

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input 
                onChange={(e) => this.setState({userInput: e.target.value})}
                className="inputLine"
                />
                <button
                onClick={this.handleClick}
                className="confirmationButton"
                >
                    Czech This
                </button>
                <span
                className="resultsBox"
                >
                    Palindrome:{this.state.palindrome}
                </span>
            </div>
        )
    }
}
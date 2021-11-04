import React, { Component } from 'react';

export default class EvenAndOdds extends Component {
     constructor(props){
         super(props)
         this.state = {
             evenArray: [],
             oddArray: [],
             userInput: ''
         }
     }

     inputChange(input) {
         this.setState({userInput: input})
     }

     evenOddsArray(userInput) {
        let array = userInput.split(',')
        let evens = [];
        let odds = [];

        //even odd logic 
        for (let i = 0; i < array.length; i++ ) {
            if(array[i] % 2 === 0) {
                evens.push((array[i]));
            } else {
                odds.push((array[i]))
            }
        }

        this.setState({ evenArray: evens, oddArray: odds });

     }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input 
                    className="inputLine"
                    type="text"
                    onChange={(e) => this.inputChange(e.target.value)}
                 />
                <button 
                    className="confirmationButton"
                    onClick={() => {this.evenOddsArray(this.state.userInput)}}
                > Enter </button>
                <span className="resultsBox">Evens: {this.state.evenArray}</span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>
        )
    }
 }
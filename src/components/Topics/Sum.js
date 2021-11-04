import React, { Component } from 'react';

 class Sum extends Component {
     constructor(props) {
         super(props)
         this.state = {
             numberOne: 0,
             numberTwo: 0,
             sum: null
         } 
     }

     firstNumber(number1) {
        this.setState({numberOne: number1})
        console.log(number1)

     }

     secondNumber(number2) {
        this.setState({numberTwo: number2})
        console.log(number2)

     }


     sum() {
         let num1 = parseInt(this.state.numberOne, 10)
         let num2 = parseInt(this.state.numberTwo, 10);
         let total = (+num1 + +num2);
         this.setState({sum: total})
         console.log(this.state.sum)
     }


     
    

     

     


     
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input 
                className="inputLine"
                type="number"
                onChange={(e) => this.firstNumber(e.target.value)}
                />
                <input 
                className="inputLine"
                type="number"
                onChange={(e) => this.secondNumber(e.target.value)}
                />
                <button 
                className='confirmationButton'
                onClick={() => this.sum()}
                > Confirm </button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
            
        )
    }
 }

export default Sum;
import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor(props){
        super(props)
        this.state= {
            unFilteredArray: [
                "Ham",
                "Cheese",
                "Bread",
                "Lettuce",
                "Tomato"
            ],
            userInput: "",
            filteredArray: []
        }
    };
    
    handleChange = (input) => {
        this.setState({ userInput: input })
    };
    handleClick = (userInput) => {
        const newArr = this.state.unFilteredArray.filter( (el) =>
             (el.includes(userInput)) );
        this.setState({ filteredArray: newArr });
    };

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">
                    Unfiltered Array:
                    <br/> 
                    {JSON.stringify(this.state.unFilteredArray)}
                </span>
                <input
                type="text"
                onChange={ (e) => this.handleChange( e.target.value ) }
                className="inputLine" 
                />
                <button
                onClick={() => {this.handleClick(this.state.userInput)}}
                className="confirmationButton">
                    Filter
                </button>
                <span className="resultsBox filterStringRB">
                    Filtered Array:
                    <br/> 
                    {this.state.filteredArray.map(data => <li>{data}</li>)}
                </span>
            </div>
        )
    }
}
import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(props){
        super(props)
        this.state = {
            unFilteredArray: [
                {id: 1, villian: 'Chinch', superpowers: 'Mindcontrol'},
                {id: 2, hero: 'Chinchzilla', superpowers: 'Fire-breathing'},
                {id: 3, hero: 'Chinchkilla', superpowers: 'Shoots throwing stars out of eyes'},
                {id: 4, villian: 'Chinchwilla', superpowers: 'Speed'},
            ],
            userInput: '',
            filteredArray: []
        }
    }
    

    inputChange = (input) => {
        this.setState({userInput: input})
    }

    handleClick = (userInput) => {
        const newArr = this.state.unFilteredArray.filter((el) => (el.hasOwnProperty(userInput)))
        this.setState({filteredArray : newArr})
    }

    


    render() {
        
        
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object</h4>
                <span className="puzzleText">
                Unfiltered Array: 
                <br/>
                {this.state.unFilteredArray.map((data) => <li key={data.id}> {data.name} {data.hero} {data.villian}- {data.superpowers}</li>)}
                {/* {JSON.stringify(this.state.unFilteredArray)} */}
                </span>
                <input 
                className="inputLine"
                onChange={(e) => this.inputChange(e.target.value)}
                 />
                <button 
                className="confirmationButton"
                onClick={this.handleClick(this.state.userInput)}
                > Enter </button>
                <span className="resultsBox filterObjectRB">
                {/* {this.state.filteredArray.map((obj) => 
                {for (const prop in obj) {
                return (
                    <div>
                        {(`${prop}: ${obj[prop]}`)}
                    </div>
                    
                )
                }}
                )} */}

                {this.state.filteredArray.map((data) => <li key={data.id}> {data.hero} {data.villian} - {data.superpowers}</li>)}
                {/* {JSON.stringify(this.state.filteredArray)} */}

            </span>
                
            </div>
        )
        
    }
 }

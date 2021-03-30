import React, { Component } from 'react'
import API from '../utils/API'
import Results from '../compoents/Results'

class Saved extends Component {
    state = {
        savedBooks: []
    }


componentDidMount() {
    API.savedBook()
    .then(savedBooks => this.setState({ savedBooks: savedBooks }))
    .catch(err => console.error(err))
}

render() {
    return (
        <div className="container">
            <h2>Saved Books</h2>
            <Results books={this.state.savedBooks} />
        </div>
    )
}
}

export default Saved;
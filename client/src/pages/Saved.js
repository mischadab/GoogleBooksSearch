import API from '../utils/API'

class Saved extends Component {
    state = {
        savedBooks: []
    }
}

componentDidMount() {
    API.savedBook()
    .then(savedBooks => this.setState({ savedBooks: savedBooks }))
    .catch(err => console.error(err))
}
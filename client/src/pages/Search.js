import API from '../utils/API'

class Search extends React.Component {
    state = {
        value: "",
        books: []
    }
}


componentDidMouth() {
    this.searchBook()
}

makeBook = bookData => {
    return {
        _id: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        image: bookData.volumeInfo.imageLinks.thumbnail,
        link: bookData.volumeInfo.previewLink
    }
}


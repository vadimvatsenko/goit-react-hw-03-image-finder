import { Component } from "react";

import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = '29703536-3492bea623abb7896113a32cf';
// const query = 'cat';
const page = 1;
const perPage = 12;



export default class API extends Component {
    state = {
        image: null,
    }

    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imgName;
        const netxName = this.props.imgName
        if (prevName !== netxName) {
            await axios.get(`?key=${API_KEY}&q=${netxName}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
                .then(data => this.setState({ image: data }))
        }
    };

    render() {
        return (
            <div>
            <div>{this.props.imgName}</div>
                <div></div>
                </div>
        )
    }
}
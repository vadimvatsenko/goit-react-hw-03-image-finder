import { Component } from "react";

import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = '29703536-3492bea623abb7896113a32cf';
const query = 'cat';
const page = 1;
const perPage = 12;



export default class API extends Component {
    state = {
        imgName: this.props.imgName,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.props.imgName !== this.props.imgName) {
            fetch(`?key=${API_KEY}&q=${query}&page=${this.props.imgName}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
        }
    };

    render() {
        return (
            <div></div>
        )
    }
}
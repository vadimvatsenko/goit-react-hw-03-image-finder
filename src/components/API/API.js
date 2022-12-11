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
        
    }

    render() {
        return (
            <div></div>
        )
    }
}
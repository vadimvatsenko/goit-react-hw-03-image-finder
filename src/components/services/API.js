import React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = '29703536-3492bea623abb7896113a32cf';
const page = 1;
const perPage = 12;


async function Api() {
  return   
            const response = await axios.get(`?key=${API_KEY}&q=${nextName}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`);
            this.setState({ imageList: response.data.hits, status: 'resolved' });
      

    
  
}
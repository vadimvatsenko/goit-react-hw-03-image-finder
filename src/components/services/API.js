// import React, {Component} from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export default class Api {
  
  constructor() {
    this.searchQuery = ''// по умолчанию форма пуста, класс должен хранить эту информацию
    this.page = 1;// по умолчанию страница 1
    this.perPage = 12;
    this.params = {
      params: {
        key: '29703536-3492bea623abb7896113a32cf',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.perPage,
          
      },
    };
  }

  async fetchImg(name) {
      console.log(name)
      try {
        const urlAxios = `?page=${this.page}&q=${name}`;
        const response = await axios.get(urlAxios, this.params);
        // this.incrementPage();
        
        return response.data.hits;
        } catch (error) {
          console.log(error.message);
        }
    }
    
           

  
      incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get currentPage() {
        return this.page;
    }
    // get query() {
    //     return this.searchQuery// если нужно будет получить значение query
    // } 

    
  
}
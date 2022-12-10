import React, {Component} from "react";

import Searchbar from './Searchbar';
import SearchBarButton from "./SearchBarButton";

import { ReactComponent as SearchIcon } from '../icons/search.svg';
// импорт иконки как компонента

import ImageGallery from './ImageGallery';
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "./Modal";

import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/"


export default class App extends Component {
  state = {
    openModal: false,

    articles: [],
    isLoading: false,
    error: null,
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await axios.get("?key=29703536-3492bea623abb7896113a32cf&q=yellow+flowers&image_type=photo");
      this.setState({ articles: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }


  
  toggleModal = () => {
    this.setState(state => ({
      openModal: !state.openModal
    }))
  };

  render() {
    const {openModal, articles} = this.state;
    return (
      <div>
        <Searchbar>
          <SearchBarButton aria-label={'search button'}>
              <SearchIcon/>
          </SearchBarButton>
        </Searchbar>
        
        <ImageGallery>
          <ImageGalleryItem articles={articles } />
        </ImageGallery>
        <button type='button' onClick={this.toggleModal}>openModal</button>
        {openModal && <Modal onClose={this.toggleModal}>
          <h1>Это контент модалки</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti eum voluptates voluptatum animi totam voluptatem adipisci, ipsa dignissimos dolor! Beatae deserunt adipisci, itaque iure provident vero expedita modi? At?</p>
          <button type='button' onClick={this.toggleModal}>Close</button>
        </Modal> }
        


      </div>
    
     
   
    );
  };
}

import React, {Component} from "react";

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "./Modal";


export default class App extends Component {
  state = {
        openModal: false
  }
  
  toggleModal = () => {
    this.setState(state => ({
      openModal: !state.openModal
    }))
  };

  render() {
    const {openModal} = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem/>
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

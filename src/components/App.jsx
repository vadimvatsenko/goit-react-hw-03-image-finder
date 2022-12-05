import React, {Component} from "react";

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "./Modal";


export default class App extends Component {
  state = {
        openModal: false
    }
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Modal/>


      </div>
    
     
   
    );
  };
}

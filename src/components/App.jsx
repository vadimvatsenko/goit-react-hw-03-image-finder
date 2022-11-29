import React from "react";

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from "./ImageGalleryItem";


export const App = () => {
  return (
    <div>
    <Searchbar />
    <ImageGallery>
        <ImageGalleryItem/>
      </ImageGallery>
    </div>
    
     
   
  );
};

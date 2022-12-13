import React from "react";
import style from './ImageGalleryItem.module.scss';
import Modal from "components/Modal";


export default function ImageGalleryItem({ imageList, onClick }) {
   
    return (
        <>
            
       {imageList.map(({ id, webformatURL, tags, largeImageURL }) => ( 
           <li
               key={id}
               className={style.ImageGalleryItem}>
               <img
                   className={style.ImageGalleryItemImage}
                   src={webformatURL}
                   alt={tags}
                   data-src={largeImageURL}
                   onClick={onClick}
                   
               />
           
           </li>
           
           ))}
    </>
        

    );
}


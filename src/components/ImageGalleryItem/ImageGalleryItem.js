import React from "react";
import style from './ImageGalleryItem.module.scss';
// import { nanoid } from 'nanoid';

// const imageGalleryKey = nanoid();



export default function ImageGalleryItem({ imageList }) {
   
    return (
        <>
            
       {imageList.map(({ id, webformatURL, tags }) => ( 
        <li key={ id} className={style.ImageGalleryItem}>
            <img className={style.ImageGalleryItemImage} src={webformatURL} alt={tags} />
            
           </li>
           ))}
    </>
        

    );
}


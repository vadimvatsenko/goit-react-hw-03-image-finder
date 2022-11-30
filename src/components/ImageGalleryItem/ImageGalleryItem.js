import React from "react";
import style from './ImageGalleryItem.module.scss';
import { nanoid } from 'nanoid';

const imageGalleryKey = nanoid();



export default function ImageGalleryItem() {
    return (
       
        <li key={ imageGalleryKey} className={style.ImageGalleryItem}>
            <img className={style.ImageGalleryItemImage} src="" alt="" />
        </li>
        

    );
}


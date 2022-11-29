import React from "react";
import style from './ImageGalleryItem.module.scss';

export default function ImageGalleryItem() {
    return (
        <li className={style.ImageGalleryItem}>
            <img className={style.ImageGalleryItemImage} src="" alt="" />
        </li>
    );
}
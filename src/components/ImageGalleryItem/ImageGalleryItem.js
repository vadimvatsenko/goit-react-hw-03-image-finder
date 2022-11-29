import React from "react";
import style from './ImageGalleryItem.module.scss';
import { nanoid } from 'nanoid';

export default function ImageGalleryItem({key}) {
    return (
        <li key={ nanoid()} className={style.ImageGalleryItem}>
            <img className={style.ImageGalleryItemImage} src="" alt="" />
        </li>
    );
}
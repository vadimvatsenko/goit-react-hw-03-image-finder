import React from "react";
import style from './Searchbar.module.scss'

export default function SearchFormButton() {
    return (
        
        <button type="submit" className={style.searchFormButton}>
        <span className={style.searchFormButtonLabel}>Search</span>
    </button>
    );
}
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
// импорт иконки как компонента
import React from "react";
import style from './Searchbar.module.scss'

//allyProps - это передача aria-label

export default function SearchFormButton({...allyProps}) {
    return (
        
        <button type="submit" className={style.searchFormButton} {...allyProps}> 
        <SearchIcon/>
        <span className={style.searchFormButtonLabel}>Search</span>
        </button>
    );
}


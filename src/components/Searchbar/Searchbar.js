import style from './Searchbar.module.scss';
import React, { Component } from "react";
import SearchFormButton from './seachBarButton';

export default class Searchbar extends Component {
    render() { 
        return (
            <header className={style.searchbar}>
                <form className={style.searchForm}>
                    <SearchFormButton/>
                    
                   

                    <input
                        className={style.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
        
}
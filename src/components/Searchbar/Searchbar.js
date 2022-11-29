import style from './Searchbar.module.scss';
import React, { Component } from "react";

export default class Searchbar extends Component {
    render() { 
        return (
            <header className={style.searchbar}>
                <form className={style.searchForm}>
                    <button type="submit" className={style.searchFormButton}>
                        <span className={style.searchFormButtonLabel}>Search</span>
                    </button>
                   

                    <input
                        className={style.searchFormInput}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
        
}
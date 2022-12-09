import style from '../Searchbar/Searchbar.module.scss';
import React, { Component } from "react";
// import SearchFormButton from '../SearchBarButton/seachBarButton';

export default class Searchbar extends Component {
    render() { 
        return (
            <header className={style.searchbar}>
                <form className={style.searchForm}>

                    {this.props.children}

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
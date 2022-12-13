import React, {Component} from "react";

import Searchbar from './Searchbar';
import SearchBarButton from "./SearchBarButton";
import Modal from "./Modal";
import Gallery from "./Gallery";

import { ToastContainer } from 'react-toastify';

import { ReactComponent as SearchIcon } from '../icons/search.svg';
// импорт иконки как компонента

export default class App extends Component {
  state = {
    openModal: false,
    imgName: '',
  }
 
  toggleModal = () => {
    this.setState(state => ({
      openModal: !state.openModal
    }))
  };

  handleFormSubmit = imgName => {
    this.setState({imgName: imgName})
  }

  render() {
    const {openModal, imgName} = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}>
          <SearchBarButton aria-label={'search button'}>
            <SearchIcon />
          </SearchBarButton>
        </Searchbar>
        <ToastContainer />
        
        <Gallery imgName={imgName}
          onClick={this.toggleModal}
          onClose={this.toggleModal}
        />
        
        
      </>
    );
  };
}

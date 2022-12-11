import React, {Component} from "react";

import Searchbar from './Searchbar';
import SearchBarButton from "./SearchBarButton";
import Modal from "./Modal";
import API from "./API";

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
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}>
          <SearchBarButton aria-label={'search button'}>
            <SearchIcon />
          </SearchBarButton>
        </Searchbar>
        <ToastContainer />
        
        <API imgName={imgName} />
        
        <button type='button' onClick={this.toggleModal}>openModal</button>
        {openModal && <Modal onClose={this.toggleModal}>
          <h1>Это контент модалки</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti eum voluptates voluptatum animi totam voluptatem adipisci, ipsa dignissimos dolor! Beatae deserunt adipisci, itaque iure provident vero expedita modi? At?</p>
          <button type='button' onClick={this.toggleModal}>Close</button>
        </Modal>}
      </div>
    );
  };
}

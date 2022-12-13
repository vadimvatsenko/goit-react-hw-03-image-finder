import React, {Component} from "react";

import Searchbar from './Searchbar';
import SearchBarButton from "./SearchBarButton";
import Modal from "./Modal";
import ImageGallery from "components/ImageGallery";
import ImageGalleryItem from "components/ImageGalleryItem";
import Loader from "components/Loader";
import Error from "components/Error";
import Empty from "components/Empty";
import Api from '../services/API';
import Button from "components/Button";
import { ToastContainer } from 'react-toastify';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
// импорт иконки как компонента

export default class App extends Component {
  state = {
    openModal: false,
    imgName: '',
    imageList: [],
    error: null,
    status: 'idle',
    page: 1,
  }

  async componentDidUpdate(prevProps, prevState) {
   
    const prevName = prevState.imgName;
    const currentName = this.state.imgName;
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const currentImageList = this.state.imageList

      if (prevName !== currentName) {
          this.setState({ status: 'pandings'});
                try {
                const imgObj = await Api.fetchImg(currentName, currentPage)
                this.setState({ imageList: [...currentImageList, ...imgObj], status: 'resolved' });

                } catch (error) {
                    this.setState({ error, status: 'rejected' });
                } finally {
                    this.setState({ isLoading: false });
        }
      }
    };
 
  toggleModal = () => {
    this.setState(state => ({
      openModal: !state.openModal
    }))
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName: imgName });

  }

  handleButtonMore = () => {
      this.setState(prevState => ({
          page: prevState.page + 1
      }))
  }

  render() {
    const { openModal, imgName, imageList, error, status, page } = this.state;
     
      
        if () {
            return 
        }
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit}>
          <SearchBarButton aria-label={'search button'}>
            <SearchIcon />
          </SearchBarButton>
        </Searchbar>
        
        <ImageGallery>
          {status === 'idle' && (
          <Empty/>
          )}
          {status === 'pending' && (
         <Loader/>
          )}
          {status === 'rejected' && (
         <Error error={error.message} />
          )}
          {status === 'resolved' && (
            <ImageGallery>
              <ImageGalleryItem
                imageList={imageList} />
            </ImageGallery>
          )}

         
            
         
      
      </>
    );
  };
}

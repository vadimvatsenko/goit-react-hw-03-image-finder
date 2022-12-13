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
    // isLoading: false,
  }

  async componentDidUpdate(prevProps, prevState) {
   
    const prevName = prevState.imgName;
    const currentName = this.state.imgName;
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const currentImageList = this.state.imageList;

    

    if (prevName !== currentName || prevPage !==currentPage ) {
      this.setState({ status: 'pandings', isLoading: true});
     
      try {
         
        const imgObj = await Api.fetchImg(currentName, currentPage)

        // this.setState({ imageList: [...currentImageList, ...imgObj], status: 'resolved' });
                this.setState({ imageList: imgObj, status: 'resolved' });
        } catch (error) {
        this.setState({ error, status: 'rejected' });
        } finally {
        // this.setState({ isLoading: false });
        <Loader/>
        }
      
      }
        
  };
 
  toggleModal = () => {
    this.setState(state => ({
      openModal: !state.openModal
    }))
  };

  handleFormSubmit = name => {
    // name.preventDefault();
    this.setState({ imgName: name, page: 1  });
    
    

  }

  handleButtonMore = () => {

    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render() {
    const { openModal, imgName, imageList, error, status, page } = this.state;
     
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit}>
          <SearchBarButton aria-label={'search button'}>
            <SearchIcon />
          </SearchBarButton>
        </Searchbar>
        
        
        {status === 'idle' && (
          <Empty />
        )}
        {status === 'pending' && (
          <Loader />

        )}
        {status === 'rejected' && (
          <Error error={error.message} />
        )}
        {status === 'resolved' && (
          <ImageGallery>
            <ImageGalleryItem
              imageList={imageList}
              onClick={ this.toggleModal} />
          </ImageGallery>
        )}
        {/* {imageList.length < 12 && <Button onClick={this.handleButtonMore}/> } */}
        <Button onClick={this.handleButtonMore} /> 
        {openModal && <Modal onClose={this.toggleModal} /> }
        

        

      </>
            
         
      
      
    );
  };
}
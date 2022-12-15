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
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

// импорт иконки как компонента

export default class App extends Component {
  state = {
    openModal: false,
    imgName: '',
    imageList: [],
    imageModal: {},
    error: null,
    status: 'idle',
    page: 1,
    totalImg: 0,
    isLoading: false,
  
  }



  async componentDidUpdate(prevProps, prevState) {
   
    const prevName = prevState.imgName;
    const currentName = this.state.imgName;
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const currentImageList = this.state.imageList;
    
    // if (currentName.trim() === '' || currentImageList === []) {
    //     this.setState({
    //       status: "idle",
    //       totalImg: 1,
          
    //   });
    // }
     if (prevState.isLoading === true && !this.state.isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
    if (prevName !== currentName || prevPage !== currentPage) {
  
        this.setState({
            // status: 'pending',
            isLoading: true,  
          });
           try {
         
            const imgObj = await Api.fetchImg(currentName, currentPage)
            this.setState({

              imageList: [...currentImageList, ...imgObj.hits],
              status: 'resolved',
              totalImg: imgObj.totalHits,
              });
            
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

  getImgModal = ({ target }) => {
    this.setState({
      imageModal: {
        alt: target.alt,
        src: target.dataset.src,
      },
      openModal: true,

    });
  };

  handleFormSubmit = name => {
    this.setState({ imgName: name });
    if (name !== this.state.imgName) {
      this.setState({
        imgName: name,
        imageList: [],
        page: 1,
        

      })

    }
    if (name.trim() === '') {
      return;
    }
  }
      

  
  handleButtonMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render() {
    const { openModal, imageList, error, status, imageModal, totalImg, isLoading } = this.state;
     
    return (
      <>
        {/* <ToastContainer /> */}
        <Searchbar onSubmit={this.handleFormSubmit}>
          <SearchBarButton aria-label={'search button'}>
            <SearchIcon />
          </SearchBarButton>
        </Searchbar>
        
        
        {status === 'idle' && (
          <Empty />
        )}
        {isLoading && (
          <div style={{
            position: 'absolute',
            right: '50%',
            bottom: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
          >
             <Loader/>
          </div>
        )}
    
        {status === 'rejected' && (
          <Error error={error.message} />
        )}
        {status === 'resolved' && (
          <ImageGallery>
            <ImageGalleryItem
              imageList={imageList}
              onClick={this.getImgModal}/>

          </ImageGallery>
          
        )}
        {totalImg !== imageList.length && (<Button
          onClick={this.handleButtonMore}/> 
        )} 
        {openModal && <Modal
          onClose={this.toggleModal}
          imageModal={imageModal}
        />}
      </>
    );
  };
}





      // {status === 'pending' && (
      //     <div style={{
      //       position: 'absolute',
      //       display: 'block',
      //       right: '50%',
      //       bottom: '50%',
      //       marginTop: '20px',
      //       textAlign: 'center',
      //     }}
      //     >
      //        <Loader/>
      //     </div>
      //   )}

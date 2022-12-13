import { Component } from "react";

import ImageGallery from "components/ImageGallery";
import ImageGalleryItem from "components/ImageGalleryItem";
import Loader from "components/Loader";
import Error from "components/Error";
import Empty from "components/Empty";
import Api from '../../services/API';
import Button from "components/Button";

export default class Gallery extends Component {
  

    

  

    render() {
        const { error, status, imageList } = this.state;
        if (status === 'idle') {
            return <Empty/>
        }
        if (status === 'pending') {
            return <Loader/>
        }
        if (status === 'rejected') {
            return <Error error={error.message} />
        }
        if (status === 'resolved') {
            return (
                
                <ImageGallery>
                    <ImageGalleryItem imageList={imageList}
                                        onClick={this.props.onClick }
                    />

                    {/* {imageList.length <= 12 && <Button onClick={this.handleButtonClick}/> } */}
                    <Button onClick={this.handleButtonClick}/>
                </ImageGallery>

            );
        }
        
    }
}
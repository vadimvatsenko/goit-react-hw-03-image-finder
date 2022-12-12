import { Component } from "react";
import Loader from "components/Loader";

import ImageGallery from "components/ImageGallery";
import ImageGalleryItem from "components/ImageGalleryItem";
import Error from "components/Error";
import Empty from "components/Empty";
import Api from "components/services/API";

const newApiService = new Api();

export default class Gallery extends Component {
    state = {
        imageList: null,
        error: null,
        status: 'idle'
    }

    async componentDidUpdate(prevProps) {
        const prevName = prevProps.imgName;
        const nextName = this.props.imgName
            if (prevName !== nextName) {
                this.setState({ status: 'pandings' });
                try {
                const imgObj = await newApiService.fetchImg(nextName);
                this.setState({ imageList: imgObj, status: 'resolved' });
            } catch (error) {
                this.setState({ error, status: 'rejected' });
            } finally {
                this.setState({ isLoading: false });
            }

        }
    };

    render() {
        const { error, status, imageList } = this.state;
        const { imgName } = this.props;
        if (status === 'idle' || imageList === '') {
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
                <div>{imgName}
                <ImageGallery>
                    <ImageGalleryItem imageList={imageList } />
                </ImageGallery>
                </div>

            );
        }
        
    }
}
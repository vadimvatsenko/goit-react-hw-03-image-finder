import { Component } from "react";


import ImageGallery from "components/ImageGallery";
import ImageGalleryItem from "components/ImageGalleryItem";
import Loader from "components/Loader";
import Error from "components/Error";
import Empty from "components/Empty";
import Api from '../../services/API';
import Button from "components/Button";

export default class Gallery extends Component {
    state = {
        imageList: null,
        perPage: 12,
        error: null,
        status: 'idle'
    }

    async componentDidUpdate(prevProps) {
        const prevName = prevProps.imgName;
        const nextName = this.props.imgName;
        const prevPerPage = prevProps.page;
        const nextPerPage = this.props.perPage

            if (prevName !== nextName || prevPerPage !== nextPerPage) {
                this.setState({ status: 'pandings' });
                try {
                const imgObj = await Api.fetchImg(nextName, this.state.perPage)
                this.setState({ imageList: imgObj, status: 'resolved' });
            } catch (error) {
                this.setState({ error, status: 'rejected' });
            } finally {
                this.setState({ isLoading: false });
            }

        }
    };

    handleButtonClick = () => {
        this.setState(prevState => ({
            perPage: prevState.perPage += 12
        }))
    }

    render() {
        const { error, status, imageList } = this.state;
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
                
                <ImageGallery>
                    <ImageGalleryItem imageList={imageList} />
                  {/* {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}   */}
                    <Button onClick={this.handleButtonClick } />
                </ImageGallery>

            );
        }
        
    }
}
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
        imageList: [],
        error: null,
        status: 'idle',
        page: 1,
    }

    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imgName;
        const nextName = this.props.imgName;
        console.log(prevState.page);
        console.log(prevState.imageList)
        

        if (prevName !== nextName || prevState.page !== this.state.page) {
                
                this.setState({ status: 'pandings', imageList: [] });
                try {
                const imgObj = await Api.fetchImg(nextName, this.state.page)
                    this.setState({ imageList: [...this.state.imageList, ...imgObj], status: 'resolved' });
                    
                    window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });

            } catch (error) {
                this.setState({ error, status: 'rejected' });
            } finally {
                this.setState({ isLoading: false });
            }

        }
    };

    handleButtonClick = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
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
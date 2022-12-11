import { Component } from "react";
import Loader from "components/Loader";


import ImageGallery from "components/ImageGallery";
import ImageGalleryItem from "components/ImageGalleryItem";


import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = '29703536-3492bea623abb7896113a32cf';
const page = 1;
const perPage = 12;



export default class API extends Component {
    state = {

        image: null,
        isLoading: false,
        error: null,
    }

    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imgName;
        const nextName = this.props.imgName
        if (prevName !== nextName) {
            this.setState({ isLoading: true });
   
    
        try {
            const response = await axios.get(`?key=${API_KEY}&q=${nextName}&page=${page}&&image_type=photo&orientation=horizontal&per_page=${perPage}`);
            this.setState({ image: response.data.hits });
        } catch (error) {
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
        }
    };

    render() {
        const { isLoading, image, error } = this.state;
        const { imgName } = this.props;
        console.log(image)
        return (
            <>
                {error && <div>Error</div>}
                {isLoading && <Loader/>}
                {!imgName && <div>Its Empty</div>}
                <ImageGallery>
                 
                    {/* <ImageGalleryItem articles={image } /> */}
                </ImageGallery>
            </>
        )
    }
}
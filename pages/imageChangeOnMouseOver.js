import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = ({}) => {
    return (
        <>
        <ImageToggleOnMouseOver primaryImg="static/speakers/cat.jpeg" secondaryImg="static/speakers/Changed/cat.jpeg"alt="" />
        &nbsp;&nbsp;&nbsp;
        <ImageToggleOnMouseOver primaryImg="static/speakers/cat2.jpeg" secondaryImg="static/speakers/Changed/cat2.jpeg" alt="" />
        </>
    )
}

export default ImageChangeOnMouseOver;
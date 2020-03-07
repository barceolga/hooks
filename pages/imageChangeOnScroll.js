import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = ({}) => {
    return (
        <>
        {["cat", "cat2", "cat3", "cat4", "cat5"].map(speakerId =>{
            return (
                <div key={speakerId}>
                    <ImageToggleOnScroll
                        primaryImg={`/static/speakers/${speakerId}.jpeg`}
                        secondaryImg={`/static/speakers/Changed/${speakerId}.jpeg`}
                        alt=""
                    />
                </div>
            );
        })}
        </>
    );
};

export default ImageChangeOnScroll;
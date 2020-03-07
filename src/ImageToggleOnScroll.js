import React, {useEffect, useRef, useState} from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        })
    })
    const [inView, setInView] = useState(false);

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    };

    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        })
    };

    return (
        <img src={ inView? primaryImg: secondaryImg} alt="" ref={imageRef} />
    );
};

export default ImageToggleOnScroll;
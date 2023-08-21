import PropTypes from 'prop-types';
import { forwardRef, useState, useRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, fallback: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    let fallImage = useRef(customFallBack);

    const handleError = () => {
        setFallBack(fallImage.current);
        fallImage.current = images.noImage;
    };

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            src={fallBack || src}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    class: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({ children, className, arrow = false }) {
    const classes = cx('wrapper', {
        arrow,
        [className]: className,
    });
    return <div className={classes}>{children}</div>;
}

Popper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    arrow: PropTypes.bool,
};

export default Popper;

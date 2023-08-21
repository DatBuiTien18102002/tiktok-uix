import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderMenu({ tittle, onBack }) {
    return (
        <header className={cx('header-menu')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-tittle')}>{tittle}</h4>
        </header>
    );
}

HeaderMenu.propTypes = {
    tittle: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default HeaderMenu;

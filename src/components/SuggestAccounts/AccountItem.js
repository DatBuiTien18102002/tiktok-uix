import classNames from 'classnames/bind';
import styles from './SuggestAcounts.module.scss';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem({}) {
    const renderReview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <HeadlessTippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderReview}>
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src={images.myImage} alt="Bui Tien Dat" />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>buitiendat</strong>
                        <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Bùi Tiến Đạt</p>
                </div>
            </div>
        </HeadlessTippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src={images.myImage} alt="" />
                <Button primary className={cx('following-btn')}>
                    Follow
                </Button>
            </header>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>buitiendat</strong>
                    <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Bùi Tiến Đạt</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

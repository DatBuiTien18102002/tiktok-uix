import { useEffect, useState, useRef } from 'react';

import * as searchService from '~/services/searchService';

import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [headerInput, setHeaderInput] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceHI = useDebounce(headerInput, 500);

    const inputSearch = useRef();

    useEffect(() => {
        if (!debounceHI.trim()) {
            setSearchResult([]);
            return;
        }

        // setLoading(true);
        //C1
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q= ${encodeURIComponent(debounceHI)} &type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(true);
        //     });

        //C2
        // request
        //     .get(`users/search`, {
        //         params: {
        //             q: debounceHI,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(true);
        //     });

        //C3
        const fetchApi = async () => {
            try {
                setLoading(true);
                const result = await searchService.search(debounceHI);
                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                setLoading(true);
            }
        };

        fetchApi();
    }, [debounceHI]);

    const handleInput = (e) => {
        const searchValue = e.target.value;

        //Kiểm tra kí tự đầu tiên nhập vào có dấu cách không
        if (!searchValue.startsWith(' ')) {
            setHeaderInput(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear = () => {
        setHeaderInput('');
        inputSearch.current.focus();
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-tittle')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputSearch}
                    value={headerInput}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleInput}
                    onFocus={() => setShowResult(true)}
                />

                {headerInput && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;

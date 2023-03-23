import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../Components/Icons';
import { useEffect, useState } from 'react';
import LocationItem from '../../../Components/LocationItems/LocationItem';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showListLocation, setShowListLocation] = useState(false);
    useEffect(() => {
        if (searchValue.trim('')) {
            setSearchResult([]);
            return;
        }
        fetch(
            `https://reviewapi.riviu.co/user/keyword?region_uuid=112f7e2e9da240be937daa66b1c4d1ce&params=%7B%22page%22:1,%22page_size%22:30%7D`,
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
            });
    }, [searchValue]);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleShowLocation = () => {
        if (showListLocation === false) {
            setShowListLocation(true);
        } else {
            setShowListLocation(false);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-btn')}>
                <div className={cx('icon')}>
                    <SearchIcon className={cx('icon-search')} />
                </div>
                <input
                    type="text"
                    value={searchValue}
                    className={cx('input')}
                    placeholder="Tìm kiếm Riviu, địa điểm,...."
                    onChange={handleSearch}
                ></input>
                <div className={cx('key-search')}>
                    <div>
                        <p className={cx('heading')}> Từ khóa phổ biến</p>
                        <div className={cx('keySearch-inner')}>
                            {searchResult.map((result, index) => (
                                <div key={index}>
                                    <div className={cx('keyWord')}>{result.keyword}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('provinceDefault')} onClick={handleShowLocation}>
                    Hồ Chí Minh
                </div>
                {showListLocation && (
                    <div className={cx('province')} id="province">
                        <div className={cx('province-overplay')}></div>
                        <LocationItem />;
                    </div>
                )}
            </div>
        </div>
    );
}
export default Search;

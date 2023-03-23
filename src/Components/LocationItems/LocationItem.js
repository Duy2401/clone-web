import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './LocationItem.module.scss';
import { SearchIcon } from '../Icons/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LocationItem() {
    const [placeSearch, setPlaceSearch] = useState('');
    const [placeResults, setPlaceResults] = useState([]);
    useEffect(() => {
        fetch(`https://reviewapi.riviu.co/region?filter_result=province`)
            .then((res) => res.json())
            .then((res) => {
                setPlaceResults(res.data);
            });
    }, [placeSearch]);
    const handleDelete = () => {
        const location = document.getElementById('wrapper');
        location.style.display = 'none';

        const locationOverplay = document.getElementById('province');
        locationOverplay.style.display = 'none';
    };
    const handleSearchPlace = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setPlaceSearch(searchValue);
        }
    };
    return (
        <div className={cx('wrapper')} id="wrapper">
            <div className={cx('heading')}>
                <h2>Chọn khu vực</h2>
                <button className={cx('btn-right')} onClick={handleDelete}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-province')}>
                    <div className={cx('input')}>
                        <SearchIcon className={cx('icon')} />
                        <input
                            className={cx('inputItem')}
                            value={placeSearch}
                            placeholder="Nhập khu vực của bạn"
                            onChange={handleSearchPlace}
                        />
                    </div>
                    <div className={cx('location-list')}>
                        {placeResults.map((value, index) => (
                            <div key={index} className={cx('location-items')}>
                                <div className={cx('items')}>{value.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LocationItem;

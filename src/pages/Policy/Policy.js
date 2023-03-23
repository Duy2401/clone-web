import classNames from 'classnames/bind';
import styles from './Policy.module.scss';

import VietNamesePolicy from './VietNamesePolicy';
import EnglishPolicy from './EnglishPolicy';
import { useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Policy() {
    const [hidden, setHidden] = useState(true);
    useEffect(() => {});
    const handleHide = () => {
        setHidden(!hidden);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn_translate')}>
                <div className={cx(`${hidden ? 'active' : 'inactive'}`, [styles.btn_item])} onClick={handleHide}>
                    VN
                </div>
                <div className={cx(`${hidden ? 'inactive' : 'active'}`, [styles.btn_item])} onClick={handleHide}>
                    EN
                </div>
            </div>
            <div className={cx('policy_content')}>{(hidden && <VietNamesePolicy />) || <EnglishPolicy />}</div>
        </div>
    );
}

export default Policy;

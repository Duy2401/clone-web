import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Login from '../../../../../Components/Account/Login/login';
import styles from './RatingList.model.scss';
const cx = classNames.bind(styles);
function RatingList() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('review_inner')}>
                <div className={cx('lists_Card')}>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2022/10/08/fd5ebd1f0bf6f520e368e2f1976adc94.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Gà Nướng Bồ Đào Nha</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/03/19/adb829346793d9ec73b16ce782389c89_output.jpeg" />
                                    <h4>Dũ Thanh</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    {isOpen && <Login />}
                                    <span className={cx('count_Rating')}>37</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2022/09/27/bbd0c1494a4eca475f72e0020398839e.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>SOITHAI PREMIUM</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2020/12/02/1bdc3fb16d01d44ce425a4bcafee4630_output.jpeg" />
                                    <h4>Coffee SaiGon</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/05/04/3007f90d2ef032e460a8f77f1aa82142.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>I love matcha ❤</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/03/05/2483ccd5c8ed6b1da7d1020ea994ecd3.jpeg" />
                                    <h4>Thủy Windy</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>33</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/20/3580b04171d33604c7c6d27cb4b41bd5.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Địa điểm Nặn mụn tăm bông 99k/lần</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/01/05/973c78a385bbbb5295bd606f412be3e5.jpeg" />
                                    <h4>Mai Yến Nhi</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>58</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/29/3a02daa0ca5dfbb8591d755aa187a31c.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>𝓝𝓰𝓪̂̀𝓾 𝓬𝓸𝓯𝓯𝓮𝓮 ☕️🏡</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/07/03/e8961032ce3df4b225411ba762bfedec_output.jpeg" />
                                    <h4>Nguyễn Thị Như Ý</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>38</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/05/16/b4af91c2802f47ac9d7dbdcd4cd08407.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Daisy Nail Art — Móng xinh, móng đẹp 😘</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/04/26/f8f40b91a7212ff168cb1f188a480dff_output.jpeg" />
                                    <h4>Hoàng Kim Loan</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>60</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/12/d17638bf9cf1cef3a48499dc6e640e59.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4> RIVIU SỐP QUẦN ÁO ONLINE RẺ ĐẸP</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.vn/50/image/2020/05/18/5bf8de51e16c8c541d5eee9fc3ba1cb6_output.jpeg" />
                                    <h4>Lam Nguyễn</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>39</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/03/6ce641723b31338c259918a6072af660.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Nhà hàng nằm trên cù lao trong thành phố</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2020/10/23/56241a386616f5923088b75e253d276f_output.jpeg" />
                                    <h4> Haas TiVi Nguyen</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>24</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/03/fd6fefb86c2c195a85302fc69b3b8adb.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Trà đào cam sả 🥤</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/03/18/892598480ab0d3ca028dbe93fb05bc5a_output.jpeg" />
                                    <h4>Thôm🍍</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>46</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('lists_Card')}>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/03/14/32e661c4280089ceb3384836da956671.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Bảo tàng tp Hồ Chí Minh</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/07/03/e8961032ce3df4b225411ba762bfedec_output.jpeg" />
                                    <h4>Nguyễn Thị Như Ý</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>28</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/11/75e0fab8569c63129f85030c1ff8f4cf.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Chiếc xe bán cơm chiên cá hồi </h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.vn/res_users/2020/03/07/b0f63af533f640879d7eec35f749968e2facdcc1_mini.png" />
                                    <h4>Lư Hoàng Thành</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>33</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/05/11/980a155c470685be9a281412d11324bc.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>ⓁⓊ̀ ĐⓊ̀ ⓋⒶ́Ⓒ ⓂⓄ́Ⓝ ⓃⒼⓄⓃ ⓂⒶ̀ ⒸⒽⒶ̣Ⓨ 🤣</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/05/11/a1a732e960c40e6e35a59244505a84f7_output.jpeg" />
                                    <h4>Quìnn nè</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>40</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/07/aeb17859a51ed184701427c28ffa02a0.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>BÁNH BỘT LỌC PHAN THIẾT</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.vn/50/image/2020/06/29/da8f1df192adf8a3053f0bccc7b04388_output.jpeg" />
                                    <h4>Bụng Béo Food</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>43</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/16/474d0b292802106369c5bc3b23974853.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Mê man BÒ ÚC SỐT BẮP PHÔ MAI</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.vn/50/image/2020/05/18/008d6d1b9ef8bff5ab6e362f85e45272_output.jpeg" />
                                    <h4>Thanh Phat Le</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>37</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/06/ef6ec6e05409660220f3da38fb9f8f26.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Sushi sinh viên SIÊU RẺ - SIÊU NGON</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/04/03/c38dcc4c5bd2b9d6f5f02dbf6022209e.jpeg" />
                                    <h4> Bếu Bếu</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>48</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2022/01/04/9f6b6afd6fca0c92b6b1071a1a0e732f.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>ĐI ĂN CƠM NIÊU, MIỄN PHÍ CƠM NIÊU</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/08/10/793cf766da1133a99e0964bcc737f7b5_output.jpeg" />
                                    <h4>Lê Thảo Vi</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>6</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/05/13/79016bce1e63de74880cf801707a79a8.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>🔅Gum Fastfood🔅</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/05/12/812d4cf548f34e65ca2ee36f2996bafc_output.jpeg" />
                                    <h4>Foodierr.sg</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>6</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('lists_Card')}>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/08/ee9aff5bd784fa074c6e83adebe05f4a.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>LÀM ĐẸP VỚI LIỆU TRÌNH SẠCH MỤN</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.vn/res_users/2019/12/08/8d8afab03c4872436e3edf348a9a1334b1050aaf_mini.png" />
                                    <h4>ancungminhne</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>38</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/04/2794916a5d1c9fedde644c9d3cfb841f.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Trà Bánh</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://riviu.vn/images/no_avatar.webp" />
                                    <h4>Téo Tèo Teo</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>36</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/05/10/87e82fa43b16df7cd6ba6ff49b096b32.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Ăn vặt chuẩn Hà Nội </h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2020/08/26/4f837c1d7d90282f02fe381f4961eed3_output.jpeg" />
                                    <h4>@lenkycungKhoa</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/30/92c3e5c2dee745abd680d2660595151c.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Bảo Tàng Áo Dài</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/05/18/7eedada5c5e5de7bd671af9ce06dcc61_output.jpeg" />
                                    <h4>Phương Lê</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2022/10/01/6f61a97db46d1a2db236583971307413.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>CÔNG VIÊN NƯỚC MIKAZUKI ĐÀ NẴNG</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://lh3.googleusercontent.com/a-/AFdZucqsM6R7WZQ6d43xeCdQ_AkhzcJUMVjpPHYZ3Mzt=s96-c" />
                                    <h4>Travel Sơn Trà</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/08/a9fc524133acfb950de5027ee9b304ab.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Tô Phở Siêu To Khổng Lồ Giá Siêu Tí Hon</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2020/11/16/edf15282d9e983d7e2422a56894926c3_output.jpeg" />
                                    <h4>Hie</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>81</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/09/f57706857665df8e01f4ef8d6de27be3.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4> 𝐀̆𝐧 𝐯𝐚̣̆𝐭 𝐛𝐚́𝐧𝐡 𝐂𝐡𝐮𝐫𝐫𝐨𝐬</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.vn/res_users/2019/11/14/d391d8fc74c2e99a6d36b2705e1ca9cfee803375_mini.png" />
                                    <h4>tieumuoi</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>36</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/05/2642b71d52003250a1f461ecbd08d20d.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Mẹt bún đậu mắm tôm quá xá đã 🔥</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/03/18/892598480ab0d3ca028dbe93fb05bc5a_output.jpeg" />
                                    <h4>Thôm🍍</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/03/8a8ec2bc6556c0b2d00b1c2fefd7d8fa.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>BEEFTEAK KIỂU ĐÀM- BỮA NGON CUỐI TUẦN</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://lh3.googleusercontent.com/a-/AOh14Gh4a0lg9z3p6-zhVgEXq2cbToV4Lph5-FAMPvUy2w=s96-c" />
                                    <h4>Thanh Nữ</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>41</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('lists_Card')}>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/07/177a7df24329247bc649d1b853d48059.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Jeong BBQ, nơi món hàn ngon xỉu</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2020/11/17/fcddf085c10ffa6ae266c1b57f7eb3e2_output.jpeg" />
                                    <h4>Constance.D</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/03/31/90aa57b47c3b48af007bb5ab1d9ae052.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>𝐍𝐠𝐚̀𝐲 𝐜𝐚́ 𝐭𝐡𝐚́𝐧𝐠 𝟒 - 𝐊𝐞𝐦</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://riviu.vn/images/no-image.png" />
                                    <h4>Huy Tat</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>38</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/03/31/a1994d2eed4faa1e62df6339a9e5c139.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>TẮC SỢI SẤY NGON “MẮC NGÂY”</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.vn/50/image/2020/07/22/132935178fd49eadc609962b0e2f90d3_output.jpeg" />
                                    <h4>Đàm Ngọc Nhi</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>40</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/13/9e3358b37d9b1c10bdf046509766a66a.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>GIẢI NHIỆT MÙA HÈ KEM DỪA MÃNG CẦU, KEM</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.vn/50/image/2020/05/18/2244c07874d087218133c3a029b0a76d_output.jpeg" />
                                    <h4>Nga La Cà</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>27</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/03/31/883d6e00bf17b3850cd2329e742f1479.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Bánh Pía thơm ngon</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2020/11/18/3b7d1a0389d6d3502abc88278e7b6306_output.jpeg" />
                                    <h4>Trương Mỹ Linh</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>39</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/19/613c849ab8d2b58ee906e5c96518535f.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Tặng mẹ một chiếc BÁNH KEM LẠNH thơm ngon</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2020/09/09/b38a301560d1d3175920f56880fabd7c_output.jpeg" />
                                    <h4>Vinh Péo</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>45</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/05/20/7fbf5010fb2263aca292e8e42774a508.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>BÁNH MÌ GÁNH THỊT NƯỚNG - Quận 3</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/04/13/cada5e8c596b4e8e1e4cffe75c456e8d_output.jpeg" />
                                    <h4>Nguyễn Lê Như Quỳnh</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>31</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/04/10/994a8f820f5a71656224d400a15a7b3e.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Tiệm bánh siêu ngon giá siêu rẻ lun nha</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/04/21/53a0181b0c07239997ce7621c81be43a.jpeg" />
                                    <h4>Huỳnh Ngọc Nhung</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>41</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2021/05/13/2ec20f06fd96c33d5847793b5eba1048.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4> Một chiếc đà lạt ở xì phố</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/04/10/cb08b00faa0aac2f8efc232d56fa1ebd_output.jpeg" />
                                    <h4>Orange 🍊</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>51</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_Card')}>
                        <div className={cx('item_Card__inner')}>
                            <div className={cx('item_Card__img')}>
                                <a>
                                    <img src="https://static.riviu.co/480/image/2020/04/13/05fa1a74485202221afd45cc913ea279.jpeg" />
                                </a>
                            </div>
                            <div className={cx('item_Card__info')}>
                                <a className={cx('item_Card__info-title')}>
                                    <h4>Bánh Tráng Tỏi Sạch</h4>
                                </a>
                                <a className={cx('item_Card__info-user')}>
                                    <img src="https://static.riviu.co/50/image/2021/09/09/f4af16ea807c9dc9412fd53c5e0aeece_output.jpeg" />
                                    <h4>hoanglam.foodie</h4>
                                </a>
                                <div className={cx('rating')}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={cx('like_icon')}
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    />
                                    <span className={cx('count_Rating')}>28</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RatingList;

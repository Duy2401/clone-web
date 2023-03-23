import classNames from 'classnames/bind';
import styles from './UserHanFood.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);
function UserHanFood() {
    const [showVideo, setShowVideo] = useState(false);
    const handleShow = () => {
        setShowVideo(true);
    };
    const handleHide = () => {
        setShowVideo(false);
    };
    return (
        <div className={cx('list_reviews')}>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://static.riviu.vn/320/image/2020/04/24/3a5a6796b3a516dbc4fbb0dbc569514d.jpeg" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Lam Linh</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/0dcd85fe13e41ca3a5b6847513bcbe65.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>18:06 ngày 24/04/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>3.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>
                            Bánh mì phô mai bơ tỏi đang cực "hot", đây mới là công thức chuẩn vị Hàn Quốc
                        </h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>Bắt tay ngay vào làm món bánh mì bơ tỏi đang siêu hot nhé.</p>
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img
                                    onClick={handleShow}
                                    src="https://static.riviu.co/320/image/2020/04/24/17da599f2a2b2428ad8dec9aa6de515a.gif"
                                />
                            </div>
                        </div>
                    </div>
                    {showVideo && (
                        <div className={cx('item_media__video')}>
                            <div className={cx('item_media__video__inner')}>
                                <video controls autoplay="autoplay" className={cx('thumbnail_video')}>
                                    <source src="https://static.riviu.co/video/2020/04/24/7c285dc2497477a036451ebcb60d31bb.mp4"></source>
                                </video>
                                <FontAwesomeIcon
                                    className={cx('item_media__video__close')}
                                    icon={faXmark}
                                    onClick={handleHide}
                                />
                            </div>
                        </div>
                    )}
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>17</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://riviu.vn/images/no_avatar.webp" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Thao Nguyen 68</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/0bbc8ce67c9fc4f0d1b5fa708c891099.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>23:58 ngày 23/04/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>5.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>
                            HỌC CÁCH LÀM MÌ XÀO BÒ CHUẨN VỊ HÀN QUỐC CHO CẢ GIA ĐÌNH NGON MIỆNG
                        </h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Mì xào bò là món ăn mềm ngon giàu dinh dưỡng tốt cho cơ thể, đặc biệt trong những ngày ngại
                            nấu nướng thì nó là lựa chọn tuyệt vời cho bữa tối 1 món mà vẫn ngon và đủ chất!
                        </p>
                        <p>
                            Mì xào bò là món ăn quen thuộc, dễ làm và được nhiều người yêu thích nhưng để có một món mì
                            xào ngon với sợi mì dai ngon mềm vừa phải, thịt bò vẫn giữ nguyên được vị ngọt mềm không dai
                            thì bạn cần một số bí quyết nhỏ như thời gian luộc mì hay cách xào thịt với mì chẳng hạn.
                            Chính vì thế nên công thức trên đây sẽ giúp bạn có một đĩa mì xào bò tuyệt ngon đấy nhé!
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/23/aef40dc1440077e5ebdc5538d7ca2abf.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/23/3607ebbd4dc57c4711b55ec5b77a9cbc.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/23/fe01a88203f196f2ff56c786242bb91b.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/23/c739212c4520e27de11b752a6163b8da.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>3</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://static.riviu.vn/320/image/2020/05/19/502b36e9827b4dff461e30853fb702ef_output.jpeg" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Monchichiii</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/98ccac75abcf94694b688eaddbbfebbe.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>02:11 ngày 20/04/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>4.7 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Cơm cuộn thịt bò cực ngon cho bữa trưa khỏi cần lo nghĩ</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Kimbap – món cơm cuộn Hàn Quốc ngon nổi tiếng không chỉ dễ làm mà còn hấp dẫn cả người lớn
                            và trẻ nhỏ. Công thức làm cơm cuộn thịt bò đầy màu sắc dưới đây sẽ khiến cả gia đình thích
                            mê.
                        </p>
                        <p>
                            Nguyên liệu: - 7 lá rong biển - 1 tô cơm - 500g thịt bò, xào chín - 15g hạt mè rang - 14 lá
                            tía tô - 7 thanh củ cải muối (có thể thay thế bằng kimchi) - 1 quả dưa chuột xắt sợi - 1 củ
                            cà rốt xắt sợi - 15-30ml dầu mè
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/30cc255d7a18cfac26ee660be480c2d9.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/5e9a5bf950781ab9d71a4cb293ceb537.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/a3dbc6cf6672ab54ed88d90a0c665914.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/989bc59aacd2cac005965fcbcf03e3a1.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>1</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserHanFood;

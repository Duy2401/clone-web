import classNames from 'classnames/bind';
import styles from './EnglishPolicy.module.scss';
const cx = classNames.bind(styles);
function EnglishPolicy() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>Privacy Policy</h1>

            <div className={cx('paragraph')}>
                <p className={cx('heading__paragraph')}>Right to collect and use information</p>
                <p>&nbsp;</p>
                <p>
                    When you access and use, Riviu App may collect and store information such as access statistics,
                    personal information provided to Riviu App when logging in. We may use this information to plan,
                    research, design and recommend services, develop and optimize applications on the website or on the
                    phone; provide information to the authorities in accordance with the law.
                </p>
                <p>&nbsp;</p>
            </div>
            <div className={cx('paragraph')}>
                <p className={cx('heading__paragraph')}>How does Riviu App share information?</p>
                <p>
                    Riviu App only shares user information when authorized to fulfill their requests, except in
                    necessary cases.
                </p>
                <p>&nbsp;</p>
                <p>
                    Riviu App may cooperate with other companies to jointly deliver its products and services. If you
                    are interested in Riviu App's affiliated products or services, we may share other information
                    relevant to those partners' products. Riviu App has no control over how our business partners use
                    the information we collect. The use of this information is regulated in the Privacy Policy of those
                    partners. However, the Riviu App will not share personal information with its commercial partners
                    unless you authorize this sharing.
                </p>
                <p>&nbsp;</p>
            </div>
            <div className={cx('paragraph')}>
                <p className={cx('heading__paragraph')}>Collection and protection of user information</p>
                <p>&nbsp;</p>
                <p>
                    Personal information of customers on Riviu App is absolutely guaranteed by Riviu App according to
                    Riviu App's personal information protection policy. The collection and use of information of each
                    Customer is done only with the consent of that Customer, unless otherwise provided for by law. Riviu
                    App is committed to:
                </p>
                <p>&nbsp;</p>
                <ul>
                    <li>
                        Do not use, transfer, provide or disclose to any third party the Customer's personal information
                        without the consent or consent of the Customer, unless otherwise provided by law.
                    </li>
                    <li>
                        In case the information server is attacked by hackers leading to the loss of Customer's personal
                        data, Riviu App will be responsible for notifying the incident to the investigating authorities
                        for timely handling and notifying the Customer. goods are known.
                    </li>
                    <li>
                        Absolutely secure all information of customers' online transactions including invoice
                        information, digital accounting documents in the secure central data area of Riviu App.
                    </li>
                </ul>
                <p>&nbsp;</p>
                <p>
                    The Riviu App may regularly email users to notify you of new features, receive usage feedback,
                    notify you of necessary changes, or to keep you up to date with new information. Best from Riviu
                    App.
                </p>
                <p>&nbsp;</p>
                <p>
                    The Riviu App mobile application uses “Push notification” to notify users of the development of
                    Riviu App applications. You can opt out of receiving this information by editing it in the mobile
                    app.
                </p>
                <p>&nbsp;</p>
            </div>
            <div className={cx('paragraph')}>
                <p className={cx('heading__paragraph')}>How can users update and change information?</p>
                <p>&nbsp;</p>
                <p>
                    Customers have the right to check, update and adjust their personal information by logging in to
                    their account and editing personal information or requesting Riviu App to do this.
                </p>
                <p>&nbsp;</p>
                <p>
                    The customer's personal information will be stored until the customer has a request to cancel or the
                    customer manually logs in and cancels. In all cases, customer's personal information will be kept
                    confidential on the server of Riviu App.
                </p>
                <p>&nbsp;</p>
            </div>
            <div className={cx('paragraph')}>
                <p className={cx('heading__paragraph')}>Your right to the deletion of Personal Information</p>
                <p>&nbsp;</p>
                <p>Subject to applicable laws and regulations, you have the right to:</p>
                <ul>
                    <li>Withdraw consent to the collection, use or disclosure of personal data</li>
                    <li>Erase personal data (in some cases)</li>
                </ul>
                <p>&nbsp;</p>
                <p>
                    If you wish to make a request to exercise your rights, you may contact us by emailing our Customer
                    Care Department at contact@riviu.vn. We handle these requests in accordance with the Privacy Policy
                    and relevant laws.
                </p>
                <p>
                    However, we will store and use user information as necessary to fulfill our obligations under the
                    law, to resolve disputes, and to secure our agreements. unless otherwise provided by law.
                </p>
                <p>&nbsp;</p>
            </div>
            <div className={cx('paragraph')}>
                <p className={cx('heading__paragraph')}>Riviu App Contact Information</p>
                <p>&nbsp;</p>
                <p>Rivico Co., Ltd</p>
                <p>Head office: 372 Tran Hung Dao, Ward 2, District 5, Ho Chi Minh City</p>
                <p>Hotline: 098 2020 575</p>
                <p>Email: thai@riviu.vn</p>
                <p>&nbsp;</p>
            </div>
            <div className={cx('paragraph')}>
                <p className={cx('heading__paragraph')}>Other regulations</p>
                <p>&nbsp;</p>
                <p>
                    All of the above provisions shall be governed by and construed in accordance with the laws of
                    Vietnam. We reserve the right to amend these regulations at any time and such amendments will take
                    effect immediately at the time they are posted at Riviu.vn
                </p>
            </div>
        </div>
    );
}
export default EnglishPolicy;

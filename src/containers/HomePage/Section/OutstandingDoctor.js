import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutstandingDoctor.scss';
import Slider from 'react-slick'
import OutstandingDoctorImg from '../../../assets/images/bsckii-tran-minh-khuyen.jpg'
class OutstandingDoctor extends Component {

    render() {
        return (
            <div className='section-main section-main-doctor'>
                <div className='section-header'>
                    <div className='section-header-text'>
                        Bác sĩ nổi bật
                    </div>
                    <a className='section-header-button'>Xem thêm</a>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img section-img-doctor" src={OutstandingDoctorImg} />
                                <div className='section-text'>
                                    Bác sĩ Chuyên khoa II Trần Minh Khuyên
                                </div>
                                <div className='section-sub-text'>
                                    Sức khỏe tâm thần, Tư vấn, trị liệu Tâm lý
                                </div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img section-img-doctor" src={OutstandingDoctorImg} />
                                <div className='section-text'>
                                    Bác sĩ Chuyên khoa II Trần Minh Khuyên
                                </div>
                                <div className='section-sub-text'>
                                    Sức khỏe tâm thần, Tư vấn, trị liệu Tâm lý
                                </div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img section-img-doctor" src={OutstandingDoctorImg} />
                                <div className='section-text'>
                                    Bác sĩ Chuyên khoa II Trần Minh Khuyên
                                </div>
                                <div className='section-sub-text'>
                                    Sức khỏe tâm thần, Tư vấn, trị liệu Tâm lý
                                </div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img section-img-doctor" src={OutstandingDoctorImg} />
                                <div className='section-text'>
                                    Bác sĩ Chuyên khoa II Trần Minh Khuyên
                                </div>
                                <div className='section-sub-text'>
                                    Sức khỏe tâm thần, Tư vấn, trị liệu Tâm lý
                                </div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img section-img-doctor" src={OutstandingDoctorImg} />
                                <div className='section-text'>
                                    Bác sĩ Chuyên khoa II Trần Minh Khuyên
                                </div>
                                <div className='section-sub-text'>
                                    Sức khỏe tâm thần, Tư vấn, trị liệu Tâm lý
                                </div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img section-img-doctor" src={OutstandingDoctorImg} />
                                <div className='section-text'>
                                    Bác sĩ Chuyên khoa II Trần Minh Khuyên
                                </div>
                                <div className='section-sub-text'>
                                    Sức khỏe tâm thần, Tư vấn, trị liệu Tâm lý
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);

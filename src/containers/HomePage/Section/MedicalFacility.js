import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import Slider from 'react-slick'
import MedicalFacilityImg from '../../../assets/images/lo-go-viet-duc.jpg'
class MeidicalFacility extends Component {

    render() {
        return (
            <div className='section-main'>
                <div className='section-header'>
                    <div className='section-header-text'>Cơ sở y tế</div>
                    <a className='section-header-button'>Xem thêm</a>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={MedicalFacilityImg} />
                                <div className='section-text'>Bệnh viện Hữu nghị Việt Đức</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={MedicalFacilityImg} />
                                <div className='section-text'>Bệnh viện Hữu nghị Việt Đức</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={MedicalFacilityImg} />
                                <div className='section-text'>Bệnh viện Hữu nghị Việt Đức</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={MedicalFacilityImg} />
                                <div className='section-text'>Bệnh viện Hữu nghị Việt Đức</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={MedicalFacilityImg} />
                                <div className='section-text'>Bệnh viện Hữu nghị Việt Đức</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={MedicalFacilityImg} />
                                <div className='section-text'>Bệnh viện Hữu nghị Việt Đức</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MeidicalFacility);

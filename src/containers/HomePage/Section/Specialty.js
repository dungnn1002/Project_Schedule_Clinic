import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyImg from "../../../assets/images/specialty/co-xuong-khop.jpg"
class Specialty extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <div className='specialty-header-text'>Chuyên khoa</div>
                        <a className='specialty-header-button'>Xem thêm</a>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-content'>
                                <div className='specialty-content-child'>
                                    <img className="specialty-img" src={specialtyImg} />
                                    <div className='specialty-text'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='specialty-content'>
                                <div className='specialty-content-child'>
                                    <img className="specialty-img" src={specialtyImg} />
                                    <div className='specialty-text'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='specialty-content'>
                                <div className='specialty-content-child'>
                                    <img className="specialty-img" src={specialtyImg} />
                                    <div className='specialty-text'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='specialty-content'>
                                <div className='specialty-content-child'>
                                    <img className="specialty-img" src={specialtyImg} />
                                    <div className='specialty-text'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='specialty-content'>
                                <div className='specialty-content-child'>
                                    <img className="specialty-img" src={specialtyImg} />
                                    <div className='specialty-text'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='specialty-content'>
                                <div className='specialty-content-child'>
                                    <img className="specialty-img" src={specialtyImg} />
                                    <div className='specialty-text'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

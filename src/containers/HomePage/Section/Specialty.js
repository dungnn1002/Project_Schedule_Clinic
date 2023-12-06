import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from 'react-slick'
import specialtyImg from "../../../assets/images/specialty/co-xuong-khop.jpg"
class Specialty extends Component {
    render() {
        return (
            <div className='section-main'>
                <div className='section-header'>
                    <div className='section-header-text'>Chuyên khoa</div>
                    <a className='section-header-button'>Xem thêm</a>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={specialtyImg} />
                                <div className='section-text'>Cơ xương khớp 1</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={specialtyImg} />
                                <div className='section-text'>Cơ xương khớp 1</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={specialtyImg} />
                                <div className='section-text'>Cơ xương khớp 1</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={specialtyImg} />
                                <div className='section-text'>Cơ xương khớp 1</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={specialtyImg} />
                                <div className='section-text'>Cơ xương khớp 1</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={specialtyImg} />
                                <div className='section-text'>Cơ xương khớp 1</div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

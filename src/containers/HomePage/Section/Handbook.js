import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Handbook.scss';
import Slider from 'react-slick'
import HandbookImg from '../../../assets/images/nguyen-nhan-gay-vo-sinh1.jpg'
class Handbook extends Component {

    render() {
        return (
            <div className='section-main'>
                <div className='section-header'>
                    <div className='section-header-text'>Cẩm nang</div>
                    <a className='section-header-button'>Xem thêm</a>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={HandbookImg} />
                                <div className='section-text'>Tổng hợp các nguyên nhân gây vô sinh thường gặp ở nữ giới</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={HandbookImg} />
                                <div className='section-text'>Tổng hợp các nguyên nhân gây vô sinh thường gặp ở nữ giới</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={HandbookImg} />
                                <div className='section-text'>Tổng hợp các nguyên nhân gây vô sinh thường gặp ở nữ giới</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={HandbookImg} />
                                <div className='section-text'>Tổng hợp các nguyên nhân gây vô sinh thường gặp ở nữ giới</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={HandbookImg} />
                                <div className='section-text'>Tổng hợp các nguyên nhân gây vô sinh thường gặp ở nữ giới</div>
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-content-child'>
                                <img className="section-img" src={HandbookImg} />
                                <div className='section-text'>Tổng hợp các nguyên nhân gây vô sinh thường gặp ở nữ giới</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);

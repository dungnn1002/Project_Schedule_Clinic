import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render() {
        return (
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className='left-content'>
                        <i class="fas fa-bars"></i>
                        <div className='header-logo'>

                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <div className='header-title'>Chuyên Khoa</div>
                            <div className='subs-title'>Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className='child-content'>
                            <div className='header-title'>Cơ sở y tế</div>
                            <div className='subs-title'>Chọn bệnh viện phòng khám</div>
                        </div>
                        <div className='child-content'>
                            <div className='header-title'>Bác sĩ</div>
                            <div className='subs-title'>Chọn bác sĩ giỏi</div>
                        </div>
                        <div className='child-content'>
                            <div className='header-title'>Tái khám</div>
                            <div className='subs-title'>Khám sức khỏe tổng quát</div>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='support'>
                            <i class="fas fa-question-circle"></i>
                            Hỗ trợ
                        </div>
                        <div className='flag'>
                            Việt Nam
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

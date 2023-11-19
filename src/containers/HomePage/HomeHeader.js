import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { languages } from '../../utils';
import { FormattedMessage } from 'react-intl';
class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>

                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div className='header-title'><FormattedMessage id="home-header.speciality" /></div>
                                <div className='subs-title'><FormattedMessage id="home-header.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='header-title'><FormattedMessage id="home-header.health-facility" /></div>
                                <div className='subs-title'><FormattedMessage id="home-header.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='header-title'><FormattedMessage id="home-header.doctor" /></div>
                                <div className='subs-title'><FormattedMessage id="home-header.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='header-title'><FormattedMessage id="home-header.fee" /></div>
                                <div className='subs-title'><FormattedMessage id="home-header.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <div className='text-support'>
                                    <FormattedMessage id="home-header.support" />
                                </div>
                            </div>
                            <div className='language-vi'>
                                VN
                            </div>
                            <div className='language-en'>
                                EN
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='search'>
                        <i className="fas fa-search"></i>
                        <input className='input-text' type='text' placeholder='Tìm chuyên khoa'>
                        </input>
                    </div>
                    <div className='options'>
                        <div className='option-child'>
                            <div className='icon-child'>
                                <i className="fas fa-hospital"></i>
                            </div>
                            <div className='text-child'>
                                <FormattedMessage id="banner.option-child1" />
                            </div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className='text-child'>
                                <FormattedMessage id="banner.option-child2" />

                            </div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                                <i className="fas fa-procedures"></i>
                            </div>
                            <div className='text-child'>
                                <FormattedMessage id="banner.option-child3" />
                            </div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                                <i className="fas fa-capsules"></i>
                            </div>
                            <div className='text-child'>
                                <FormattedMessage id="banner.option-child4" />
                            </div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                                <i className="fas fa-user-md"></i>

                            </div>
                            <div className='text-child'>
                                <FormattedMessage id="banner.option-child5" />
                            </div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'>
                                <i className="fas fa-stethoscope"></i>
                            </div>
                            <div className='text-child'>
                                <FormattedMessage id="banner.option-child6" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

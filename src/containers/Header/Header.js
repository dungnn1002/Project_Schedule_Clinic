import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';
class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.changLanguageAppRedux(language);
    }
    render() {
        const { processLogout, language, userInfo } = this.props;
        console.log("check userinfo", userInfo);
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='languages'>
                    <span className='welcome'>
                        <FormattedMessage id="home-header.welcome" />
                        {userInfo.lastName ? userInfo.lastName : ''}!
                    </span>
                    <span className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}
                        onClick={() => {
                            this.handleChangeLanguage(LANGUAGES.VI)
                        }}>
                        VN
                    </span>
                    <span className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}
                        onClick={() => {
                            this.handleChangeLanguage(LANGUAGES.EN)
                        }}>
                        EN
                    </span>
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
                {/* nút logout */}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changLanguageAppRedux: (language) => dispatch(actions.changLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
class HomeFooter extends Component {

    render() {
        return (
            <div className='home_footer'>
               <p>&copy; 2023 NguyenNgocDung_20204956 & NguyenQuangDuy_20204961 <a href='https://github.com/dungnn1002/Project_Schedule_Clinic' target='blank'>Link Github</a> </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

import React from 'react'
import { bindActionCreators } from 'redux'
import { loginAction } from "../store/session/auth/actions/index";
import { Text } from 'react-native'

export default class Login extends React.Component {
    render() {
        return (
            <Text>
                Hello World!
            </Text>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         token: state.auth.token,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: bindActionCreators(loginAction, dispatch),
//     }
// }

// const withStore = connect(mapStateToProps, mapDispatchToProps);
import React from 'react'
import { connect } from 'react-redux';
import {fetchTasksAction, addTaskAction, deleteTaskAction, changeTaskDoneStatusAction, openEditTaskModalAction} from "../store/tasks/actions/index";
import { bindActionCreators } from "redux";
import { View, Text } from 'react-native'

class Home extends React.Component {
    // componentDidMount() {
    //     this.checkAuth()
    //     return this.props.fetchTasks()
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps !== this.props) {
    //         this.checkAuth()
    //     }
    // }
    // checkAuth() {
    //     if(!this.props.token) {
    //         return this.props.history.push('/login')
    //     }
    // }
    render() {
        return (
            <View>
                <Text>
                    Home will be here!
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        modalVisible: state.editTask.present.modalVisible,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: bindActionCreators(fetchTasksAction, dispatch),
        addTask: bindActionCreators(addTaskAction, dispatch),
        deleteTask: bindActionCreators(deleteTaskAction, dispatch),
        changeTaskDoneStatus: bindActionCreators(changeTaskDoneStatusAction, dispatch),
        openEditTaskModal: bindActionCreators(openEditTaskModalAction, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
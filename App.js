import React from 'react';
import { Container } from 'native-base'
import { Scene, Router, Stack } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import Screens from "./app/screens";
const ConnectedRouter = connect()(Router);
import { store } from "./app/store";

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Container>
                <ConnectedRouter>
                    <Scene>
                        <Stack
                            key="root"
                            tabs={true}
                        >
                            <Scene key="login" component={Screens.LoginScreen} title="Login"/>
                            <Scene key="register" component={Screens.RegisterScreen} title="Register"/>
                        </Stack>
                        <Stack
                            key="tasks"
                            tabs={true}
                        >
                            <Scene key="tasks" component={Screens.HomeScreen} title="Tasks"/>
                        </Stack>
                    </Scene>
                </ConnectedRouter>
            </Container>
        </Provider>
    )
  }
}

require('react-devtools-core').connectToDevTools({host: '10.102.106.9'})

export default App
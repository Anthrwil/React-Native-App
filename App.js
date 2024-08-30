/* -- Bottom navigation: quick navigation in bottom bar */
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Main from './main'
import Music from './music'
import Album from './album'

const MainRoute = () => <Main />;

const StateRoute = () => <Music />;

const ClientRoute = () => <Album />;

export default class BottomNavigatonComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'main', title: 'Main Menu', icon: 'album'},
      { key: 'state', title: 'To Do List', icon: 'queue-music' },
      { key: 'client', title: 'Pick Me Ups', icon: 'album' },
    ],
  };

  // Vi sao ham 1 tham so => khi goi khong co tham so
  // truyen index vao setState co {} ????
  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    main: MainRoute,
    state: StateRoute,
    client: ClientRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

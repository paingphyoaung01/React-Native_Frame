import React from 'react';
import {View, Text, StyleSheet, Button, Settings} from 'react-native';
import {StandardScreen} from '../../res/standardComponent/component.standard';

class UserScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <StandardScreen>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{fontSize: 18}}>Welcome User Page</Text>
        </View>
      </StandardScreen>
    );
  }
}

export default UserScreen;

const styles = StyleSheet.create({
  container: {},
});
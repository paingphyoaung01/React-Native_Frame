import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StandardScreen} from '../../../res/standardComponent/component.standard';

class NotificationScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <StandardScreen>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{fontSize: 18}}>Welcome Notification Tabs</Text>
        </View>
      </StandardScreen>
    );
  }
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {},
});

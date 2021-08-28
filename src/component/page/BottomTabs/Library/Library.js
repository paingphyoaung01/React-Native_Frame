import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StandardScreen} from '../../../res/standardComponent/component.standard';

class LibraryScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <StandardScreen>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{fontSize: 18}}>Welcome Library Tabs</Text>
        </View>
      </StandardScreen>
    );
  }
}

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {},
});

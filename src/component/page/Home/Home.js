import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StandardScreen} from '../../res/standardComponent/component.standard';

class HomeScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <StandardScreen>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{fontSize: 18}}>Welcome Home</Text>
          <View>
            <Button
              title="Go To Details"
              onPress={() => this.props.navigation.navigate('HomeDetail')}
            />
          </View>
        </View>
      </StandardScreen>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});

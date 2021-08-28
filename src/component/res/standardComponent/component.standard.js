import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { StandardIcon } from './Icon.standard';
import { STANDARD_ICONS } from './Icon.standard';
import {COLORS} from '../Color';


export class StandardScreen extends React.Component {
  render() {
    const propsStyle = this.props.style || {};
    const style = {...styles.screen, ...propsStyle};
    return (
      <SafeAreaView style={style}>
        {this.props.children}
        {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.YELLOW} /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});





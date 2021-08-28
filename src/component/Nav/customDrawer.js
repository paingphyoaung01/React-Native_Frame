import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import {COLORS} from '../res/Color';
import {color} from 'react-native-reanimated';

import {StandardIcon} from '../res/standardComponent/Icon.standard';
import {STANDARD_ICONS} from '../res/standardComponent/Icon.standard';

export function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <StandardIcon
                size={27}
                icon={STANDARD_ICONS.home}
                color={color}
              />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <StandardIcon
                size={24}
                icon={STANDARD_ICONS.setting}
                color={color}
              />
            )}
            label="Setting"
            onPress={() => {
              props.navigation.navigate('Setting');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <StandardIcon
                size={24}
                icon={STANDARD_ICONS.user}
                color={color}
              />
            )}
            label="User"
            onPress={() => {
              props.navigation.navigate('User');
            }}
          />
        </Drawer.Section>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 15,
  },
});

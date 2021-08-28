import React from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import LibraryScreen from './../page/BottomTabs/Library/Library';
import NotificationScreen from './../page/BottomTabs/Notification/Notification';

import {StandardIcon} from '../res/standardComponent/Icon.standard';
import {STANDARD_ICONS} from '../res/standardComponent/Icon.standard';
import {COLORS} from '../res/Color';

const LibraryStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabsScreen(props) {
  return (
    <Tab.Navigator initialRouteName="Library" activeColor="#fff">
      <Tab.Screen
        name="Library"
        component={LibraryStackScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            // <Ionicons name="ios-menu" color={color} size={26} />
            <StandardIcon
              size={26}
              icon={STANDARD_ICONS.library}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            // <Ionicons name="ios-notifications" color={color} size={26} />
            <StandardIcon
              size={26}
              icon={STANDARD_ICONS.notification}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const LibraryStackScreen = ({navigation}) => (
  <LibraryStack.Navigator
    screenOptions={{
      headerStyle: styles.headerStyle,
      headerTintColor: styles.headerTintColor,
      headerTitleStyle: styles.headerTitleStyle,
    }}>
    <LibraryStack.Screen
      name="Library"
      component={LibraryScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <SafeAreaView style={styles.drawerIconStyle}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <StandardIcon
                size={StandardIcon.SIZE.DRAWER_ICON}
                icon={STANDARD_ICONS.drawer_menu}
                color="black"
              />
            </TouchableOpacity>
          </SafeAreaView>
        ),
      }}
    />
  </LibraryStack.Navigator>
);

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: styles.headerStyle,
      headerTintColor: styles.headerTintColor,
      headerTitleStyle: styles.headerTitleStyle,
    }}>
    <NotificationStack.Screen
      name="Home"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <SafeAreaView style={styles.drawerIconStyle}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <StandardIcon
                size={StandardIcon.SIZE.DRAWER_ICON}
                icon={STANDARD_ICONS.drawer_menu}
                color="black"
              />
            </TouchableOpacity>
          </SafeAreaView>
        ),
      }}
    />
  </NotificationStack.Navigator>
);

const styles = StyleSheet.create({
  drawerIconStyle: {
    width: 45,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    marginLeft: 12,
  },
  headerStyle: {
    backgroundColor: StandardIcon.COLOR.HEADER_BAR,
    // elevation: 0,
  },
  headerTintColor: {
    color: StandardIcon.COLOR.BLACK,
  },
  headerTitleStyle: {
    // fontWeight: 'bold',
    marginLeft: 12,
  },
});

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, HomeDetailScreen, UserScreen, SettingScreen } from '../page';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  StandardIcon,
  STANDARD_ICONS,
} from '../res/standardComponent/Icon.standard';
import {COLORS} from '../res/Color';
import {SafeAreaView, StyleSheet} from 'react-native';
import {CustomDrawerContent} from './customDrawer';
import BottomTabsScreen from './bottomTabs';

const Stack = createStackNavigator();

export default class Nav extends React.Component {
  
  HomeStackScreen({navigation}) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor:styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
            // headerRight: () => ()
          }}
        />
      </Stack.Navigator>
    );
  }

  HomeDetailStackScreen({navigation}) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor:styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <Stack.Screen
          name="HomeDetail"
          component={HomeDetailScreen}
          options={{
            headerLeft: () => (
              // <SafeAreaView style={{width:45, height:38,borderRadius:10,alignItems:'center', justifyContent:'center', marginLeft:10, borderWidth:3, borderColor: COLORS.GREY_TRANSPARENT}}>
              <SafeAreaView style={styles.drawerIconStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <StandardIcon
                    size={StandardIcon.SIZE.DRAWER_ICON}
                    icon={STANDARD_ICONS.arrow_back}
                    color="black"
                  />
                </TouchableOpacity>
              </SafeAreaView>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

  SettingStackScreen({navigation}) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerLeft: () => (
              // <SafeAreaView style={{width:45, height:38,borderRadius:10,alignItems:'center', justifyContent:'center', marginLeft:10, borderWidth:3, borderColor: COLORS.GREY_TRANSPARENT}}>
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
      </Stack.Navigator>
    );
  }

  UserStackScreen({navigation}) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
        }}>
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            headerLeft: () => (
              // <SafeAreaView style={{width:45, height:38,borderRadius:10,alignItems:'center', justifyContent:'center', marginLeft:10, borderWidth:3, borderColor: COLORS.GREY_TRANSPARENT}}>
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
      </Stack.Navigator>
    );
  }

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={BottomTabsScreen} />
          <Drawer.Screen name="HomeDetail" component={this.HomeDetailStackScreen}/>
          <Drawer.Screen name="Setting" component={this.SettingStackScreen} />
          <Drawer.Screen name="User" component={this.UserStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

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
  headerTintColor : {
    color : StandardIcon.COLOR.BLACK
  },
  headerTitleStyle: {
    // fontWeight: 'bold',
    marginLeft: 12,
  },
});

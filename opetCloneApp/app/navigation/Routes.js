import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationHelpersContext, NavigationRouteContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import KampanyaScreen from '../screens/kampanya';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import MaC from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const logo = {uri: 'https://www.logowik.com/content/uploads/images/262_opet.jpg'};

const NavigationDrawerStructure = (props)=> {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=> toggleDrawer()}>
          {/*Donute Button Image */}
          <Image
            source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
            style={{
              width: 25,
              height: 25,
              marginRight: 5
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }


const HomeScreenStack = ({navigation}) => {
    return (
    <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
              title: '     Home',
              headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
              >
                  <Image  
              style={{width: 70, height: 24, marginLeft: 10}}
              source={logo}
              />
              </TouchableOpacity>),
              headerRight: () => 
                <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#0271cd', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
               
          }}
          
        />
    </Stack.Navigator>
    )
}
const KampanyaScreenStack = ({navigation}) => {
    return (
    <Stack.Navigator initialRouteName="Kampanya">
        <Stack.Screen
          name="Kampanya"
          component={KampanyaScreen}
          options={{
              title: '    Kampanyalar',
              headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                  >
                      <Image  
              style={{width: 70, height: 24, marginLeft: 10}}
              source={logo}
              />
                  </TouchableOpacity>
              ),
              headerRight: () => 
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#0271cd', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
    </Stack.Navigator>
    )
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator
          drawerStyle={{
              backgroundColor: '#0271cd',
          }}
          drawerContentOptions={{
              activeTintColor: '#ff0',
              inactiveTintColor: '#fff',
              headerStyle:{
                  backgroundColor: '#0271cd',
                  borderBottomColor: '#ff0',
                  borderBottomWith: 1,
              },
              itemStyle: {marginVertical: 5},
              labelStyle: {
                  fontSize: 18,
              },
          }}
        >
            <Drawer.Screen
              name="HomeScreen"
              component={HomeScreenStack}
              options={{
                  drawerLabel: 'Ana Sayfa',
                  drawerIcon: ({focused}) =>(
                      <IconMa name='home' size={24} color= '#fff'/>
                  ),
              }}
            />
            <Drawer.Screen
              name="KampanyaScreen"
              component={KampanyaScreenStack}
              options={{
                  drawerLabel: 'Kampanya',
                  drawerIcon: ({focused}) =>(
                      <IconMa name='campaign' size={24} color= '#fff'/>
                  ),
              }}
            />
            <Drawer.Screen
              name="IletisimScreen"
              component={IletisimScreenStack}
              options={{
                  drawerLabel: 'İletişim',
                  drawerIcon: ({focused}) =>(
                      <IconMa name='campaign' size={24} color= '#fff'/>
                  ),
              }}
            />
        </Drawer.Navigator>
    );
};

const Routes = () => {
    return (
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown: false}}/>
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Routes;
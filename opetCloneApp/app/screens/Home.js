import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import Fade from 'react-native-fade';
import { deviceWidth, deviceHeight } from '../utils/dimensions';
import { FlatListSlider } from 'react-native-flatlist-slider';


const bgImage = { uri: 'https://devirsaati.com/wp-content/uploads/2020/04/OPET-istasyon.jpg' };
const images = [
    {
        image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
        image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
        desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
]




export default HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0271cd' }}>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, backgroundColor: '#e9bc18', height: deviceHeight / 2 }}>
                    <FlatListSlider
                        data={images}
                        height={deviceHeight/2}
                        timer={5000}
                        onPress={item => alert(JSON.stringify(item))}
                        contentContainerStyle={{ paddingHorizontal: 0 }}
                        indicatorContainerStyle={{ position: 'absolute', bottom: 10 }}
                        indicatorActiveColor={'#e9bc18'}
                        indicatorInActiveColor={'#ffffff'}
                        indicatorActiveWidth={30}
                        animation
                    />
                    <Fade style={{ zIndex: 2, position: 'absolute', bottom: 0, left: 0 }}
                        color='#0271cd' height={deviceHeight / 4} width={deviceWidth} />
                </View>
                <View style={{ flex: 1, width: '100%', marginVertical: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 20, width: '100%' }}>
                        <View style={{
                            flex: 1, alignItems: 'center',
                            borderRightColor: 'rgba(255,255,255,0.2)',
                            borderRightWidth: 1,
                            borderBottomColor: 'rgba(255,255,255,0.2)',
                            borderBottomWidth: 1,
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 24, color: '#fff' }}>En Yakın Opet</Text>
                            <Text style={{ fontSize: 48, color: '#fff' }}>2.1 km</Text>
                        </View>
                        <View style={{
                            flex: 1, alignItems: 'center',
                            borderBottomColor: 'rgba(255,255,255,0.2)',
                            borderBottomWidth: 1,
                        }}>
                            <Text style={{ fontSize: 24, color: '#fff' }}>Akıllı Dolum</Text>
                            <IconMa name='local-gas-station' size={48} color="#fff" />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, color: '#fff' }}>Benzin</Text>
                        <Text style={{ fontSize: 48, color: '#fff' }}>7 tl</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, color: '#fff' }}>Ödeme Yap</Text>
                        <IconMa name='payment' size={48} color="#fff" />
                    </View>
                </View>
                <View style={{

                    bottom: 0, height: 60,
                    backgroundColor: '#0271cd',
                    width: '100%',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                    borderTopWidth: 1,
                    justifyContent: 'space-between',
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center'

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Kampanya')}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>KAMPANYALAR</Text>
                    </TouchableOpacity>
                    <IconMa name='arrow-forward-ios' size={20} color="#fff" />

                </View>
            </View>
        </SafeAreaView>
    )
}
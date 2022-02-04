import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import { Button, Overlay, Input, Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#e52d27', '#b31217']}
                style={{ height: '100%', flex: 1, justifyContent: 'center' }}
            >
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontFamily: 'LobsterTwo_400Regular_Italic', fontSize: 60, color: 'white' }}>Banh Mi Mama</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image source={require('../assets/images/conical-hat-logo.png')} />
                </View>
                <View style={{
                    flex: .4,
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 30, fontFamily: 'DMSans_400Regular', color: 'white' }}>Choose your order type</Text>
                </View>
                <View style={{
                    flex: .5,
                    marginBottom: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>

                    <Button
                        title="Pick Up"
                        icon={{
                            name: 'shopping-bag',
                            type: 'entypo',
                            size: 15,
                            color: 'white',
                        }}
                        iconContainerStyle={{ marginRight: 10 }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            backgroundColor: '#323232',
                            borderColor: 'transparent',
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 150,

                        }}
                        onPress={() => navigation.navigate('Menu')}
                    />
                    <Button
                        title="Delivery"
                        icon={{
                            name: 'pedal-bike',
                            type: 'material',
                            size: 15,
                            color: 'white',
                        }}
                        iconContainerStyle={{ marginRight: 10 }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            backgroundColor: '#323232',
                            borderColor: 'transparent',
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 150,

                        }}
                        onPress={toggleOverlay}
                    />
                </View>
            </LinearGradient >
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', }} animationType='slide' >
                <Text>Please Enter Your Address & Info</Text>

                <Input
                    label='First Name'
                    placeholder='Sean'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                />
                <Input
                    label='First Name'
                    placeholder='Nguyen'
                    leftIcon={{ type: 'entypo', name: 'man' }}
                />

                <Input
                    placeholder='212-687-9082'
                    label='Phone Number'
                    leftIcon={{ type: 'antdesign', name: 'phone' }}
                />
                <Input
                    label='Email'
                    placeholder='CaPhe365@gmail.com'
                    leftIcon={{ type: 'feather', name: 'mail' }}
                />

                <Input
                    placeholder='33 North Front St'
                    label='Street address'
                    leftIcon={{ type: 'font-awesome-5', name: 'house-user' }}

                />
                <Input
                    label='Apartment Number'
                    placeholder='6B'
                    leftIcon={{ type: 'material-community', name: 'doorbell' }}


                />
            </Overlay>
        </View >
    );
}

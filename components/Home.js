import React, { useState } from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, Overlay, Input, Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { updateUserProperty } from "../redux/userSlice";

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const user = useSelector(state => state.userReducer.info)
    const { address, aptNum, email, firstName, lastName, orderType, phone } = user;
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
                        onPress={() => {
                            toggleOverlay();
                            dispatch(updateUserProperty({ name: 'orderType', value: 'pick-up' }))
                        }}
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
                        onPress={() => {
                            dispatch(updateUserProperty({ name: 'orderType', value: 'delivery' }));
                            toggleOverlay();
                        }}
                    />
                </View>
            </LinearGradient >
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', }} animationType='slide' >
                <ScrollView>
                    <Text style={{ fontSize: 25, fontFamily: 'DMSans_400Regular', marginBottom: 10, textAlign: 'center' }}>Enter Your Info!</Text>

                    <Input
                        label='First Name'
                        placeholder='Sean'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(value) => dispatch(updateUserProperty({ name: 'firstName', value: value }))}
                        value={firstName}

                    />
                    <Input
                        label='Last Name'
                        placeholder='Nguyen'
                        leftIcon={{ type: 'entypo', name: 'man' }}
                        onChangeText={(value) => dispatch(updateUserProperty({ name: 'lastName', value: value }))}
                        value={lastName}
                    />

                    <Input
                        placeholder='xxx-xxx-xxxx'
                        label='Phone Number'
                        leftIcon={{ type: 'antdesign', name: 'phone' }}
                        onChangeText={(value) => dispatch(updateUserProperty({ name: 'phone', value: value }))}
                        value={phone}
                    />
                    <Input
                        label='Email'
                        placeholder='CaPhe365@gmail.com'
                        leftIcon={{ type: 'feather', name: 'mail' }}
                        onChangeText={(value) => dispatch(updateUserProperty({ name: 'email', value: value }))}
                        value={email}
                    />

                    {orderType === 'delivery' ?
                        <>
                            <Input
                                placeholder='33 North Front St'
                                label='Street address'
                                leftIcon={{ type: 'font-awesome-5', name: 'house-user' }}
                                onChangeText={(value) => dispatch(updateUserProperty({ name: 'address', value: value }))}
                                value={address}

                            />
                            <Input
                                label='Apartment Number'
                                placeholder='6B'
                                leftIcon={{ type: 'material-community', name: 'doorbell' }}
                                onChangeText={(value) => dispatch(updateUserProperty({ name: 'aptNum', value: value }))}
                                value={aptNum}
                            />
                        </>
                        : <View />
                    }
                    <View style={{ alignItems: 'center' }}>
                        <Button
                            title="Start Your Order"
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
                                width: 200,

                            }}
                            onPress={() => {
                                toggleOverlay()
                                navigation.navigate('Menu')
                            }}
                        />
                    </View>
                </ScrollView>
            </Overlay>
        </View >
    );
}

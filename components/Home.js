import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
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
        <View style={styles.container}>
            <LinearGradient
                colors={['#e52d27', '#b31217']}
                style={styles.linearGradient}
            >
                <View style={styles.brandContainer}>
                    <Text style={styles.brandText}>Banh Mi Mama</Text>
                </View>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/images/conical-hat-logo.png')} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Choose your order type</Text>
                </View>
                <View style={styles.buttonGroup}>
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
                        buttonStyle={styles.typeButton}
                        containerStyle={styles.typeContainer}
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
                        buttonStyle={styles.typeButton}
                        containerStyle={styles.typeContainer}
                        onPress={() => {
                            dispatch(updateUserProperty({ name: 'orderType', value: 'delivery' }));
                            toggleOverlay();
                        }}
                    />
                </View>
            </LinearGradient >
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', }} animationType='slide' >
                <ScrollView>
                    <Text style={styles.modalHeader}>Enter Your Info!</Text>
                    <Input
                        label='First Name'
                        placeholder='Sean'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(value) => dispatch(updateUserProperty({ name: 'firstName', value: value }))}
                        value={firstName}
                        labelStyle={styles.label}
                        inputStyle={styles.input}


                    />
                    <Input
                        label='Last Name'
                        placeholder='Nguyen'
                        leftIcon={{ type: 'entypo', name: 'man' }}
                        onChangeText={(value) => dispatch(updateUserProperty({ name: 'lastName', value: value }))}
                        value={lastName}
                        labelStyle={styles.label}
                        inputStyle={styles.input}
                    />

                    <Input
                        placeholder='xxx-xxx-xxxx'
                        label='Phone Number'
                        leftIcon={{ type: 'antdesign', name: 'phone' }}
                        onChangeText={(value) => dispatch(updateUserProperty({ name: 'phone', value: value }))}
                        value={phone}
                        labelStyle={styles.label}
                        inputStyle={styles.input}
                    />
                    <Input
                        label='Email'
                        placeholder='CaPhe365@gmail.com'
                        leftIcon={{ type: 'feather', name: 'mail' }}
                        onChangeText={(value) => dispatch(updateUserProperty({ name: 'email', value: value }))}
                        value={email}
                        labelStyle={styles.label}
                        inputStyle={styles.input}
                    />

                    {orderType === 'delivery' ?
                        <>
                            <Input
                                placeholder='33 North Front St'
                                label='Street address'
                                leftIcon={{ type: 'font-awesome-5', name: 'house-user' }}
                                onChangeText={(value) => dispatch(updateUserProperty({ name: 'address', value: value }))}
                                value={address}
                                labelStyle={styles.label}
                                inputStyle={styles.input}

                            />
                            <Input
                                label='Apartment Number'
                                placeholder='6B'
                                leftIcon={{ type: 'material-community', name: 'doorbell' }}
                                onChangeText={(value) => dispatch(updateUserProperty({ name: 'aptNum', value: value }))}
                                value={aptNum}
                                labelStyle={styles.label}
                                inputStyle={styles.input}
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

const styles = new StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        height: '100%',
        flex: 1,
        justifyContent: 'center'
    },
    brandContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    brandText: {
        fontFamily: 'LobsterTwo_400Regular_Italic',
        fontSize: 60,
        color: 'white'
    },
    logoContainer: {
        flex: 2,
        alignItems: 'center'
    },
    titleContainer: {
        flex: .4,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30,
        fontFamily: 'DMSans_400Regular',
        color: 'white'
    },
    buttonGroup: {
        flex: .5,
        marginBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    typeButton: {
        backgroundColor: '#323232',
        borderRadius: 30,
    },
    typeContainer: { width: 150, },
    modalHeader: {
        fontSize: 25,
        fontFamily: 'DMSans_400Regular',
        marginBottom: 10,
        textAlign: 'center'
    },
    label: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 20,
        color: 'black'
    },
    input: {
        fontFamily: 'DMSans_400Regular',
    }

})
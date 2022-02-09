import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Button, Overlay, Input, Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { addUser, updateUserProperty } from "../redux/userSlice";
import CustomInput from "./CustomInput";

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const orderType = useSelector(state => state.userReducer.info.orderType)
    const {
        control,
        handleSubmit,
        formState: { }
    } = useForm();

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const onSubmit = data => {
        dispatch(addUser(data));
        navigation.navigate('Menu');
    }

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
                        titleStyle={{
                            fontFamily: 'DMSans_400Regular',
                        }}
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
                        titleStyle={{
                            fontFamily: 'DMSans_400Regular',
                        }}
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
                    <CustomInput
                        name="firstName"
                        label='First Name'
                        placeholder="First Name"
                        control={control}
                        rules={{
                            required: "First Name is Required",
                            pattern: { value: /^[A-Za-z -]+$/i, message: 'No numbers or symbols for names.' }
                        }}
                    />
                    <CustomInput
                        name="lastName"
                        label='Last Name'
                        placeholder="Last Name"
                        control={control}
                        rules={{
                            required: "Last Name is Required",
                            pattern: { value: /^[A-Za-z -]+$/i, message: 'No numbers or symbols for names.' }
                        }}
                    />
                    <CustomInput
                        name="phone"
                        placeholder="123-321-1231"
                        control={control}
                        rules={{
                            required: 'A phone number is required',
                            pattern: { value: /^[1\(]?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, message: 'Please enter a valid number.' }
                        }}
                        label='Phone Number'
                    />
                    <CustomInput
                        name="email"
                        placeholder="Email"
                        control={control}
                        rules={{
                            required: "Email is Required",
                            pattern: { value: /(.+)@(.+){2,}\.(.+){2,}/, message: 'Please enter aa valid email.' }
                        }}
                        label='Email'
                    />
                    {orderType === 'delivery' ?
                        <>
                            <CustomInput
                                name="address"
                                label='Address'
                                placeholder="Full Address"
                                control={control}
                                rules={{
                                    required: "Address is Required",
                                    pattern: { value: /^[\w -1]*$/, message: 'Please enter a valid address.' }
                                }}

                            />
                            <CustomInput
                                name="aptNum"
                                label='Apartment Number'
                                placeholder="3B"
                                control={control}
                                rules={{
                                    pattern: { value: /^[\w]*$/, message: 'Please enter a valid apartment number.' }
                                }}
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
                            onPress={handleSubmit(onSubmit)}
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

//     () => {
    //     // toggleOverlay()
    //     // navigation.navigate('Menu')
    // }
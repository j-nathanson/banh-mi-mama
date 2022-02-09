import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Icon, Overlay, Input } from "react-native-elements";
import * as Notifications from 'expo-notifications';
import { useSelector, useDispatch } from "react-redux";
import { useForm, } from "react-hook-form";
import { addUser, updateUserProperty } from "../redux/userSlice";
import CustomInput from "./CustomInput";
import * as SecureStore from 'expo-secure-store';


export default function CheckoutScreen({ navigation }) {

    const dispatch = useDispatch();

    const { control, handleSubmit, formState: { } } = useForm();

    const totalOrderCost = useSelector(state => state.cartReducer.totalOrderCost)
    const user = useSelector(state => state.userReducer.info)
    const { address, aptNum, email, firstName, lastName, orderType, phone } = user;

    const creditIds = useSelector(state => state.userReducer.info.creditIds);
    const [username, setUsername] = useState('');
    const [endDigits, setEndDigits] = useState('');

    const [visible, setVisible] = useState(false);
    const [payVisible, setPayVisible] = useState(true);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const onSubmit = data => {
        toggleOverlay();
        dispatch(addUser(data));
    }

    const presentLocalNotification = async (firstName) => {
        function sendNotification() {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true
                })
            });

            Notifications.scheduleNotificationAsync({
                content: {
                    title: `Thank You for Your Order ${firstName}`,
                    body: `We\'ll start working on your meal!`
                },
                trigger: null
            });
        }

        sendNotification();
        navigation.navigate('Home');
    }

    useEffect(() => {
        SecureStore.getItemAsync('creditCard')
            .then(userdata => {
                const userinfo = JSON.parse(userdata);

                setUsername(userinfo.nameOnCard);
                setEndDigits(userinfo.creditNum.substr(-4));
            });

        if (creditIds.length > 0) {
            setPayVisible(false);
        }

    })

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.infoSection}>
                <Text style={styles.total}>Your total today: ${totalOrderCost}</Text>
                <View style={styles.userInfo}>
                    <View style={styles.contact}>
                        <Text style={styles.contactHeader}>
                            Contact Information
                        </Text>
                        <Text style={styles.contactInfo}>
                            {firstName} {lastName} {phone}
                        </Text>
                    </View>
                    <Icon
                        name='right'
                        type='antdesign'
                        color='#517fa4'
                        onPress={() => toggleOverlay()}
                        containerStyle={styles.editInfo}
                    />
                </View>
            </View>
            <View style={styles.creditContainer}>
                <View>
                    <Text style={styles.creditHeader}>Payment</Text>

                    {creditIds.length > 0 ?
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 10 }}>
                            <Icon
                                name='credit-card-outline'
                                type='material-community'
                                color='#3e5d18'
                                size={30}
                                containerStyle={{ marginRight: 20 }}
                            />
                            <Text style={styles.creditCardInfo}>{username} </Text>
                            <Text style={styles.creditCardInfo}> •••• •••• •••• {endDigits}</Text>
                        </View>
                        : <View />}

                    <View style={styles.buttonSection}>
                        <Icon
                            name='credit-card-plus-outline'
                            type='material-community'
                            color='#517fa4'
                            size={30}
                            raised
                            onPress={() => navigation.navigate('AddCard')}
                        />
                        <Text style={styles.buttonSectionText}>Add a Card</Text>
                    </View>
                </View>

                <Button
                    title='Pay'
                    disabled={payVisible}
                    containerStyle={{ marginTop: 'auto', borderRadius: 30, }}
                    onPress={() => presentLocalNotification(firstName)}
                    titleStyle={{ fontFamily: 'DMSans_400Regular', }}
                >
                </Button>
            </View>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', }} animationType='slide' >
                <ScrollView>
                    <Text style={styles.overlayHeader}>Edit Your Info!</Text>
                    <CustomInput
                        name="firstName"
                        label='First Name'
                        value={firstName}
                        control={control}
                        rules={{
                            required: "First Name is Required",
                            pattern: { value: /^[A-Za-z -]+$/i, message: 'No numbers or symbols for names.' }
                        }}
                    />
                    <CustomInput
                        name="lastName"
                        label='Last Name'
                        value={lastName}
                        control={control}
                        rules={{
                            required: "Last Name is Required",
                            pattern: { value: /^[A-Za-z -]+$/i, message: 'No numbers or symbols for names.' }
                        }}
                    />
                    <CustomInput
                        label='Phone Number'
                        name="phone"
                        value={phone}
                        control={control}
                        rules={{
                            required: 'A phone number is required',
                            pattern: { value: /^[1\(]?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, message: 'Please enter a valid number.' }
                        }}

                    />
                    <CustomInput
                        label='Email'
                        name="email"
                        value={email}
                        control={control}
                        rules={{
                            required: "Email is Required",
                            pattern: { value: /(.+)@(.+){2,}\.(.+){2,}/, message: 'Please enter aa valid email.' }
                        }}
                    />
                    {orderType === 'delivery' ?
                        <>
                            <CustomInput
                                label='Address'
                                name="address"
                                value={address}
                                control={control}
                                rules={{
                                    required: "Address is Required",
                                    pattern: { value: /^[\w -1]*$/, message: 'Please enter a valid address.' }
                                }}

                            />
                            <CustomInput
                                label='Apartment Number'
                                name="aptNum"
                                value={aptNum}
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
                            title="Finish Editing"
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
                                marginTop: 10
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
    infoSection: {
        flex: 2,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: 15,
        margin: 15
    },
    total: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 30
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contactHeader: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 20
    },
    contactInfo: {
        color: '#44484a',
        fontFamily: 'DMSans_400Regular',
        fontSize: 15
    },
    editInfo: {
        alignSelf: 'center',
        padding: 5
    },
    overlayHeader: {
        fontSize: 25,
        fontFamily: 'DMSans_400Regular',
        marginBottom: 10,
        textAlign: 'center'
    },
    creditContainer: {
        flex: 4,
        backgroundColor: 'white',
        padding: 15,
        marginTop: 0,
        marginHorizontal: 15
    },
    creditHeader: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20
    },
    buttonSection: {
        flexDirection: 'row',
        width: '100%'
    },
    buttonSectionText: {
        alignSelf: 'center',
        fontFamily: 'DMSans_400Regular',
        fontSize: 20,
        marginLeft: 10

    },
    creditCardInfo: {
        fontFamily: 'DMSans_400Regular',
        fontSize: 15
    }
})
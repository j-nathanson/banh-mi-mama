import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon, Overlay, Input } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProperty } from "../redux/userSlice";



export default function CheckoutScreen({ navigation }) {
    const dispatch = useDispatch();

    const totalOrderCost = useSelector(state => state.cartReducer.totalOrderCost)
    const user = useSelector(state => state.userReducer.info)
    const { address, aptNum, email, firstName, lastName, orderType, phone } = user;


    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };


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
                    <Text style={styles.creditHeader}>Select a credit card</Text>
                    <View style={styles.buttonSection}>
                        <Icon
                            name='credit-card-outline'
                            type='material-community'
                            color='black'
                            size={30}
                            raised
                            onPress={() => toggleOverlay()}
                        />
                        <Text style={styles.buttonSectionText}>Saved Cards</Text>
                    </View>
                    <View style={styles.buttonSection}>
                        <Icon
                            name='credit-card-plus-outline'
                            type='material-community'
                            color='#517fa4'
                            size={30}
                            raised
                            onPress={() => toggleOverlay()}
                        />
                        <Text style={styles.buttonSectionText}>Add a Card</Text>
                    </View>
                </View>
                <Button
                    title='pay'
                    containerStyle={{ marginTop: 'auto' }}
                >


                </Button>

            </View>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ width: '90%', }} animationType='slide' >
                <Text style={styles.overlayHeader}>
                    Enter Your Info!
                </Text>

                <Input
                    label='First Name'
                    value={firstName}
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(value) => dispatch(updateUserProperty({ name: 'firstName', value: value }))}
                />
                <Input
                    label='Last Name'
                    value={lastName}
                    leftIcon={{ type: 'entypo', name: 'man' }}
                    onChangeText={(value) => dispatch(updateUserProperty({ name: 'lastName', value: value }))}
                />

                <Input
                    label='Phone Number'
                    value={phone}
                    leftIcon={{ type: 'antdesign', name: 'phone' }}
                    onChangeText={(value) => dispatch(updateUserProperty({ name: 'phone', value: value }))}
                />
                <Input
                    label='Email'
                    value={email}
                    leftIcon={{ type: 'feather', name: 'mail' }}
                    onChangeText={(value) => dispatch(updateUserProperty({ name: 'email', value: value }))}
                />

                {orderType === 'delivery' ?
                    <>
                        <Input
                            placeholder='33 North Front St'
                            value={address}
                            leftIcon={{ type: 'font-awesome-5', name: 'house-user' }}
                            onChangeText={(value) => dispatch(updateUserProperty({ name: 'address', value: value }))}

                        />
                        <Input
                            label='Apartment Number'
                            value={aptNum}
                            leftIcon={{ type: 'material-community', name: 'doorbell' }}
                            onChangeText={(value) => dispatch(updateUserProperty({ name: 'aptNum', value: value }))}
                        />
                    </>
                    : <View />
                }
                <View style={{ alignItems: 'center' }}>
                    <Button
                        title="Finish editing"
                        iconContainerStyle={{ marginRight: 10 }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            borderColor: '#3e5d18',
                            borderWidth: 1,
                            backgroundColor: 'white',
                            borderRadius: 30,
                        }}
                        titleStyle={{
                            color: 'black',
                            fontFamily: 'DMSans_400Regular',
                        }}
                        containerStyle={{
                            width: 200,
                        }}
                        onPress={() => {
                            toggleOverlay()
                        }}
                    />
                </View>
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
        color: '#3e5d18',
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

    }
})
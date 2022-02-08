
import { Text, View } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import { addCreditCard } from '../redux/userSlice';

export default function AddCard({ navigation }) {

    const dispatch = useDispatch();
    const [creditNum, setCreditNum] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expDate, setExpDate] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [ccv, setCCV] = useState('');
    const creditIds = useSelector(state => state.userReducer.info.creditIds);
    const id = creditIds.length

    const addCardToSecureStore = () => {
        dispatch(addCreditCard(id));

        SecureStore.setItemAsync(
            'creditCard',
            JSON.stringify({
                creditNum,
                nameOnCard,
                expDate,
                zipCode,
                ccv
            })
        ).catch(error => console.log('Could not save user credit cart', error));

        navigation.navigate('Checkout')
    }


    return (
        <View style={{ flex: 1 }}>
            <Input
                label='Credit Card Number'
                placeholder='Card Number'
                onChangeText={(value) => setCreditNum(value)}
            />
            <Input
                label='Name on Card'
                placeholder='Full Name'
                onChangeText={(value) => setNameOnCard(value)}
            />
            <Input
                label='Expiration Date'
                placeholder='MM/YYYY'
                onChangeText={(value) => setExpDate(value)}
            />
            <Input
                label='Billing Zip Code'
                placeholder='5-digit zip code'
                onChangeText={(value) => setZipCode(value)}
            />
            <Input
                label='CVV'
                placeholder='CVV'
                onChangeText={(value) => setCCV(value)}
            />
            <Button
                title='Cancel'
                buttonStyle={{
                    backgroundColor: '#323232',
                    borderColor: 'transparent',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                }}
                onPress={() => navigation.navigate('Checkout')}
            />
            <Button
                title='Add Card'
                buttonStyle={{
                    backgroundColor: '#323232',
                    borderColor: 'transparent',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                }}
                onPress={() => addCardToSecureStore()}
            />
        </View>
    );

}



import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import { addCreditCard } from '../redux/userSlice';
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";

export default function AddCard({ navigation }) {

    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { } } = useForm();
    const creditIds = useSelector(state => state.userReducer.info.creditIds);
    const id = creditIds.length;

    const addCardToSecureStore = (data) => {
        dispatch(addCreditCard(id));

        SecureStore.setItemAsync(
            'creditCard',
            JSON.stringify(data)
        ).catch(error => console.log('Could not save user credit cart', error));

        navigation.navigate('Checkout')
    }

    return (
        <View style={{ flex: 1, padding: 15 }}>
            <CustomInput
                name="creditNum"
                label='Credit Card Number'
                placeholder='Card Number'
                control={control}
                rules={{
                    required: "This is required",
                    pattern: { value: /^\d{15,16}$/, message: 'Please enter a valid credit card number' }
                }}
            />
            <CustomInput
                name="nameOnCard"
                label='Name on Card'
                placeholder='Full Name'
                control={control}
                rules={{
                    required: "Full Name is Required",
                    pattern: { value: /^[A-Za-z -]+$/i, message: 'No numbers or symbols for names.' }
                }}
            />
            <CustomInput
                name="expDate"
                label='Expiration Date'
                placeholder='MM/YYYY'
                control={control}
                rules={{
                    required: "This is required",
                    pattern: { value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, message: 'Please enter in MM/YYYY format' }
                }}
            />
            <CustomInput
                name="zipCode"
                label='Billing Zip Code'
                placeholder='5 digit zip code'
                control={control}
                rules={{
                    required: "This is required",
                    pattern: { value: /^\d{5}$/, message: 'Please enter a 5 digit zip-code' }
                }}
            />
            <CustomInput
                name="cvv"
                label='CVV'
                placeholder='CVV'
                control={control}
                rules={{
                    required: "First Name is Required",
                    pattern: { value: /^\d{3,4}$/, message: 'Please enter your cvv code' }
                }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Button
                    title='Cancel'
                    buttonStyle={{
                        backgroundColor: 'red',
                        borderColor: 'transparent',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 150,
                    }}
                    titleStyle={{
                        fontFamily: 'DMSans_400Regular',
                    }}
                    onPress={() => navigation.navigate('Checkout')}
                />
                <Button
                    title='Add Card'
                    buttonStyle={{
                        backgroundColor: '#3e5d18',
                        borderColor: 'transparent',
                        borderRadius: 30,

                    }}
                    titleStyle={{
                        fontFamily: 'DMSans_400Regular',
                    }}
                    containerStyle={{
                        width: 150,
                    }}
                    onPress={handleSubmit(addCardToSecureStore)}
                />
            </View>
        </View>
    );
}

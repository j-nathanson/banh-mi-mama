
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import React from 'react';

export default function AddCard() {
    return (
        <View style={{ flex: 1 }}>
            <Input
                label='Credit Card Number'
                placeholder='Card Number'
            />
            <Input
                label='Name on Card'
                placeholder='Full Name'
            />
            <Input
                label='Expiration Date'
                placeholder='MM/YYYY'
            />
            <Input
                label='Billing Zip Code'
                placeholder='5-digit zip code'
            />
            <Input
                label='Billing Zip Code'
                placeholder='5-digit zip code'
            />
            <Button
                title='Continue with Payment'
                buttonStyle={{
                    backgroundColor: '#323232',
                    borderColor: 'transparent',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                }}
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
            />
        </View>
    );

}


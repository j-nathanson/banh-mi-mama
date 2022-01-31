import React from "react";
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#e52d27', '#b31217']}
                style={{ height: '100%', flex: 1, justifyContent: 'center' }}
            >
                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontFamily: 'LobsterTwo_400Regular_Italic', fontSize: 60, color: 'white' }}>Banh Mi Mama</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image source={require('../assets/images/conical-hat-logo.png')} />
                </View>
                <View style={{
                    flex: 1,
                    marginBottom: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

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
                            borderWidth: 0,
                            borderRadius: 30,
                            padding: 15

                        }}
                        containerStyle={{
                            width: 250,

                        }}
                        onPress={() => navigation.navigate('Menu')}
                    />
                </View>
            </LinearGradient >
        </View >
    );
}

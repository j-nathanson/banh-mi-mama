import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller, } from 'react-hook-form';

const CustomInput = ({
    control,
    name,
    label,
    rules = {},
    placeholder,
    secureTextEntry,
    value = ''
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={value}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <Text style={styles.label}>{label}</Text>
                    <View
                        style={[
                            styles.container,
                            { borderColor: error ? 'red' : 'grey' },
                        ]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            style={styles.input}

                        />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 20,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    label: {
        fontFamily: 'DMSans_700Bold',
    },
    input: {
        fontFamily: 'DMSans_400Regular',
    }
});

export default CustomInput;
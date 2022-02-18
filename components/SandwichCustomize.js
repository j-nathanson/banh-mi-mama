import React from 'react';
import { CheckBox } from 'react-native-elements';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../redux/sandwichSlice';

export default function SandwichCustomize() {

    const dispatch = useDispatch();
    const customizations = useSelector(state => state.sandwichReducer.customizations)
    const cilantro = customizations.cilantro;
    const pickledVeg = customizations.pickledVeg;
    const pate = customizations.pate;
    const mayonnaise = customizations.mayonnaise;
    const soySauce = customizations.soySauce;
    const chili = customizations.chili;

    return (
        <View style={{ flexDirection: 'column' }}>
            <CheckBox
                center
                title='Cilantro'
                iconRight
                checkedIcon='check-square-o'
                uncheckedIcon='square-o'
                checkedColor='green'
                checked={cilantro}
                onPress={() => dispatch(updateProperty({ name: 'cilantro', value: !cilantro }))}
                textStyle={{ marginRight: 'auto' }}
            />
            <CheckBox
                center
                title='Pickled Carrots & Daikon'
                iconRight
                checkedIcon='check-square-o'
                uncheckedIcon='square-o'
                checkedColor='green'
                checked={pickledVeg}
                onPress={() => dispatch(updateProperty({ name: 'pickledVeg', value: !pickledVeg }))}
                textStyle={{ marginRight: 'auto' }}
            />
            <CheckBox
                center
                title='Pate'
                iconRight
                checkedIcon='check-square-o'
                uncheckedIcon='square-o'
                checkedColor='green'
                checked={pate}
                onPress={() => dispatch(updateProperty({ name: 'pate', value: !pate }))}
                textStyle={{ marginRight: 'auto' }}
            />
            <CheckBox
                center
                title='Mayonnaise'
                iconRight
                checkedIcon='check-square-o'
                uncheckedIcon='square-o'
                checkedColor='green'
                checked={mayonnaise}
                onPress={() => dispatch(updateProperty({ name: 'mayonnaise', value: !mayonnaise }))}
                textStyle={{ marginRight: 'auto' }}
            />
            <CheckBox
                center
                title='Soy Sauce'
                iconRight
                checkedIcon='check-square-o'
                uncheckedIcon='square-o'
                checkedColor='green'
                checked={soySauce}
                onPress={() => dispatch(updateProperty({ name: 'soySauce', value: !soySauce }))}
                textStyle={{ marginRight: 'auto' }}
            />
            <CheckBox
                center
                title='Chili'
                iconRight
                checkedIcon='check-square-o'
                uncheckedIcon='square-o'
                checkedColor='green'
                checked={chili}
                onPress={() => dispatch(updateProperty({ name: 'chili', value: !chili }))}
                textStyle={{ marginRight: 'auto' }}
            />
        </View>
    )
}
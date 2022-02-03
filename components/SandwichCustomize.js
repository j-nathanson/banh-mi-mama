import React, { useState, } from 'react';
import { CheckBox, Icon } from 'react-native-elements';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../redux/sandwichSlice';

export default function SandwichCustomize() {

    const dispatch = useDispatch();
    const cilantro = useSelector(state => state.sandwichReducer.customizations.cilantro);
    const pickledVeg = useSelector(state => state.sandwichReducer.customizations.pickledVeg);
    const pate = useSelector(state => state.sandwichReducer.customizations.pate);
    const mayonnaise = useSelector(state => state.sandwichReducer.customizations.mayonnaise);
    const soySauce = useSelector(state => state.sandwichReducer.customizations.soySauce);
    const chili = useSelector(state => state.sandwichReducer.customizations.chili);

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
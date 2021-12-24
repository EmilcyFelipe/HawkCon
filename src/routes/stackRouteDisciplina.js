import React from 'react';
import {View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import Disciplinas from '../pages/Disciplinas';

export default function StackRoutesDisciplina(){
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Disciplinas'
                component={Disciplinas}
                options={{
                    headerShown: false
                }}/>
        </Stack.Navigator>
    )
}
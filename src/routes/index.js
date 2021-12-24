import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Home from '../pages/Home';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Cronograma from '../pages/Cronograma';
import StackDisciplinas from '../routes/stackRouteDisciplina';
import { useNavigation } from "@react-navigation/native";


export default function Routes(){
    const Drawer = createDrawerNavigator();
    const [user, setUser ] = useState();

    const navigation = useNavigation();
    
    function DrawerElements(props){
        return(
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label="Help" onPress={() => alert('Link to help')} />
            </DrawerContentScrollView>
        )
    }


    return(
        <Drawer.Navigator drawerContent={(props)=>(<DrawerElements {...props}/>)}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Disciplina" component={StackDisciplinas}/>
            <Drawer.Screen name="Cronograma" component={Cronograma}/>
        </Drawer.Navigator>
    )
}
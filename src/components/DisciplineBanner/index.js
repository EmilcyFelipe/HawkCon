import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


export default function DisciplineBanner(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.actionWrapper}>
                <Text>{props.data.nome}</Text>
                <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    actionWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
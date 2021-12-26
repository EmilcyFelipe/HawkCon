import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { addValidStylePropTypes } from 'react-native/Libraries/StyleSheet/StyleSheetValidation';

export default function ModalToClose(props){
    return(
        <View style={styles.container}>
            <View style={styles.modalWrapper}>
                <Text style={styles.modalMessage}>Are you sure you want to delete?</Text>
                <View style={styles.modalAction}>
                <TouchableOpacity style={styles.button}>
                    <Text>Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor:'#B23333'}]} onPress={()=>{props.showModal(false)}}>
                    <Text>Sair</Text>
                </TouchableOpacity>
                
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    justifyContent: 'center'
 },
 modalWrapper:{
    width:'100%',
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center'
 },
 modalMessage:{
     fontSize: 20,
     color: '#535050',
     
 },
 modalAction:{
     flexDirection: 'row',
     width: '100%',
     justifyContent: 'space-evenly'
 },
 button:{
     backgroundColor:'#3CADFF',
     paddingVertical: 5,
     paddingHorizontal: 10,
     borderRadius: 5
 }
})
import React, {useRef}from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, Modal} from 'react-native';
import { useContext, useState} from 'react';
import { UserContext } from '../../contexts/userDataContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import DisciplineBanner from '../../components/DisciplineBanner';
import ModalToClose from '../../components/ModalToClose';

export default function Disciplinas(){
    const {user} = useContext(UserContext);
    const [disciplinesArray, setDisciplineArray] = useState(user.disciplinas);
    const [modalVisible, setModalVisible] = useState(false)

    let disciplineList = disciplinesArray.map((item,index)=>(<DisciplineBanner showModal={setModalVisible} data={item} id={index} key={index}/>));

    const inputRef = useRef().current;

    function addDiscipline(){
        let discItemManager = {
            nome: 'ola',
            rendimentoGeral: '',
            conteudo:[]
          }
        setDisciplineArray([...disciplinesArray,discItemManager])
    }

    return(
    <>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
         <ModalToClose showModal={setModalVisible}/> 
      </Modal>
        <ScrollView style={styles.container} contentContainerStyle={{alignItems:'flex-end'}}>
            <View style={styles.listWrapper}>
                {disciplineList}
            </View>
            <View style={styles.actionWrapper}>
                <TextInput style={styles.inputDiscipline} />
                <TouchableOpacity style={styles.addButton} onPress={addDiscipline}>
                <MaterialIcons name="add-box" size={40} color="#B23333" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20
        
    },
    listWrapper:{
        width: '100%'
    },
    disciplineBanner:{
        borderBottomWidth: 2
    },
    actionWrapper:{
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    inputDiscipline:{
        flex: 1,
        borderBottomWidth: 2
    },
    addButton:{
       
    }
})
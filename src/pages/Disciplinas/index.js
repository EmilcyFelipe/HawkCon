import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { useContext, useState} from 'react';
import { UserContext } from '../../contexts/userDataContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import DisciplineBanner from '../../components/DisciplineBanner';

export default function Disciplinas(){
    const {user} = useContext(UserContext);
    const [disciplinesArray, setDisciplineArray] = useState(user.disciplinas);

    let disciplineList = disciplinesArray.map((item,index)=>(<DisciplineBanner data={item} key={index}>{item.nome}</DisciplineBanner>));

    function addDiscipline({nome}){
        let discItemManager = {
            nome: nome,
            rendimentoGeral: '',
            conteudo:[]
          }
        setDisciplineArray([...disciplinesArray,discItemManager])
    }
    return(
        <View style={styles.container}>
            <View style={styles.listWrapper}>
                {disciplineList}
            </View>
            <View style={styles.actionWrapper}>
                <TextInput style={styles.inputDiscipline} />
                <TouchableOpacity style={styles.addButton} onPress={addDiscipline}>
                <MaterialIcons name="add-box" size={40} color="#B23333" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'flex-end',
        padding: 20
        
    },
    listWrapper:{
        width: '100%'
    },
    disciplineBanner:{
        borderBottomWidth: 2
    },
    inputDiscipline:{
        backgroundColor: '#0404'
    },
    addButton:{
       
    }
})
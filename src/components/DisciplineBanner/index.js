import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function DisciplineBanner(props) {



    function deleteDiscipline(){
        alert('A you sure, you want to delete?');
        
    }
  return (
    <View style={styles.container}>
      <View style={styles.disciplineItem}>
        <View style={styles.actionWrapper}>
          <TouchableOpacity style={styles.pieceWrapper}>
            <View style={styles.pieceWrapped}>
              <Text>{props.id}</Text>
              <AntDesign name="arrowright" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={deleteDiscipline} onPress={()=>{props.showModal(true)}}>
          <FontAwesome name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  disciplineItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  actionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  pieceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  pieceWrapped: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },
});

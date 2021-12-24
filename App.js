
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";
import Disciplina from "./src/pages/Disciplinas";
import Cronograma from "./src/pages/Cronograma";
import Routes from "./src/routes";
import { useState } from "react";
import React from "react";
import UserDataProvider from "./src/contexts/userDataContext";

export default function App() {

  return (
    <UserDataProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </UserDataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

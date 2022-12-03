import React from 'react'
import { View, Text, Image, ScrollView } from "react-native";

export default function Start(){

  return(
    <>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image source={require("../../Assets/icons/logo3.png")}/>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
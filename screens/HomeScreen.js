import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const {container, contentContainer, titleContainer, titleFirst, titleSecondary} = styles;
  
  return (
    <View style={container}>
      <ScrollView
        style={container}
        contentContainerStyle={contentContainer}>

        <View style={titleContainer}>
          <Text style={titleFirst}>Did I</Text>
          <Text style={titleSecondary}>Forget</Text>
          <Text style={titleSecondary}>?</Text>
        </View>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fb59',
  },
  contentContainer: {
    paddingTop: 30,
  },
  titleContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 250,
  },
  titleFirst: {
    fontSize: 60,
    fontFamily: 'mosk-ultra-bold'
  },
  titleSecondary: {
    fontSize: 40,
    fontFamily: 'mosk-light-300'
  }
});

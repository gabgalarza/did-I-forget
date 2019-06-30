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

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.titleContainer}>
          <Text style={styles.titleFirst}>Did I</Text>
          <Text style={styles.titleSecondary}>Forget...?</Text>
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
    marginVertical: 250
  },
  titleFirst: {
    fontSize: 60,
    //fontFamily: primary
  },
  titleSecondary: {
    fontSize: 40,
    //fontFamily: secondary
  }
});

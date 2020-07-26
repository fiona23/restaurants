import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {WebView} from 'react-native-webview';

interface Props {
  displayWebView: string;
  setDisplayWebView: (url: string) => void;
}
export const RestaurantWebView = ({
  displayWebView,
  setDisplayWebView,
}: Props) => {
  return (
    <>
      <View style={styles.backButton}>
        <Button
          title="Back"
          onPress={() => setDisplayWebView('')}
          accessibilityLabel="Press to go back"
        />
      </View>
      <WebView source={{uri: displayWebView}} />
    </>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginTop: 40,
    marginLeft: 10,
    flexDirection: 'row',
  },
});

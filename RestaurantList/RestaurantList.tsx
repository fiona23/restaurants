import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Text} from 'react-native-elements';
import {Restaurant} from '../types';

interface Props {
  restaurants: Restaurant[];
  setDisplayWebView: (url: string) => void;
}
export const RestaurantList = ({restaurants, setDisplayWebView}: Props) => {
  return (
    <View>
      <View style={styles.textOutter}>
        <Text h4>RESTAURANTS</Text>
      </View>
      <FlatList
        keyExtractor={(restaurant) => restaurant.name}
        data={restaurants}
        renderItem={({item}) => (
          <ListItem
            title={`Restaurant: ${item.name}`}
            subtitle={`Address: ${item.geo.address.addressLocality}`}
            bottomDivider
            onPress={() => setDisplayWebView(item.url)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textOutter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

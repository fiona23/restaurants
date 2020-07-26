import React, {useState, useCallback} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Modal} from 'react-native';
import {Card, Button, Text} from 'react-native-elements';
import {Restaurant} from './types';
import {RestaurantWebView} from './RestaurantWebView';
import {RestaurantList} from './RestaurantList';
import {URL} from './constants';

const App = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [displayWebView, setDisplayWebView] = useState('');
  const [isSending, setIsSending] = useState(false);
  const onclick = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return;
    // update state
    setIsSending(true);
    try {
      let response = await fetch(URL);
      let json = await response.json();
      setIsSending(false);
      setRestaurants(json.data.restaurant.items);
    } catch (error) {
      console.error(error);
    }
  }, [isSending]); // update the callback if the state changes

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          {restaurants.length === 0 ? (
            <Card
              containerStyle={styles.container}
              title="WELCOME!"
              image={require('./assets/background.png')}>
              <Text style={styles.restaurantText}>
                A restaurant is generally an establishment where the public may
                obtain meals or refreshments. The term Restaurant has its
                origins in Paris, where one A. Boulanger started as a soup
                vendor in 1765. A sign on the door said “restaurant”, referring
                to the restorative quality of the soups and broths served
                within.
              </Text>
              <Button
                buttonStyle={styles.viewRestaurantsButton}
                onPress={onclick}
                accessibilityLabel="Tap to view a list of restaurants"
                title="View Restaurants"
              />
            </Card>
          ) : (
            <RestaurantList
              restaurants={restaurants}
              setDisplayWebView={setDisplayWebView}
            />
          )}
        </View>
        <Modal visible={displayWebView.length !== 0}>
          <RestaurantWebView
            displayWebView={displayWebView}
            setDisplayWebView={setDisplayWebView}
          />
        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  viewRestaurantsButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: '50%',
  },
  restaurantText: {
    marginBottom: 30,
    marginTop: 50,
    fontSize: 18,
  },
  container: {height: '95%', justifyContent: 'space-between'},
  sectionContainer: {
    marginTop: 32,
  },
});

export default App;

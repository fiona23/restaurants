# Restaurants React Native App

## :computer: Intro

- Display a list of restaurants with given url
- View single restaurant in WebView
- Set up app with TypeScript and Jest

## :star: Demo

![Demo](demo/demo.gif)

## :arrow_forward: How to start app

```sh
git clone https://github.com/fiona23/restaurants.git
cd restaurants
yarn
cd ios && pod install
cd ..
yarn start
yarn run ios
```

### Run unit tests

```sh
yarn test
```

## :bookmark: Improvement

- Add loading behaviour while fetching data, and while opening WebView
- Currently only has simple snapshot tests, need to add `react-native-testing-library` and more tests
- Add state management
- Add navigation
- Test on Android

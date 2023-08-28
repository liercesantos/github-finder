import React from 'react';
import {useRoute} from '@react-navigation/native';
import WebView from 'react-native-webview';
const Details = () => {
  const {params} = useRoute();
  // @ts-ignore
  const {repository} = params || false;

  return <WebView source={{uri: repository.html_url}} style={{flex:1}} />;
};

export default Details;

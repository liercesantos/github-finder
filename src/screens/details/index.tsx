import React from 'react';
import {useRoute} from '@react-navigation/native';
import WebView from 'react-native-webview';
import {CenteredLoading} from '../../components/loadings/loadings.styles';
const Details = () => {
  const {params} = useRoute();
  // @ts-ignore
  const {repository} = params || false;

  return (
    <WebView
      source={{uri: repository.html_url}}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      startInLoadingState={true}
      renderLoading={() => <CenteredLoading size={'large'} color={'#000'} />}
    />
  );
};

export default Details;

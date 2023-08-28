import React from 'react';
import {ContentView} from './styles/index.styles';
import SearchField from '../../components/forms/SearchField';
import GitList from '../../components/lists/GitList';
import useGithub from '../../hooks/use.github';
import {Loading} from '../../components/loadings/loadings.styles';
const Home = () => {
  const {onSearch, loading, moreLoading} = useGithub();

  return (
    <ContentView>
      <SearchField onSearch={onSearch} />
      <GitList />
      {(loading || moreLoading) && <Loading color={'#000'} size={'large'} />}
    </ContentView>
  );
};

export default Home;

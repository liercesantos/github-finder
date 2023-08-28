import React from 'react';
import {ContentView} from './styles/index.styles';
import SearchField from '../../components/forms/SearchField';
import GitList from '../../components/lists/GitList';
import useGithub from '../../hooks/use.github';
const Home = () => {
  const {onSearch} = useGithub();

  return (
    <ContentView>
      <SearchField onSearch={onSearch} />
      <GitList />
    </ContentView>
  );
};

export default Home;

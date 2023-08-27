import React, {useState} from 'react';
import {ContentView} from './styles/index.styles';
import SearchField from '../../components/forms/SearchField';
import useGithub from '../../hooks/use.github';
import GitList from '../../components/lists/GitList';
const Home = () => {
  const {repositories} = useGithub();
  const [searchText, setSearchText] = useState<string | undefined>(undefined);

  return (
    <ContentView>
      <SearchField onChangeText={setSearchText} value={searchText} />

      <GitList repositories={repositories} />
    </ContentView>
  );
};

export default Home;

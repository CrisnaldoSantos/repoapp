import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroungColor="#7159c1" translucent barStyle="light-content" />
    <Routes />
  </>
);

export default App;

import React from 'react';
import PageDefault from './pageDefault';
import Loading from '../components/Loading';

function Home() {
  return (
    <div className="App">
        <PageDefault>
            <Loading />
        </PageDefault>
    </div>
  );
}

export default Home;

import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import List from './components/List';

function Home() {
  return (
    <div>
      <Header />
      <Hero completed={0} total={0} />
      <Form />
      <List todos={[]}/>
    </div>
  );
}
export default Home;

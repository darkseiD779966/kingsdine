import React from 'react';
import { Aboutus, Chef, Findus, Footer, Gallery, Header, Intro, Menu} from './container';
import {Navbar,Subheading} from './components';

const App = () => {
  return (
    <div>
      <Navbar />
        <Header />
        <Aboutus/>
        <Menu />
        <Chef />
        <Intro />
         <Findus />
        <Gallery />
        <Footer />

    </div>
  )
}

export default App
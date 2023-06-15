import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
function App(props) {
    return (
        <div class="App">
           <Header /> 
           <Note />
           <Footer />
        </div>
    );
}

export default App;
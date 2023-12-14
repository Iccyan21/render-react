
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './post';
import PostDetail from './postdetail';
import PostDetailComponent from './postphoto';

function App() {
  return (
    <div className="App">
       <BrowserRouter basename='/'>
            <Routes>
              <Route path="/posts" element={<Posts />}/>
              <Route path="/posts/:title" element={<PostDetail/>}/>
              <Route path="/photo/:title" element={<PostDetailComponent/>}/>
            </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

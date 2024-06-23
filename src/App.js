import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Home from './pages/Layout/Layout.jsx';
import BlogHome from './pages/blogsHome/blogHome.jsx';
import Layout from './pages/Layout/Layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/blogs" element={<BlogHome />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

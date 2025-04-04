import { useState } from 'react'
import { Routes, Route } from 'react-router';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ArticleList from './components/ArticleList'
import Article from './components/Article';
function App() {
  const [reload, setReload] = useState(0);
  return (
    <>
      <Header setReload={setReload} />
      <Footer />
      <Routes>
        <Route exact path="/" element={<ArticleList reload={reload} />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
      </Routes>
    </>
  )
}

export default App

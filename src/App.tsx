import React from 'react';
import styles from './App.module.css'; // CSS Module 导入
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    // 使用 Grid 布局构建页面骨架
    <div className={styles.pageLayout}>
    <Header/>
    <Nav />
    <MainContent />
    <Sidebar/>
    {<Footer /> }
    </div>
  );
};

export default App;
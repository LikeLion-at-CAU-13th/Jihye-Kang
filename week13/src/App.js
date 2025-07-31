
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import { ModalProvider } from './context/modalcontext';

function App() {
  return (
    <>
    <ModalProvider>
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/mypage' element={<MyPage/>} />
    </Routes>
    </Layout>
    </ModalProvider>
    </>
  );
}

export default App;

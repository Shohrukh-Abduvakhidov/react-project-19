import { BrowserRouter, Route, Routes } from 'react-router';  // Импортируем из 'react-router-dom'
import Layout from '../layout/layout';
import HomePage from '../pages/home/home';
import ReelPage from '../pages/reels/reels';
import MessagesPage from '../pages/messages/messages';
import ProfilePage from '../pages/profile/profile';
import Explore from '../pages/explore/explore';
import RegistrationPage from '../pages/registration/registration';
import LoginPage from '../pages/login/login';
import MessageById from '../pages/messageById/messageById'

const InstaRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/layout' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='reels' element={<ReelPage />} />
          <Route path='direct' element={<MessagesPage />} />
          <Route path='direct/:id' element={<MessageById />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='explore' element={<Explore />} />
        </Route>
        <Route path='/' element={<RegistrationPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<div className='text-[50px] text-center font-stretch-200%'>NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default InstaRouter;

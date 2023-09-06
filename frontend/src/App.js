import { Navbar } from '../src/Components'
import { LandingPage, NewsFeedPage, FeaturedPage, AboutPage, ContactPage, ServicePage, TestimonyPage } from '../src/pages/Site'
import { LoginPage, UserRegistration, ForgotPassword } from '../src/pages/Auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App w-auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/featured' element={<FeaturedPage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/newsfeed' element={<NewsFeedPage />} />
          <Route path='/testimony' element={<TestimonyPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/auth/user-login' element={<LoginPage />} />
          <Route path='/auth/register' element={<UserRegistration />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

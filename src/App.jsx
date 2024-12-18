
import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import CareerPath from './Component/CareerPath';
import Mentorship from './Component/Mentorship';
import Career from './Component/Career';
import Companies from './Component/Companies';
import AlumniSay from './Component/AlumniSay';
import Questions from './Component/Questions';
import Mentors from './Component/Mentors';
import './App.css';
import Blogs from './Component/Blogs';
import ScrollToTop from './ScrollToTop';
import Courses from './Component/Courses';
import Refund from './Component/Refund';
import PrivacyPolicy from './Component/PrivacyPolicy';
import TermsCondition from './Component/TermsCondition';
import SoftwareProgrammer from './Component/SoftwareProgrammer';
import DigitalMarketer from './Component/DigitalMarketer';
import FullStackDev from './Component/Courses/FullStackDev/FullStackDev';
import DigitalMarketerMain from './Component/Courses/DigitalMarketer/DigitalMarketerMain';
import ModalPopup from './Component/Modals/ModalPopup';
import { BackToTop } from './Component/BackToTop';
import Placements from './Component/Placements/Placements';
import Features from './Component/Features/Features';
import FooterNav from './Component/FooterNav/FooterNav';
import FullStackBlog from './Component/BlogDetails/FullStackBlog';
import DigitalMarketingBlog from './Component/BlogDetails/DigitalMarketingBlog';
import DigitalDemystifiedBlog from './Component/BlogDetails/DigitalDemystifiedBlog';
import ProgrammingBlog from './Component/BlogDetails/ProgrammingBlog';
import PsychologyBlog from './Component/BlogDetails/PsychologyBlog';
import DigitalMarketingTrendsBlog from './Component/BlogDetails/DigitalMarketingTrendsBlog';
import LanguageBlog from './Component/BlogDetails/LanguageBlog';
import RoleDigitalMarketing from './Component/BlogDetails/RoleDigitalMarketing';
import LayersFullStack from './Component/BlogDetails/LayersFullStack';
import MasteringFullStackBlog from './Component/BlogDetails/MasteringFullStackBlog';


const Layout = () => {
  return (
    <>
      <Header />
      <BackToTop/>
      <ScrollToTop/>
      <Outlet/>
      {/* <ModalPopup/> */}
      <Footer />
      <FooterNav/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <Banner /> }, 
      { path: '/career-path', element: <CareerPath /> },
      { path: '/career', element: <Career /> },
      { path: '/mentorship', element: <Mentorship /> },
      { path: '/companies', element: <Companies /> },
      { path: '/alumni-say', element: <AlumniSay /> },
      { path: '/questions', element: <Questions /> },
      { path: '/blogs', element: <Blogs/> },
      { path: '/courses', element: <Courses/>},
      { path: '/refund', element: <Refund/>},
      { path: '/mentors', element: <Mentors/>},
      { path: '/privacypolicy', element: <PrivacyPolicy/>},
      { path: '/termscondition', element: <TermsCondition/>},
      { path: '/softwareprogrammer', element: <SoftwareProgrammer/>},
      { path: '/digitalmarketer', element: <DigitalMarketer/>},
      { path: '/fullstackdevelopment', element: <FullStackDev/>},
      { path: '/digitalmarketingdevelopment', element: <DigitalMarketerMain/>},
      { path: '/digitalmarketingdevelopment', element: <DigitalMarketerMain/>},
      { path: '/placements', element: <Placements/>},
      { path: '/features', element: <Features/>},
      { path: '/full-stack-development-blog', element: <FullStackBlog/>},
      { path: '/digital-marketing-blog', element: <DigitalMarketingBlog/>},
      { path: '/digital-marketing-Demystified-blog', element: <DigitalDemystifiedBlog/>},
      { path: '/programming-blog', element: <ProgrammingBlog/>},
      { path: '/psychology-blog', element: <PsychologyBlog/>},
      { path: '/digital-marketing-trends-blog', element: <DigitalMarketingTrendsBlog/>},
      { path: '/Language-blog', element: <LanguageBlog/>},
      { path: '/Role-of-digital-marketing-blog', element: <RoleDigitalMarketing/>},
      { path: '/layers-full-stack-blog', element: <LayersFullStack/>},
      { path: '/mastering-full-stack-blog', element: <MasteringFullStackBlog/>},
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />  
  );
}

export default App;

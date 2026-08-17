import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));
const Features = lazy(() => import('../pages/Features'));
const Pricing = lazy(() => import('../pages/Pricing'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const Cookies = lazy(() => import('../pages/Cookies'));
const FlyBy = lazy(() => import('../pages/FlyBy'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Placeholder pages
const PlaceholderModule = () => import('../pages/Placeholder');
const Blog = lazy(() => PlaceholderModule().then(m => ({ default: m.Blog })));
const Docs = lazy(() => PlaceholderModule().then(m => ({ default: m.Docs })));
const Releases = lazy(() => PlaceholderModule().then(m => ({ default: m.Releases })));
const Help = lazy(() => PlaceholderModule().then(m => ({ default: m.Help })));
const Careers = lazy(() => PlaceholderModule().then(m => ({ default: m.Careers })));
const Partners = lazy(() => PlaceholderModule().then(m => ({ default: m.Partners })));
const API = lazy(() => PlaceholderModule().then(m => ({ default: m.API })));
const CustomerStories = lazy(() => PlaceholderModule().then(m => ({ default: m.CustomerStories })));

// External redirect component
const ExternalRedirect = ({ to }) => {
  window.location.href = to;
  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'features', element: <Features /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'cookies', element: <Cookies /> },
      { path: 'blog', element: <Blog /> },
      { path: 'docs', element: <Docs /> },
      { path: 'releases', element: <Releases /> },
      { path: 'help', element: <Help /> },
      { path: 'careers', element: <Careers /> },
      { path: 'partners', element: <Partners /> },
      { path: 'api', element: <API /> },
      { path: 'stories', element: <CustomerStories /> },
      { path: 'flyby', element: <FlyBy /> },
      { path: 'login', element: <ExternalRedirect to="https://app.feldrix.com/login" /> },
      { path: 'register', element: <ExternalRedirect to="https://app.feldrix.com/register" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;

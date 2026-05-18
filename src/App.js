import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Rights = lazy(() => import('./pages/Rights'));
const DomesticLaws = lazy(() => import('./pages/rights/DomesticLaws'));
const PropertyRights = lazy(() => import('./pages/rights/PropertyRights'));
const WorkplaceSafety = lazy(() => import('./pages/rights/WorkplaceSafety'));
const CyberSafety = lazy(() => import('./pages/rights/CyberSafety'));
const Helpline = lazy(() => import('./pages/rights/Helpline'));
const Impact = lazy(() => import('./pages/Impact'));
const Events = lazy(() => import('./pages/Events'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const SupportUs = lazy(() => import('./pages/SupportUs'));
const GetHelp = lazy(() => import('./pages/GetHelp'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex justify-center items-center text-purple-900 font-bold text-lg">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/rights/domestic-laws" element={<DomesticLaws />} />
          <Route path="/rights/property-rights" element={<PropertyRights />} />
          <Route path="/rights/workplace-safety" element={<WorkplaceSafety />} />
          <Route path="/rights/cyber-safety" element={<CyberSafety />} />
          <Route path="/rights/helpline" element={<Helpline />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

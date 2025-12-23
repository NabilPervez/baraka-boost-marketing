import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Premium from './pages/Premium';
import Donation from './pages/Donation';
import ScrollToTop from './components/ScrollToTop';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import SignUp from './pages/SignUp';
import NPC from './pages/NPC';
import RemoveMyData from './pages/RemoveMyData';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/npc" element={<NPC />} />
          <Route path="/remove-my-data" element={<RemoveMyData />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

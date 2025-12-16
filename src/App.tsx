import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Premium from './pages/Premium';
import Donation from './pages/Donation';
import ScrollToTop from './components/ScrollToTop'; // We'll need to create this

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

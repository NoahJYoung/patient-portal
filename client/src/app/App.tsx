import React, {
  Suspense,
  useState,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import { Header, Footer } from './components';
import { PatientsPage } from './pages';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Suspense fallback="loading">
        <div className="App">
          <Header />
        </div>
      </Suspense>

      <Spin
        spinning={loading}
        tip="Loading..."
      >
        <Routes>
          <Route path="/" element={<div>Welcome to the home page</div>} />
          <Route path="/patients" element={<PatientsPage />} />
        </Routes>
      </Spin>

      <Suspense fallback="loading">
        <div className="App">
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;

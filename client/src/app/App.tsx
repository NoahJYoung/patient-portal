import React, {
  Suspense,
  useState,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import { Header } from './components';

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
          <Route path="/patients" element={<div>Welcome to the patients page</div>} />
        </Routes>
      </Spin>
    </>
  );
}

export default App;

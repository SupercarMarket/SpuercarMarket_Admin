import React from 'react';
// react-router-dom
import { BrowserRouter } from "react-router-dom";

import AdminPages from './pages/AdminPages';

function App() {
  return (
    <>
      <BrowserRouter>
        <AdminPages />
      </BrowserRouter>
    </>
  );
}

export default App;

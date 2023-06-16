import 'antd/dist/antd.variable.min.css';
import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextRoute from './Routes/ContextRoute';
import AdminRoute from './Routes/AdminRoute';
import AuthRoute from './Routes/AuthRoute';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<ContextRoute />} />
                    <Route path="/auth/*" element={<AuthRoute />} />
                    <Route path="/admin/*" element={<AdminRoute />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

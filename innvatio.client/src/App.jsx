/// <reference path="assets/lib/bootstrap-5.0.2-dist/js/bootstrap.min.js" />
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Dashboard/Dashboard';
import './App.css';
import './assets/lib/bootstrap-5.0.2-dist/css/bootstrap.min.css';
import './assets/lib/bootstrap-5.0.2-dist/css/bootstrap-grid.css';
import './assets/lib/bootstrap-5.0.2-dist/js/bootstrap.min.js';



function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
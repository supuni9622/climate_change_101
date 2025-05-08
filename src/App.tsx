import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ModulePage from './pages/ModulePage';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminPage from './pages/AdminPage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route 
              path="/quiz/:moduleId" 
              element={
                <PrivateRoute>
                  <QuizPage />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/progress" 
              element={
                <PrivateRoute>
                  <ProgressPage />
                </PrivateRoute>
              } 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route 
              path="/admin" 
              element={
                <PrivateRoute adminOnly>
                  <AdminPage />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
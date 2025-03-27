import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SQLInjectionDetector from './SQLInjectionDetector';

// Model Selection Page Component
const ModelSelectionPage = () => {
  const navigate = useNavigate();

  const handleModelSelect = (modelType) => {
    // Navigate to the SQL Injection Detector and pass the model type
    navigate('/detector', { state: { modelType } });
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        width: '600px', 
        border: '1px solid #d9d9d9',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ margin: 0, color: '#1a5f7a', fontSize: '16px' }}>
            DEPARTMENT OF INFORMATION TECHNOLOGY
          </h3>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#333' }}>
            NATIONAL INSTITUTE OF TECHNOLOGY KARNATAKA, SURATHKAL-575025
          </p>
          <p style={{ margin: '10px 0', fontSize: '13px', color: '#666' }}>
            Information Assurance and Security (IT352) Course Project
          </p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#333', fontSize: '15px' }}>
            Title: SQL Injection Detection
          </p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Carried out by</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>
            Uggumudi Sai Lasya Reddy (221IT074)
          </p>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
            Tanvi Poddar (221IT071)
          </p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
            During Academic Session January - April 2025
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px', 
          padding: '0 50px' 
        }}>
          <button 
            onClick={() => handleModelSelect('1d')}
            style={{
              padding: '10px',
              backgroundColor: '#6ca6cd',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            1D CNN
          </button>

          <button 
            onClick={() => handleModelSelect('2d')}
            style={{
              padding: '10px',
              backgroundColor: '#6ca6cd',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            2D CNN
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModelSelectionPage />} />
        <Route path="/detector" element={<SQLInjectionDetector />} />
      </Routes>
    </Router>
  );
}

export default App;

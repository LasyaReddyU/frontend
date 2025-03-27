// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const SQLInjectionDetector = () => {
//   const location = useLocation();
//   const { modelType } = location.state || { modelType: '1d' }; // Default to 1d if no state

//   const [input, setInput] = useState('');
//   const [output, setOutput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleDisplayOutput = async () => {
//     if (!input) {
//       alert('Please enter input first');
//       return;
//     }

//     setLoading(true);
//     try {
//       // Create a text file from input
//       const blob = new Blob([input], { type: 'text/plain' });
//       const file = new File([blob], 'input.txt', { type: 'text/plain' });
      
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('model_type', modelType); // Send model type to backend
      
//       const response = await axios.post('http://localhost:5000/predict', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       const predictionText = response.data.prediction === 1 
//         ? "Potential SQL Injection Detected!" 
//         : "No SQL Injection Detected";
      
//       setOutput(predictionText);
//       setLoading(false);
//     } catch (error) {
//       setOutput('Error in analysis');
//       setLoading(false);
//       console.error('Prediction error:', error);
//     }
//   };

//   // Rest of the code remains the same as the original SQLInjectionDetector...
//   // (Include the entire original implementation)
//   // Only modification is adding the modelType display and sending it to backend
  
//   return (
//     <div style={{ 
//       display: 'flex', 
//       justifyContent: 'center', 
//       alignItems: 'center', 
//       height: '100vh',
//       backgroundColor: '#f0f2f5'
//     }}>
//       <div style={{ 
//         width: '600px', 
//         border: '1px solid #d9d9d9',
//         borderRadius: '8px',
//         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//         backgroundColor: 'white',
//         padding: '20px',
//         textAlign: 'center'
//       }}>
//         {/* Add model type display */}
//         <div style={{ marginBottom: '10px', color: '#666' }}>
//           Selected Model: {modelType.toUpperCase()} CNN
//         </div>

//         {/* Rest of the original UI remains the same */}
//         {/* ... */}
//       </div>
//     </div>
//   );
// };

// export default SQLInjectionDetector;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SQLInjectionDetector = () => {
  const location = useLocation();
  const { modelType } = location.state || { modelType: '1d' }; // Default to 1d if no state

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDisplayOutput = async () => {
    if (!input) {
      alert('Please enter input first');
      return;
    }

    setLoading(true);
    try {
      // Create a text file from input
      const blob = new Blob([input], { type: 'text/plain' });
      const file = new File([blob], 'input.txt', { type: 'text/plain' });
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('model_type', modelType); // Send model type to backend
      
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const predictionText = response.data.prediction === 1 
        ? "Potential SQL Injection Detected!" 
        : "No SQL Injection Detected";
      
      setOutput(predictionText);
      setLoading(false);
    } catch (error) {
      setOutput('Error in analysis');
      setLoading(false);
      console.error('Prediction error:', error);
    }
  };

  const handleStoreOutput = () => {
    if (!output) {
      alert('No output to store');
      return;
    }

    // Automatically generate file with fixed title
    const blob = new Blob([
      `Department of Information Technology\n`,
      `National Institute of Technology Karnataka, Surathkal-575025\n\n`,
      `Information Assurance and Security (IT352) Course Project\n\n`,
      `Title: SQL Injection Detection\n\n`,
      `Model Type: ${modelType.toUpperCase()} CNN\n\n`,
      `Carried out by:\n`,
      `Uggumudi Sai Lasya Reddy (221IT074)\n`,
      `Tanvi Poddar (221IT071)\n\n`,
      `During Academic Session January - April 2025\n\n`,
      `Input: ${input}\n\n`,
      `Output: ${output}`
    ], { type: 'text/plain' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'project_output.txt';
    link.click();
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f0f2f5'
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
          <h3 style={{ margin: 0, color: '#1a5f7a' }}>
            DEPARTMENT OF INFORMATION TECHNOLOGY
          </h3>
          <p style={{ margin: '5px 0', fontSize: '0.9em' }}>
            NATIONAL INSTITUTE OF TECHNOLOGY KARNATAKA, SURATHKAL-575025
          </p>
          <p style={{ margin: '10px 0', fontSize: '0.8em', color: '#666' }}>
            Information Assurance and Security (IT352) Course Project
          </p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#333' }}>
            Title: SQL Injection Detection
          </p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <p style={{ margin: 0, color: '#666' }}>Carried out by</p>
          <p style={{ margin: '5px 0', color: '#666' }}>
            Uggumudi Sai Lasya Reddy (221IT074)
          </p>
          <p style={{ margin: 0, color: '#666' }}>
            Tanvi Poddar (221IT071)
          </p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <p style={{ margin: 0, color: '#666' }}>
            During Academic Session January - April 2025
          </p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <p style={{ margin: 0, color: '#666', marginBottom: '10px' }}>
            Selected Model: {modelType.toUpperCase()} CNN
          </p>
          <textarea 
            value={input}
            onChange={handleInputChange}
            placeholder="Enter your input here"
            style={{
              width: '100%',
              height: '100px',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #d9d9d9',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px', 
          padding: '0 50px' 
        }}>
          <button 
            onClick={handleDisplayOutput}
            style={{
              padding: '10px',
              backgroundColor: '#2980b9',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              opacity: input ? 1 : 0.5
            }}
            disabled={!input}
          >
            {loading ? 'Analyzing...' : 'Detect SQL Injection'}
          </button>

          <button 
            onClick={handleStoreOutput}
            style={{
              padding: '10px',
              backgroundColor: '#2980b9',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              opacity: output ? 1 : 0.5
            }}
            disabled={!output}
          >
            Store Output as File
          </button>
        </div>

        {output && !loading && (
          <div style={{ 
            marginTop: '10px', 
            color: output.includes('Potential') ? 'red' : 'green' 
          }}>
            {output}
          </div>
        )}
      </div>
    </div>
  );
};

export default SQLInjectionDetector;

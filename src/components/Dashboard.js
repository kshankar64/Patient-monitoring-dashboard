import React, { useEffect, useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setPatientData(data);
    };
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Patient Monitoring Dashboard</h1>
      <div className="metrics-grid">
        {patientData.map((patient) => (
          <div key={patient.patientId} className="patient-card">
            <h2>{patient.name}</h2>
            <p>Heart Rate: {patient.heartRate} bpm</p>
            <p>Blood Pressure: {patient.bloodPressure}</p>
            <p>Temperature: {patient.temperature} °C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

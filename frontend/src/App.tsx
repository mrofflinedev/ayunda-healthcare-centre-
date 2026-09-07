import React from 'react'

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>AYUNDA HEALTH CARE SERVICES</h1>
        <p className="tag">Frontend-only scaffold (API removed)</p>
      </header>

      <main>
        <section className="cards">
          <div className="card">Patient Management</div>
          <div className="card">Appointments</div>
          <div className="card">Doctors</div>
          <div className="card">Pharmacy</div>
          <div className="card">Laboratory</div>
          <div className="card">Billing & Payments</div>
        </section>

        <section className="note">
          <h2>Note</h2>
          <p>
            The API/backend has been removed from this branch as requested. To make the app functional, connect these UI modules to an API endpoint and implement auth. I can scaffold that for you in a different branch or add API integration here.
          </p>
        </section>
      </main>

      <footer>
        <small>© AYUNDA HEALTH CARE SERVICES</small>
      </footer>
    </div>
  )
}

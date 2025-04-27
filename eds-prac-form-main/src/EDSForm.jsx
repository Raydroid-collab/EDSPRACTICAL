// src/EDSForm.jsx
import React from 'react';

const EDSForm = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <div className="text-center mb-4">
          {/* Replace with your actual logo */}
          <img src="/logo.png" alt="Logo" height="50" />
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EDSForm;

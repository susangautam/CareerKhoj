import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CareerKhoj: Your Personal Career Launchpad
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Build professional resumes, explore job opportunities, and showcase your portfolio — all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/resume"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Build Your Resume
            </Link>
            <Link
              to="/jobs"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Find Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose CareerKhoj?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Resume Builder</h3>
              <p className="text-gray-600">
                Create professional resumes with intuitive templates and download them as PDFs.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Job Feed</h3>
              <p className="text-gray-600">
                Discover real-time job listings and apply with one click using your resume.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Portfolio Builder</h3>
              <p className="text-gray-600">
                Showcase your projects and skills with a customizable, hosted portfolio.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn Integration</h3>
              <p className="text-gray-600">
                Import your profile and share your resume or portfolio directly to LinkedIn.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🧑‍🎓</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Tools</h3>
              <p className="text-gray-600">
                Access templates, tips, and AI-powered guidance for students and professionals.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">User Dashboard</h3>
              <p className="text-gray-600">
                Manage resumes, track applications, and monitor portfolio analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Start Your Career Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're a student, professional, or freelancer, CareerKhoj has the tools to help you succeed.
          </p>
          <Link
            to="/resume"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
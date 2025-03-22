"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    // const [metrics, setMetrics] = useState({
    //     visitCount: 0,
    //     upcomingAppointments: 0,
    //     pastAppointments: 0,
    //     medicalRecords: 0,
    //     outstandingBalance: 0,
    //     notifications: 0,
    //     profileCompletion: 0,
    //     lastVisit: null,
    //   });
    
      // Simulate fetching dynamic data from an API endpoint
    //   useEffect(() => {
    //     async function fetchMetrics() {
    //       try {
    //         // Replace the URL with your actual API endpoint for dashboard metrics
    //         const res = await fetch('/api/dashboard-metrics');
    //         const data = await res.json();
    //         setMetrics(data);
    //       } catch (error) {
    //         console.error('Error fetching dashboard metrics:', error);
    //       }
    //     }
    //     fetchMetrics();
    //   }, []);
  return (
    <div className='max-w-screen flex' >
      {/* Sidebar
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Hospital Management
        </div>
        <nav className="mt-4">
          <ul>
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <a className="block p-4 hover:bg-gray-700 transition">{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside> */}

      {/* Main Content Area */}
      {/* Main Content Area */}
      <main className="flex-1 bg-[#008080] p-6">
        <h1 className="text-3xl text-white font-bold mb-4">Welcome, [Patient Name]!</h1>
        <p className="mb-6 text-white">
          Here’s an overview of your activity and important information.
        </p>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Visit Count Card */}
          <Link href="/visits">
            <div className="bg-white shadow rounded p-4 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">Visit Count</h2>
              <p className="text-3xl">10</p>
            </div>
          </Link>

          {/* Upcoming Appointments Card */}
          <Link href="/appointments/upcoming">
            <div className="bg-white shadow rounded p-4 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
              <p className="text-3xl">15</p>
            </div>
          </Link>

          {/* Past Appointments Card */}
          <Link href="/appointments/past">
            <div className="bg-white shadow rounded p-4 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">Past Appointments</h2>
              <p className="text-3xl">13</p>
            </div>
          </Link>

          {/* Medical Records Card */}
          <Link href="/medical-records">
            <div className="bg-white shadow rounded p-4 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">Medical Records</h2>
              <p className="text-3xl">2</p>
            </div>
          </Link>

          {/* Outstanding Billing Card */}
          <Link href="/billing">
            <div className="bg-white shadow rounded p-4 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">Outstanding Balance</h2>
              <p className="text-3xl">$650</p>
            </div>
          </Link>

          {/* Notifications Card */}
          <Link href="/notifications">
            <div className="bg-white shadow rounded p-4 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <p className="text-3xl">2</p>
            </div>
          </Link>

          {/* Profile Completion Card */}
          <Link href="/profile">
            <div className="bg-white shadow rounded p-4 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">Profile Completion</h2>
              <p className="text-3xl">67%</p>
            </div>
          </Link>

          {/* Last Visit Card */}
          <Link href="/last-visit">
            <div className="bg-white shadow rounded p-4 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">Last Visit</h2>
              <p className="text-3xl">30/2/2023</p>
            </div>
          </Link>
        </div>
      </main>
    </div>

  )
}

export default Dashboard
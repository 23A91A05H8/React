// App.jsx - Professional College Analytics Dashboard
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './App.css';

export default function CollegeAnalyticsDashboard() {
  // State for interactive grade distribution
  const [gradeDistribution, setGradeDistribution] = useState([32, 45, 18, 5]);
  
  // Donut Chart: Student Grade Distribution
  const gradeDistributionOptions = {
    chart: {
      type: 'donut',
      width: 380,
      fontFamily: 'Inter, sans-serif'
    },
    labels: ['A — Distinction', 'B — Merit', 'C — Pass', 'D — Fail'],
    colors: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444'],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: '600'
      }
    },
    legend: {
      position: 'right',
      fontSize: '14px',
      fontWeight: '500'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '55%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Students',
              fontSize: '14px'
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { width: 320 },
          legend: { position: 'bottom' }
        }
      }
    ]
  };

  // Line Chart: Academic Performance Trend
  const academicPerformanceOptions = {
    chart: {
      id: 'gpa-trend',
      height: 320,
      type: 'line',
      zoom: { enabled: false },
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: true }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    colors: ['#8B5CF6'],
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Academic Performance Trend',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#1F2937'
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 4
    },
    xaxis: {
      categories: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
      labels: {
        style: {
          fontSize: '12px',
          colors: '#6B7280'
        }
      }
    },
    yaxis: {
      min: 2.5,
      max: 4.0,
      labels: {
        style: {
          fontSize: '12px',
          colors: '#6B7280'
        },
        formatter: (value) => value.toFixed(2)
      }
    },
    markers: {
      size: 5,
      hover: {
        size: 7
      }
    }
  };

  const academicPerformanceSeries = [{
    name: 'Average GPA',
    data: [2.9, 3.1, 3.2, 3.25, 3.3, 3.35]
  }];

  // Bar Chart: Student Credit Achievement
  const studentAchievementOptions = {
    chart: {
      height: 360,
      type: 'bar',
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: true }
    },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#546E7A', '#D4526E'],
    plotOptions: {
      bar: {
        columnWidth: '55%',
        distributed: true,
        borderRadius: 6,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: '600'
      }
    },
    legend: {
      show: false
    },
    title: {
      text: 'Top Students by Credits Earned',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#1F2937'
      }
    },
    xaxis: {
      categories: [
        ['Priya', 'Kumar'],
        ['Arjun', 'Sharma'],
        ['Meera', 'Rao'],
        ['Karan', 'Patel'],
        ['Sneha', 'Verma'],
        ['Rohit', 'Gupta'],
        ['Isha', 'Mehta'],
        ['Vikram', 'Thakur']
      ],
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: '500'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Credits Earned',
        style: {
          fontSize: '12px',
          fontWeight: '500',
          color: '#6B7280'
        }
      },
      labels: {
        style: {
          fontSize: '12px',
          colors: '#6B7280'
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 4
    }
  };

  const studentAchievementSeries = [{
    name: 'Credits',
    data: [88, 84, 82, 78, 76, 72, 70, 68]
  }];

  // Interactive functions for grade distribution
  const randomizeGradeDistribution = () => {
    setGradeDistribution(gradeDistribution.map(() => Math.floor(Math.random() * 60) + 1));
  };

  const addGradeCategory = () => {
    if (gradeDistribution.length < 6) {
      setGradeDistribution([...gradeDistribution, Math.floor(Math.random() * 30) + 1]);
    }
  };

  const removeGradeCategory = () => {
    if (gradeDistribution.length > 2) {
      setGradeDistribution(gradeDistribution.slice(0, -1));
    }
  };

  const resetGradeDistribution = () => {
    setGradeDistribution([32, 45, 18, 5]);
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">College Analytics Dashboard</h1>
        <p className="dashboard-subtitle">
          Comprehensive academic performance and student achievement insights
        </p>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Grade Distribution Card */}
        <div className="chart-card">
          <div className="chart-header">
            <h2 className="chart-title">Grade Distribution Analysis</h2>
            <p className="chart-description">
              Current semester performance breakdown across all courses
            </p>
          </div>
          <Chart 
            options={gradeDistributionOptions} 
            series={gradeDistribution} 
            type="donut" 
            width={380} 
          />
          <div className="chart-controls">
            <button className="control-btn" onClick={randomizeGradeDistribution}>
              Randomize Data
            </button>
            <button className="control-btn" onClick={addGradeCategory}>
              Add Category
            </button>
            <button className="control-btn" onClick={removeGradeCategory}>
              Remove Category
            </button>
            <button className="control-btn reset" onClick={resetGradeDistribution}>
              Reset
            </button>
          </div>
        </div>

        {/* Academic Performance Card */}
        <div className="chart-card">
          <div className="chart-header">
            <h2 className="chart-title">Academic Performance Trend</h2>
            <p className="chart-description">
              Semester-wise GPA progression and academic growth
            </p>
          </div>
          <Chart 
            options={academicPerformanceOptions} 
            series={academicPerformanceSeries} 
            type="line" 
            height={320} 
          />
          <div className="chart-note">
            <span className="note-icon">ℹ</span>
            GPA calculated on a 4.0 scale across all academic programs
          </div>
        </div>

        {/* Student Achievement Card */}
        <div className="chart-card full-width">
          <div className="chart-header">
            <h2 className="chart-title">Student Credit Achievement</h2>
            <p className="chart-description">
              Top performing students ranked by total credits earned
            </p>
          </div>
          <Chart 
            options={studentAchievementOptions} 
            series={studentAchievementSeries} 
            type="bar" 
            height={360} 
          />
        </div>
      </div>

      {/* Footer Note */}
      <div className="dashboard-footer">
        <div className="tech-note">
          <strong>Technical Requirements:</strong> Install dependencies with{' '}
          <code>npm install react-apexcharts apexcharts</code>
        </div>
        <div className="data-note">
          Data updated: {new Date().toLocaleDateString()} | All metrics are simulated for demonstration
        </div>
      </div>
    </div>
  );
}
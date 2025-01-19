import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BigONotationChart: React.FC = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], // X-axis values
    datasets: [
      {
        label: "O(1) - Constant",
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Y-axis values forming a straight line
        borderWidth: 4,
        tension: 0.4,
        pointRadius: 0,
        backgroundColor: "rgba(0, 123, 255, 0.2)", // Light blue
        borderColor: "rgba(0, 123, 255, 1)", // Blue
      },
      {
        label: "O(log n) - Logarithmic",
        data: [1, 1.3, 1.7, 2, 2.3, 2.7, 3, 3.3, 3.5, 3.7],
        borderWidth: 4,
        tension: 0.2,
        pointRadius: 0,
        backgroundColor: "rgba(40, 167, 69, 0.2)", // Light green
        borderColor: "rgba(40, 167, 69, 1)", // Green
      },
      {
        label: "O(n) - Linear",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        borderWidth: 4,
        tension: 0,
        pointRadius: 0,
        backgroundColor: "rgba(255, 193, 7, 0.2)", // Light yellow
        borderColor: "rgba(255, 193, 7, 1)", // Yellow
      },
      {
        label: "O(n^2) - Quadratic",
        data: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
        borderWidth: 4,
        tension: 0.2,
        pointRadius: 0,
        backgroundColor: "rgba(220, 53, 69, 0.2)", // Light red
        borderColor: "rgba(220, 53, 69, 1)", // Red
      },
      {
        label: "O(n log n) - Linearithmic",
        data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        borderWidth: 4,
        tension: 0,
        pointRadius: 0,
        backgroundColor: "rgba(108, 117, 125, 0.2)", // Light gray
        borderColor: "rgba(108, 117, 125, 1)", // Gray
      },
      {
        label: "O(2^n) - Exponential",
        data: [1, 3.5, 15, 30, 50, 80, 130, 210, 340, 550],
        borderWidth: 4,
        tension: 0.2,
        pointRadius: 0,
        backgroundColor: "rgba(253, 126, 20, 0.2)", // Light orange
        borderColor: "rgba(253, 126, 20, 1)", // Orange
      },
      {
        label: "O(n!) - Factorial",
        data: [1, 10, 50, 300, 1200],
        borderWidth: 4,
        tension: 0.2,
        pointRadius: 0,
        backgroundColor: "rgba(23, 162, 184, 0.2)", // Light cyan
        borderColor: "rgba(23, 162, 184, 1)", // Cyan
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
        display: true,
        labels: {
          font: {
            size: 14,
            family: "Arial",
            weight: "bold",
          },
          color: "black",
          padding: 20,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false, // Hide numbers on the y-axis
        },
        grid: {
          display: false, // Hide gridlines
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BigONotationChart;

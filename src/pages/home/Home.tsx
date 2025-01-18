import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>What is Big O Notation?</h2>
      <p>
        Big O Notation is a way to describe the efficiency or performance of an
        algorithm in terms of its time complexity or space complexity. It gives
        an upper bound on the growth rate of an algorithm, helping to understand
        how its performance changes as the size of the input data grows.
      </p>
      <h2>What is it used for?</h2>
      <p>
        Big O notation is primarily used to:
        <ul>
          <li>
            Estimate how long an algorithm will take to run as the input size
            increases (Time Complexity).
          </li>
          <li>
            Estimate how much memory an algorithm will consume as the input size
            increases (Space Complexity).
          </li>
        </ul>
      </p>
      <h2>Things to know</h2>
      <p>
        Key Concepts:
        <ul>
          <li>
            Input Size (n): Refers to the amount of data or the size of the
            input. For example, if you're sorting an array, the input size would
            be the number of elements in the array.
          </li>
          <li>
            Growth Rate: Describes how the time or space requirements increase
            as the input size grows.
          </li>
        </ul>
      </p>
      <h2>Types of Big O Notation</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Big O Notation</th>
            <th scope="col">Description</th>
            <th scope="col">Example Algorithm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">O(1)</th>
            <td>Constant Time</td>
            <td>Accessing an array element</td>
          </tr>
          <tr>
            <th scope="row">O(n)</th>
            <td>Linear Time</td>
            <td>Finding max in an array</td>
          </tr>
          <tr>
            <th scope="row">O(n^2)</th>
            <td>Quadratic Time</td>
            <td>Bubble Sort</td>
          </tr>
          <tr>
            <th scope="row">O(log n)</th>
            <td>Logarithmic Time</td>
            <td>Binary Search</td>
          </tr>
          <tr>
            <th scope="row">O(n log n)</th>
            <td>Linearithmic Time</td>
            <td>Merge Sort</td>
          </tr>
          <tr>
            <th scope="row">O(2^n)</th>
            <td>Exponential Time</td>
            <td>Recursive Fibonacci</td>
          </tr>
          <tr>
            <th scope="row">O(n!)</th>
            <td>Factorial Time</td>
            <td>Permutations Generation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;

# Stale Closures in React's useEffect Hook

This repository demonstrates a common error when using the `useEffect` hook in React with `setInterval`.  The issue arises from stale closures, where the callback function within `setInterval` references an outdated state value.  This can lead to unexpected and incorrect behavior.

## Problem

The `bug.js` file contains a component that uses `setInterval` within a `useEffect` hook to update a counter. However, because of a closure issue, the counter may not update correctly. Each time the `setInterval` callback function runs it uses the previous value of `count` rather than the latest updated value.  This causes the counter to increment incorrectly.

## Solution

The `bugSolution.js` file provides a corrected implementation. It addresses the stale closure issue by using a functional update to `setCount`.  This ensures that the callback function always receives the latest state value, resulting in the correct counter behavior.

## How to reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Observe the incorrect counter behavior in `bug.js` and compare it to the correct behavior in `bugSolution.js`.
```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over the previous state
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```
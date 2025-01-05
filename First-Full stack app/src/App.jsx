import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();
      console.log("Fetched Data:", data); // Log data to check if it’s being fetched
      setItems(data); // Update state with fetched data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data"); // Set error message if an error occurs
      setLoading(false); // Set loading to false if error occurs
    }
  };

  useEffect(() => {
    fetchItems(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      <h1>Posts List</h1>
      {loading ? (
        <p>Loading...</p> // Show loading text while data is being fetched
      ) : error ? (
        <p>{error}</p> // Display error message if an error occurs
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

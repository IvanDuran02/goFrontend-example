import { useEffect, useState } from "react";
import "./App.css";

type value = {
  id: string;
  title: string;
  artist: string;
  price: number;
};

function App() {
  const [data, setData] = useState<[value]>();

  useEffect(() => {
    // Fetch your data and set it in the state
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8085/albums");
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error(
            "Failed to fetch data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Album's</h1>
      <ul>
        {data?.map((album, index) => (
          <li key={index}>
            {album.title}, {album.artist}, ${album.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

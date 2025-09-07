//useEffect advanced Exapmle
import React, { useState, useEffect } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
          .then((res) => res.json())
          .then((data) => setResults(data));
      }
    },500);

    // cleanup: cancel timeout if user types again quickly
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <input
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Search;
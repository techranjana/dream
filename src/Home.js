import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the URL of the GET API to fetch a list of todos
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    // Make a GET request to the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData); // Update the state with the fetched data
      }
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <table className="table table-danger">
        <thead>
          <tr>
           
            <th scope="col">User ID</th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Rapid) => (
            <tr >
              <th scope="row">{Rapid.id}</th>
              <td>{Rapid.userId}</td>
              <td>{Rapid.id}</td>
              <td>{Rapid.title}</td>
              <td>{Rapid.completed ? 'complete' : 'Not'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
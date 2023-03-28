import React, { useState } from "react";

import './App.css';
import articlesData from "../../api/articlesData"

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const searchEmail = async (filterObject) => {
    console.log(filterObject)
    setSearchTerm(filterObject.searchTerm);
    const {data} = await articlesData.get('search/', {
        params: {
            q_term: filterObject.searchTerm,
            q_type: filterObject.searchType,
        }
    }).catch((error)=>{
        console.log(error);
    })
    setSearchResults(data.items || []);
}
  return (
    <div className="App">
      <header className="App-header" >
        {searchEmail}
      </header>
    </div>
  );
}

export default App;

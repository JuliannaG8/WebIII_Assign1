import React, { useState } from "react";
import "./HomeView.css";
import {Link, useLocation, useParams} from 'react-router-dom';
import Header from "./Header";





function HomeView({ placeholder, data }) {
 
    //state value when using react router
  
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


    const handleFilter = (e) => {
    const searchSong = e.target.value;
        setWordEntered(searchSong);
            const newFilter = data.filter((value) => {
                return value.title.toLowerCase().includes(searchSong.toLowerCase());
    });

    if (searchSong === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

 
    return (  
        <div className="default">
            
        <div className="minibox"> Play Browser

            <div className="searchInputs"> Title: {" "}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
          
                />
      {filteredData.length !== 0 && (
        <div className="songResult">
          {filteredData.map((value, key) => {
            
            return (              
                <p>                     
                  {value.title}  
                  {console.log(filteredData)}           
                </p>
            );
          })}
        </div>
      )}
    </div>
    
          <Link to = {{
              pathname: '/DefaultView',
              state: {
                  fromHomeView: true
              }
          }}>
                
                song = {filteredData}
            
          <button>Show Matching Plays</button>
          </Link>
          
          
          <Link to = {{
              pathname: '/DefaultView',
              state: {
                  fromHomeView: true
              }
              }}>
          <button>Show All Plays</button>
          
          </Link>
    </div>
    </div>
  );
}

export default HomeView;
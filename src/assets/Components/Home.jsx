import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [ loading, setLoading ] = useState(true);
  const [ records, setRecords ] = useState([]);
  const [ filters, setFilters ] = useState("");
//   const [ searches, setSearches ] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); 

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      if (data) {
        setRecords(data);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchAPI();
  }, []);
   
  const filteredData = filters === "" ? records : records.filter((value) => value.region === filters)
  
  // Step 2: Implement filtering function
  const filterProjects = () => {
    return filteredData.filter((tdata) => {
      const countryName = tdata.name.common.toLowerCase();
      // Add more fields if needed

      return countryName.includes(searchQuery.toLowerCase());
    });
  };
  const doneSearch =  filterProjects();


  return (
    <div className="h-screen text-[14px] bg-lightGray dark:bg-veryDarkBlue dark:text-white">
      <NavBar />
      <div className="p-4 mt-8 px-4 md:px-20 flex flex-col md:flex-row gap-20 justify-between">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a country...."
          className="bg-white dark:bg-darkBlue"
        />
        <select
          name=""
          id=""
          onChange={(e) => setFilters(e.target.value)}
          className="w-[15vw] bg-white hover:border-none dark:bg-darkBlue"
        >
          <option value="">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="p-4 px-4 md:mx-20 mt-8 flex items-center justify-center ">
        <div className="">
          {loading ? (
            "Loading...."
          ) : (
            <div className="relative grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {filteredData &&
                doneSearch.map((item, index) => (
                  <Link
                    to={`/info/${item.name.common}`}
                    className="w-64 pb-4 bg-white relative border-cyan-600 shadow-md rounded dark:bg-slate-700"
                    key={index}
                  >
                    <img src={item.flags.svg} alt="" />
                    <div>
                      <p className="p-2 font-bold text-lg">
                        {item.name.common}
                      </p>
                    </div>
                    <div className="ml-2">
                      <ul className="">
                        {" "}
                        <li>
                          <b>Population:</b> {item.population.toLocaleString('en-IN')}
                        </li>
                        <li>
                          <b>Region:</b> {item.region}
                        </li>
                        <li>
                          <b>Capital:</b> {item.capital}
                        </li>
                      </ul>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

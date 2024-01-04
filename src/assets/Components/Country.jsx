import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Country = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ records, setRecords ] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const { countryName } = useParams();

  const borders = country.map((country) => country.borders);

  const fetchAPI = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      if (data) {
        setRecords(data);
        console.log(data)
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const varName = records.filter((item) => item.name.common === "Denmark" );
  console.log(varName.region);
 

  return (
    <div className="h-screen text-[16px] text-darkBlueText bg-lightGray dark:bg-veryDarkBlue dark:text-white'>">
      <div>
        <NavBar />
      </div>
      <div className="p-4 mx-20 my-20">
       <Link to="/"><button className="w-32 h-10 text-darkBlueText bg-white shadow-md dark:bg-darkBlue dark:text-white">
        Back</button>
      </Link>
      </div>
      <div className="p-4 mx-20 dark:text-white">
        <div className="flex">
          <div className="">
            <img src="/assets/images/france.png" alt="" />
          </div>
          <div className="mx-20">
            <h2 className="font-bold text-2xl">Nigeria</h2>
            <div className="mt-4 flex justify-around">
              <ul className="">
                <li><b>Native name:</b> Test</li>
                <li><b>Population:</b> Default test</li>
                <li><b>Region:</b> Europe</li>
                <li><b>Sub Region:</b> Western Europe</li>
                <li><b>Capital: </b>Brussels</li>
              </ul>
              <ul className="">
                <li><b>Top Level Domain:</b> .be</li>
                <li><b>Currencies:</b> Euro</li>
                <li><b>Languages:</b>Test</li>
              </ul>
            </div>
            <div className="mt-12">  
            <div className="flex gap-4">
            <b>Border Countries: </b>
            <button className="w-32 h-10 text-darkBlueText dark:text-darkGray bg-white shadow-lg dark:bg-darkBlue">France</button>
            <button className="w-32 h-10 text-darkBlueText dark:text-darkGray bg-white shadow-lg  dark:bg-darkBlue">Holand</button>
            <button className="w-32 h-10 text-darkBlueText dark:text-darkGray bg-white shadow-lg dark:bg-darkBlue">Germany</button>
            </div>   
        </div>

          </div>
        </div>
        </div>
    

    </div>
  );
};

export default Country;

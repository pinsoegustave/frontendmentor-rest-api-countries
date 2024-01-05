import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link, useParams } from "react-router-dom";
import img from '../images/italy.png'

const CountryInfo = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ records, setRecords ] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
  const getSingleCountry = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
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
  getSingleCountry();

  }, [countryName]);

  return (
    <div className="h-full text-[16px] text-darkBlueText bg-lightGray dark:bg-veryDarkBlue dark:text-white'>">
    <div>
      <NavBar />
      <div className="p-4 mt-8 px-4 md:px-20 flex flex-col md:flex-row gap-20 justify-between">
       <Link to="/"><button className="w-32 h-10 text-darkBlueText bg-white shadow-md dark:bg-darkBlue dark:text-white">
        Back</button>
      </Link>
      </div>
      {
        records.map((item, index) => (
        <div key={index} className="p-4 mt-8 px-4 md:px-20 dark:text-white">
        <div className="block md:flex">
          <div className="px-2 h-2/5 object-fill sm:size-1">
            <img src={item.flags.svg} alt="canada" />
          </div>
          <div className="p-4">
            <h2 className="font-bold text-2xl">{item.name.common}</h2>
            <div className="mt-4">
              <ul className="">
                {/* <li><b>Native name:</b> { item.official }</li> */}
                <li><b>Capital: </b> {item.capital}</li>
                <li><b>Population:</b> {item.population.toLocaleString()}</li>
                <li><b>Region:</b> {item.region}</li>
                <li><b>Sub Region:</b> {item.subregion}</li>
              </ul>
              <ul className="">
                <li><b>Top Level Domain:</b> {item.tld}</li>
                <li><b>Capital:</b> {item.capital}</li>
                <li><b>Languages:</b>{}</li>
              </ul>
            </div>
            <div className="mt-12">  
            <div className="flex gap-4">
              {
                item.borders && (
                  <>
                  <b>Border Countries: </b>
                  {item.borders.map((border, index) => (
            <button key={index} className="w-32 h-10 text-darkBlueText dark:text-darkGray bg-white shadow-lg dark:bg-darkBlue">{border}</button>
            ))}
                  </>
                )
              }
            
            </div>   
        </div>

          </div>
        </div>
        </div>
        )) 
      }
    </div>
    </div>
  )
}

export default CountryInfo
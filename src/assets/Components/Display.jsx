import React, { useEffect, useState } from 'react'

const Display = () => {
  const [loading, setLoading ] = useState(true);
  const [records, setRecords ] = useState([]);

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json();
      if (data) {
        setRecords(data)
      }

    }catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className='App'>
      {
        loading ? 'Loading....' : (
          <div className='grid'>
            {
              records && records.map(item => (
                <div className='item' key={item.id}>
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Display
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const apiURL = 'https://ironbnb-m3.herokuapp.com/apartments';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      console.log(response);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            loading ? <h1>Loading</h1> : <CountriesList countries={countries} />
          }
        />

        <Route
          path="/countries/:id"
          element={
            loading ? (
              <h1>Loading</h1>
            ) : (
              <CountryDetails countries={countries} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;

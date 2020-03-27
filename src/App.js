import React from 'react';
import CountryTable from './CountryTable';
import './App.css';
import GeneralParts from './components/GeneralParts';
import countryFacade from './countryFacade';

const App = () => {
  const [labels, setLabels] = React.useState([]);
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      countryFacade.getLabels().then(res => setLabels(res));
      countryFacade.getCountries().then(res => setCountries(res));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <GeneralParts />
        <p>
          Your initial task is to fetch data from the server (see exercise for how to start it), and
          create a table below, with these data
        </p>
        <CountryTable labels={labels} countries={countries} />
      </div>
    </div>
  );
};

export default App;

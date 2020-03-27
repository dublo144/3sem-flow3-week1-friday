import React from 'react';

const CountryTable = ({ labels, countries }) => {
  const handleArrayValues = array => {
    if (Array.isArray(array) && array.length > 1) {
      var [shownValue, ...rest] = array;
      return `${shownValue} (+${rest.length})`;
    }
    return array.join('');
  };

  return (
    <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <table className="table">
        <thead>
          <tr>{labels && labels.map(label => <th key={label}>{label}</th>)}</tr>
        </thead>

        <tbody>
          {countries &&
            countries.map(country => (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>{country.area}</td>
                <td>{handleArrayValues(country.timezones)}</td>
                <td>{handleArrayValues(country.borders)}</td>
                <td>{handleArrayValues(country.topLevelDomain)}</td>
                <td>{handleArrayValues(country.currencies)}</td>
                <td>{handleArrayValues(country.languages)}</td>
              </tr>
            ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;

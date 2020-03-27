//Add imports here

const countryFacade = () => {

  const getLabels = () => {
    //TODO: Get Labels from server
    return fetch('http://localhost:3456/labels').then(res => res.json())
  }

  const getCountries = () => {
    //TODO: Get Countries from server
    return fetch('http://localhost:3456/countries').then(res => res.json())
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();
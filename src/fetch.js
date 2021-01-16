const fetchAPI = {
  getData(dataset) {
    fetch(`http://localhost:3001/api/v1/${dataset}`)
    .then(response => response.json());
  },

  postData(dataset, options) {
    fetch(`http://localhost:3001/api/v1/${dataset}`, options)
    .then(response => response.json());
  }  
};

export default fetchAPI;
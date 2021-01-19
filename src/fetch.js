const fetchAPI = {
  getData(dataset) {
    return fetch(`http://localhost:3001/api/v1/${dataset}`)
      .then(response => response.json())
  },

  postData(body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    };

    return fetch(`http://localhost:3001/api/v1/trips`, options)
      .then(response => response.json())
      .catch(error => console.log(error));
  }  
};

export default fetchAPI;
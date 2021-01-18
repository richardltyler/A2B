const fetchAPI = {
  getData(dataset) {
    return fetch(`http://localhost:3001/api/v1/${dataset}`)
    .then(response => response.json());
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
    .then(data => console.log(data));
  }  
};

export default fetchAPI;
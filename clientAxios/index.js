const axios = require('axios');

const sendRandomNumber = async () => {
  const number = Math.floor(Math.random() * 100);
  const response = await axios.get(`http://localhost:3000/ingreso?number=${number}`);
  console.log(response.data);
};

setInterval(sendRandomNumber, 5000);

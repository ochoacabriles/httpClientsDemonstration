import got from 'got';

const getRandomNumbers = async () => {
  const response = await got('http://localhost:3000/egreso');
  console.log(response.body);
};

setInterval(getRandomNumbers, 10000);

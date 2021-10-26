// 1. callback
// function countDown(time) {
//   let timer = setInterval(() => {
//     console.log(time);
//     time--;
//     if (time === 0) {
//       clearInterval(timer);
//     }
//   }, 1000);
// }
// countDown(5);

// 2. promise
let url = 'https://jsonplaceholder.typicode.com/todos/1';
function getAPI(url) {
  console.log('getAPI1');
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
getAPI(url);

async function getAPI2(url) {
  console.log('getAPI2');
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

getAPI2(url);

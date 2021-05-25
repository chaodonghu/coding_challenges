new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Time is out");
  }, 3000);
})
  .then(console.log.bind(null, "Promise is fulfilled"))
  .catch(console.error.bind(null, "Something bad happened: "));

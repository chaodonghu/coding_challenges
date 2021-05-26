// Bind method is useful when you don't want to invoke the function immediately.
// Instead bind creates a copy of the function that you can invoke later

// You can also pass in arguments with the bind method one by one, just like you would with call:

function covidAlert(phaseNum, date, state) {
  alert(
    `To stop the spread, please ${this.outdoor}, so we can enter phase ${phaseNum} on ${date}. We are #${state}Smart.`
  );
}
const measures = {
  indoor: "wash your hands",
  outdoor: "wear a mask",
  social: "keep 6-feet distance",
};
const functionToBind = covidAlert.bind(
  measures,
  "four",
  "July 20th",
  "NewYork"
);
functionToBind();
// => To stop the spread, please wear a mask, so we can enter phase four on Ju

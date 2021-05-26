// Both the call and apply methods allow us to specify what the this keyword should reference and invoke the function immediately.

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

// 1. Call - if you want to pass arguements to the function, you can do so by passing in the arguements one by one using the call method
covidAlert.call(measures, "four", "July 20th", "NewYork");
// => To stop the spread, please wear a mask, so we can enter phase four on July 20th. We are #NewYorkSmart.

// 2. With apply you should pass in an array of arguements
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

const reopenDetails = ["four", "July 20th", "NewYork"];
covidAlert.apply(measures, reopenDetails);
// => To stop the spread, please wear a mask, so we can enter phase four on July 20th. We are #NewYorkSmart.

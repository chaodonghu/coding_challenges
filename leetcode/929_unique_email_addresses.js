/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  // create a new set to store unique email addresses
  let set = new Set();

  for (let email of emails) {
    // split the email by local and domain
    let [local, domain] = email.split("@");
    let newEmail = "";

    // go through every character of the local
    for (let char of local) {
      // if there is a period, then skip adding it to the new email
      if (char === ".") {
        continue;
      }

      // if we encounter a plus then negate the rest of the string
      if (char === "+") {
        break;
      }
      newEmail += char;
    }

    // append the domain back to the email
    newEmail += `@${domain}`;
    // if the set does not have our new email add to it
    if (!set.has(newEmail)) set.add(newEmail);
    // reset our email
    newEmail = "";
  }

  // return our set's size
  return set.size;
};

// Time: O(N)
// Space: O(1)

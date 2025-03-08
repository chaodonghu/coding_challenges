// Implement how this class is` used
class StoreData {
  constructor() {
    this.dataStore = new Map();
    this.change = new Map();
    this.dataEvent = new Map();
  }

  // return true/false if the dataStore has the key
  has(name) {
    return this.dataStore.has(name);
  }

  add(key, value) {
    const oldValue = this.dataStore.get(key);

    // Trigger change event if it exists, this will console log the old and new key value
    if (this.change.has(key)) {
      // Get the key and then call the old value, the new value and the key on the change event callback
      this.change.get(key)(oldValue, value, key);
    }

    // Trigger data event if it exists, this will console log the old and new key value in terms of a data event
    if (this.dataEvent.has(key)) {
      // Get the key and then call the old value, the new value and the key on the change event callback
      this.dataEvent.get(key)(oldValue, value, key);
    }

    // Always update the data store
    this.dataStore.set(key, value);
  }

  on(key, value) {
    const actionKey = key.split(":")[1];

    // if it's a chnage event, then set our change event to be the value (callback fn)
    if (actionKey) {
      this.change.set(actionKey, value);
    } else {
      //  if it's not a change event, then set our dataEvent to be the value (callback fn)
      this.dataEvent.set(key, value);
    }
  }
}

let store = new StoreData();

store.add("name", "joe");
store.add("age", 30);
console.log(store.has("age")); // return true
console.log(store.has("animal")); // return false
store.add("name", "emma");
// Change event
store.on("change:name", (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});
// Trigger the change event above
store.add("name", "john");
// Data event
store.on("age", (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});
// Trigger the data event above
store.add("age", 26);
// Change event
store.on("change:age", (old_val, new_val, key) => {
  console.log(`${old_val > new_val ? "older now" : ""}`);
});
// Trigger the change event above
store.add("age", 28);
// Trigger the change event above
store.add("age", 45);

// From https://leetcode.com/discuss/post/348436/airbnb-phone-screen-implement-storedata-mp6wv/

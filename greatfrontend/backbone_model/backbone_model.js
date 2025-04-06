//www.greatfrontend.com/interviews/study/airbnb/questions/javascript/backbone-model
export default class BackboneModel {
  constructor(initialValues = {}) {
    // instantiate a new map
    this.attributes = new Map();

    // for each key in the initialValues object, set the key in the attributes map
    for (const [key, value] of Object.entries(initialValues)) {
      this.attributes.set(key, {
        value,
        //  events are an object with change and unset arrays
        // change = { fn: function, context: object }
        // unset = { fn: function, context: object }
        events: { change: [], unset: [] },
      });
    }
  }

  // get the value of an attribute
  get(attribute) {
    return this.attributes.get(attribute)?.value;
  }

  // set the value of an attribute
  set(attribute, newValue) {
    // get the existing value of the attribute
    const existing = this.attributes.get(attribute);

    if (existing) {
      // if the value has changed, trigger the change event
      if (existing.value !== newValue) {
        // trigger the change event for each listener
        existing.events.change.forEach(({ fn, context }) =>
          // change is fired with the attribute name, the new value, and the old value
          fn.call(context ?? null, attribute, newValue, existing.value)
        );
        // update the value of the attribute
        existing.value = newValue;
      }
    } else {
      // if the attribute does not exist, create it
      this.attributes.set(attribute, {
        value: newValue,
        events: { change: [], unset: [] },
      });
    }
  }

  has(attribute) {
    return this.attributes.has(attribute);
  }

  unset(attribute) {
    const data = this.attributes.get(attribute);
    if (!data) return;

    data.events.unset.forEach(({ fn, context }) =>
      // unset is fired with the attribute name
      fn.call(context ?? null, attribute)
    );
    // delete the attribute from the attributes map
    this.attributes.delete(attribute);
  }

  // add a listener for an event
  on(eventName, attribute, callback, context) {
    const data = this.attributes.get(attribute);
    if (!data) return;

    // add the listener to the events array
    data.events[eventName]?.push({ fn: callback, context });
  }

  off(eventName, attribute, callback) {
    const data = this.attributes.get(attribute);
    if (!data) return;

    // remove the listener from the events array
    // events contain  an array of { fn: function, context: object }
    data.events[eventName] = data.events[eventName].filter(
      ({ fn }) => fn !== callback
    );
  }
}

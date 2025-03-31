// You are free to use alternative approaches of
// defining BackboneModel as long as the
// default export can be instantiated.
export default class BackboneModel {
  /**
   * @param {Object} initialValues
   * @returns BackboneModel
   */
  constructor(initialValues) {
    // initial values is an object
    this.initialValues = initialValues || {};
    this.events = [];
  }

  /**
   * Get the value of a specific attribute.
   * @param {string} attribute - The attribute name.
   * @returns {any | undefined} The value of the attribute.
   */
  get(attribute) {
    if (this.initialValues[attribute]) {
      return this.initialValues[attribute];
    }

    return undefined;
  }

  /**
   * Set the value of a specific attribute.
   * @param {string} attribute - The attribute name.
   * @param {any} value - The value to set for the attribute.
   */
  set(attribute, value) {
    this.initialValues[attribute] = value;
  }

  /**
   * Check if the model has a specific attribute.
   * @param {string} attribute - The attribute name.
   * @returns {boolean} `true` if the model has the attribute, `false` otherwise.
   */
  has(attribute) {
    if (this.initialValues[attribute]) {
      return true;
    }

    return false;
  }

  /**
   * Unset a specific attribute.
   * @param {string} attribute - The attribute name to unset.
   */
  unset(attribute) {
    delete this.initialValues[attribute];
  }

  /**
   * Register an event listener for changes to a specific attribute.
   * @param {string} eventName - The event name.
   * @param {string} attribute - The attribute name to listen for changes.
   * @param {Function} callback - The callback function to be executed on the event.
   * @param {any} [context] - The context in which to execute the callback.
   */
  on(eventName, attribute, callback, context) {
    this.events.push({ eventName, attribute, callback, context });

    callback.call(context);
  }

  /**
   * Remove an event listener for changes to a specific attribute.
   * @param {string} eventName - The event name.
   * @param {string} attribute - The attribute name to stop listening for changes.
   * @param {Function} callback - The callback function to remove.
   */
  off(eventName, attribute, callback) {
    callback.call(context);

    this.events = this.events.filter(
      (event) =>
        event.eventName !== eventName ||
        event.attribute !== attribute ||
        event.callback !== callback
    );
  }
}

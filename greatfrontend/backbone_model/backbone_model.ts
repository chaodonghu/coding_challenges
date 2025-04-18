//www.greatfrontend.com/interviews/study/airbnb/questions/javascript/backbone-model

type EventName = "change" | "unset";

interface IBackboneModel {
  get(attribute: string): unknown | undefined;
  set(attribute: string, value: unknown): void;
  has(attribute: string): boolean;
  unset(attribute: string): void;
  on(
    eventName: EventName,
    attribute: string,
    callback: Function,
    context?: any
  ): void;
  off(eventName: EventName, attribute: string, callback: Function): void;
}

// Define the callbackData and AttributeData types
type CallbackData = { fn: Function; context: any };
type AttributeData = {
  value: unknown;
  events: {
    change: Array<CallbackData>;
    unset: Array<CallbackData>;
  };
};

// You are free to use alternative approaches of
// defining BackboneModel as long as the
// default export can be instantiated.
export default class BackboneModel implements IBackboneModel {
  // define a new type for attributes
  _attributes: Map<string, AttributeData>;

  constructor(initialValues: Record<string, unknown> = {}) {
    // initialize the attributes map
    this._attributes = new Map();
    // iterate over the initial values
    Object.entries(initialValues).forEach(([attribute, value]) => {
      this._attributes.set(attribute, {
        value,
        events: {
          change: [],
          unset: [],
        },
      });
    });
  }

  get(attribute: string): unknown | undefined {
    // return the value of the attribute
    return this._attributes.get(attribute)?.value;
  }

  set(attribute: string, value: unknown): void {
    // get the attribute data
    const attributeData: AttributeData = this.has(attribute)
      ? this._attributes.get(attribute)!
      : {
          value,
          events: {
            change: [],
            unset: [],
          },
        };

    // Only invoke callbacks if there's a change in the values.
    if (attributeData.value !== value) {
      // Invoke callbacks listening for the `change` event.
      attributeData.events.change.forEach((callback) => {
        callback.fn.call(
          callback.context ?? null,
          attribute,
          value,
          attributeData.value
        );
      });
    }

    // update the value of the attribute
    attributeData.value = value;
    // update the attributes map
    this._attributes.set(attribute, attributeData);
  }

  has(attribute: string): boolean {
    // return true if the attribute exists
    return this._attributes.has(attribute);
  }

  unset(attribute: string): void {
    // get the attribute data
    const attributeData = this._attributes.get(attribute);
    // No-op for non-existent attributes.
    if (attributeData == null) {
      return;
    }

    // Invoke callbacks listening for the `unset` event.
    attributeData.events.unset.forEach((callback) => {
      callback.fn.call(callback.context ?? null, attribute);
    });
    // Remove the attribute entirely.
    this._attributes.delete(attribute);
  }

  on(
    eventName: EventName,
    attribute: string,
    callback: Function,
    context?: any
  ): void {
    // get the attribute data
    const attributeData = this._attributes.get(attribute);
    // No-op for non-existent attributes.
    if (attributeData == null) {
      return;
    }

    // Add to the list of callbacks.
    attributeData.events[eventName].push({
      fn: callback,
      context,
    });
  }

  off(eventName: EventName, attribute: string, callback: Function): void {
    // get the attribute data
    const attributeData = this._attributes.get(attribute);
    // No-op for non-existent attributes.
    if (attributeData == null) {
      return;
    }

    // Remove from the added list of callbacks.
    attributeData.events[eventName] = attributeData.events[eventName].filter(
      ({ fn }) => fn !== callback
    );
  }
}

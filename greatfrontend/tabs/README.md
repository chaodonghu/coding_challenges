# Tabs Component Implementation

## Overview
Implementing a basic (not fully accessible) Tabs component in React is quite simple due to the fact that only one state value is needed - the currently active tab item. React also helps to keep the state and the UI in sync, which is more troublesome to do in Vanilla JavaScript.

For simplicity's sake, we'll create an uncontrolled Tabs component where the state is managed within the Tabs component. During interviews, do clarify with your interviewer if they want you to implement a controlled or uncontrolled component.

## Props (API Design)
Part of the complexity of building a component is designing the API for it. In the case of React, it would be the props of the component. At the bare minimum, we will need the following props:

### Required Props
- `items`: A list of item objects. Each item is an object with the fields:
  - `value`: A unique identifier for the tab item
  - `label`: The text label to show in the tab item
  - `panel`: The contents to show in the tab panel when the item is active

### Optional Props
- `defaultValue`: The default tab item/panel to show. If not provided, we'll use the first item as the value (assuming `items` is non-empty)

For controlled components, there will be a `value` and `onChange` props instead of a `defaultValue` prop.

## Test Cases
- All the provided items should be displayed
- The default active item should be reflected correctly
- Selecting the tab items updates the tabpanel's contents with the active tab's panel details
- Test that you are able to initialize multiple instances of the component, each with independent states

## Accessibility
Accessibility is an important factor for making good Tabs components. The ARIA Authoring Practices Guide for Tabs has a long list of guidelines for the ARIA roles, states, and properties to add to the various elements of a Tab. Tabs II and Tabs III will focus on improving the accessibility of the Tabs component.

## Resources
- [Tabs Patterns | ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [Tabs – Radix Primitives](https://www.radix-ui.com/docs/primitives/components/tabs)
- [Tabs – React Aria](https://react-spectrum.adobe.com/react-aria/Tabs.html)
- [Tabs - Headless UI](https://headlessui.com/react/tabs)
- [Tab – Ariakit](https://ariakit.org/components/tab)
- [Tabs | Reach UI](https://reach.tech/tabs)
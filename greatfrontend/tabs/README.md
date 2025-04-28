# Tabs - Part 1

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

# Tabs - Part 2 (https://www.greatfrontend.com/interviews/study/airbnb/questions/user-interface/tabs-ii)

Note: This is an advanced version of Tabs, you should complete that question first before attempting this question.

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

Source: Tabs Pattern | ARIA Authoring Practices Guide

In Tabs, we built a functional tabs component that displays one panel of content at a time depending on the active tab element. However, building good UI components goes beyond functionality and we have to ensure our components have great accessibility as well by adding the right ARIA roles, states, and properties to the DOM elements.

### Requirements
The ARIA Authoring Practices Guide has a long list of guidelines for the ARIA roles, states, and properties to add to the various elements of a tabs component.

Implement the following guidelines for this question:

- The element that serves as the container for the set of tabs has role tablist.
- Each element that serves as a tab has role tab and is contained within the element with role tablist.
- Each element that contains the content panel for a tab has role tabpanel.
- Each element with role tab has the property aria-controls referring to its associated tabpanel element.
- The active tab element has the state aria-selected set to true and all other tab elements have it set to false.
- Each element with role tabpanel has the property aria-labelledby referring to its associated tab element.

It is also important that we use a <button> element to build the tabs as they need to be focusable and interactive.

### Notes
The skeleton code uses the solution of Tabs, but you are free to use your own solution as a starting point.

# Tabs - Part 3 (https://www.greatfrontend.com/interviews/study/airbnb/questions/user-interface/tabs-iii)

Note: This is an advanced version of Tabs II, you should complete that question first before attempting this question. This question is not available in Vanilla JavaScript as it will require a fair bit of code to add keyboard interactions without a JavaScript framework.

In Tabs II, we built a functional Tabs component that has the necessary WAI-ARIA roles, states, and properties. For a completely accessible Tabs component, we should also add the necessary keyboard interactions.

### Requirements
We'll be following a modified subset of the necessary keyboard interactions for Tabs. Note that the tabs component we're building is activated automatically on focus, so the respective tabpanel contents are shown as soon as the focus changes to a different tab.

When Tab key is pressed:

- When focus moves into the tab list, places focus on the active tab element.
- When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel.

When focus is on a tab element in the tab list:
- Left Arrow: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab.
- Right Arrow: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab.
- Home: Moves focus to the first tab. Shows tabpanel content of the newly focused tab.
- End: Moves focus to the last tab. Shows tabpanel content of the newly focused tab.

### Notes
The focus of this question is on adding keyboard functionality, not the styling. We have provided the solution to Tabs II here for you to build on top of. You can reuse the existing styling.
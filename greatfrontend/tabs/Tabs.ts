import { useId, useState } from "react";

const getTabListItemId = (id, value) => `${id}-tab-${value}`;
const getTabPanelId = (id, value) => `${id}-panel-${value}`;

export default function Tabs({ defaultValue, items }) {
  const tabsId = useId();
  const [value, setValue] = useState(defaultValue ?? items[0].value);

  // Grab the index and set new value
  const setValueViaIndex = (index) => {
    const newValue = items[index].value;
    setValue(newValue);
    // focus on the element
    document.getElementById(getTabListItemId(tabsId, newValue)).focus();
  };

  return (
    <div className="tabs">
      <div
        className="tabs-list"
        role="tablist"
        onKeyDown={(event) => {
          switch (event.code) {
            case "ArrowLeft": {
              // Find the index of the current highlighted item
              const index = items.findIndex(
                ({ value: itemValue }) => itemValue === value
              );
              setValueViaIndex(
                // Use modulo to wrap around to the end if necessary.
                (index - 1 + items.length) % items.length
              );
              break;
            }
            case "ArrowRight": {
              const index = items.findIndex(
                ({ value: itemValue }) => itemValue === value
              );
              // Use modulo to wrap around to the start if necessary.
              setValueViaIndex((index + 1) % items.length);
              break;
            }
            case "Home": {
              // Set the first item as the active item.
              setValueViaIndex(0);
              break;
            }
            case "End": {
              // Set the last item as the active item.
              setValueViaIndex(items.length - 1);
              break;
            }
            default:
              break;
          }
        }}
      >
        {items.map(({ label, value: itemValue }) => {
          const isActiveValue = itemValue === value;

          return (
            <button
              id={getTabListItemId(tabsId, itemValue)}
              key={itemValue}
              type="button"
              className={[
                "tabs-list-item",
                isActiveValue && "tabs-list-item--active",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => {
                setValue(itemValue);
              }}
              role="tab"
              aria-controls={getTabPanelId(tabsId, itemValue)}
              aria-selected={isActiveValue}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
        {items.map(({ panel, value: itemValue }) => (
          <div
            key={itemValue}
            id={getTabPanelId(tabsId, itemValue)}
            aria-labelledby={getTabListItemId(tabsId, itemValue)}
            role="tabpanel"
            hidden={itemValue !== value}
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}

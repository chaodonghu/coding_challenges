import { useState } from "react";

export default function Tabs({ defaultValue, items }) {
  const [currentTab, setTab] = useState(defaultValue ?? items[0].value);

  return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map(({ label, value: itemValue }) => {
          const isActiveValue = itemValue === currentTab;

          return (
            <button
              key={itemValue}
              type="button"
              className={[
                "tabs-list-item",
                isActiveValue && "tabs-list-item--active",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => {
                setTab(itemValue);
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
      // Display content of tabs
      <div>
        {items.map(({ panel, value: itemValue }) => (
          // Hide content of tabs that are not active
          //   Divs have a hidden attribute
          <div key={itemValue} hidden={itemValue !== currentTab}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}

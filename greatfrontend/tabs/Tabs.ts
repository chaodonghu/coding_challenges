import { useState, useId } from "react";

const getTabListItemId = (id: string, value: string) => `${id}-tab-${value}`;
const getTabPanelId = (id: string, value: string) => `${id}-panel-${value}`;

export default function Tabs({ defaultValue, items }) {
  const [currentTab, setTab] = useState(defaultValue ?? items[0].value);
  // Generate a unique id for the tabs since there may be multiple instances of the tabs component on the same page
  const id = useId();

  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist">
        {items.map(({ label, value: itemValue }) => {
          const isActiveValue = itemValue === currentTab;

          return (
            <button
              key={itemValue}
              id={getTabListItemId(id, itemValue)}
              type="button"
              role="tab"
              aria-selected={isActiveValue ? "true" : "false"}
              aria-controls={getTabPanelId(id, itemValue)}
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
          <div
            key={itemValue}
            hidden={itemValue !== currentTab}
            id={getTabPanelId(id, itemValue)}
            role="tabpanel"
            aria-labelledby={getTabListItemId(id, itemValue)}
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}

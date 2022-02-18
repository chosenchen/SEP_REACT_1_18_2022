import React from "react";

const Header = ({ tabs, currentTab, onPanelChange }) => {
  const onTabClick = (e) => {
    const tagName = e.target.dataset.name;
    onPanelChange(tagName);
  };

  return (
    <header className="app__header">
      <ul className="nav-list">
        {tabs?.map((tab) => {
          return (
            <li
              key={tab}
              data-name={tab}
              className={currentTab === tab ? "active-tab" : ""}
              onClick={onTabClick}
            >
              {tab}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;

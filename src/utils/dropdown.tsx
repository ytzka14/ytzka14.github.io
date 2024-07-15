import { useState } from "react";
import "../App.css";
import { ChevronDown } from "lucide-react";

const DropDown = ({items, handleClick} : { items: string[], handleClick: (item: string) => void}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="category-menu-box" onClick={onToggle}>
        <p>카테고리</p>
        <ChevronDown width="10" height="17" />
      </div>
      <div className="dropdown-box-wrap">
        <div className="dropdown-container">
          {isOpen && (
            <>
              {items.map((item) => {
                return (
                  <li className="dropdown-list-item" onClick={() => handleClick(item)}>{item}</li>
                )
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DropDown;
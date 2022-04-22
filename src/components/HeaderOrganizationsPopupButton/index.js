import { useState } from "react";

import HeaderOrganizationsPopupContent from "../HeaderOrganizationsPopupContent";

import "./index.css";
import { Button } from "./StyledComponents";

const HeaderOrganizationsPopupButton = () => {
  const [isPopupOpen, setPopupState] = useState(false);

  const openOrClosePopup = () => {
    setPopupState((prevState) => !prevState);
  };


  return (
      <div>
        <Button
          type="button"
          onClick={openOrClosePopup}
          isPopupOpen={isPopupOpen}
        >
          <span className="header-organization">Organization</span>
          <img
            src="/webimages/HeaderImages/dropDown.svg"
            className="dropdown-icon"
            alt="dropDownIcon"
          />
        </Button>
        {isPopupOpen ? <HeaderOrganizationsPopupContent /> : null}
      </div>
  );
};

export default HeaderOrganizationsPopupButton;

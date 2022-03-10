import "./index.css";
import HeaderSearchField from "../HeaderSearchField";
import HeaderOrganizationsPopupButton from '../HeaderOrganizationsPopupButton'
import HeaderHomeButton from '../HeaderHomeButton'
import HeaderBoardsPopupButton from '../HeaderBoardsPopupButton'
import HeaderLogoutButton from "../HeaderLogoutButton";

const Header = () => {

    const renderTaskManagerLogo = () => (
        <img
        src="/webimages/Logos/taskManagerLogo.svg"
        alt="taskManagerLogo"
        className="header-logo"
      />
    )

  return (  
    <div className="header-bg-container">
      <div className="header-section-container">
        <HeaderHomeButton />
        <HeaderOrganizationsPopupButton />
        <HeaderBoardsPopupButton />
      </div>
      {renderTaskManagerLogo()}
      <div className="header-section-container">
        <HeaderSearchField />
        <HeaderLogoutButton />
        <div className="profile-image-container">
          <p className="profile-name-initials">RK</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

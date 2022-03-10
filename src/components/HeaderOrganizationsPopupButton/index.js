import './index.css'

const HeaderOrganizationsPopupButton = () => {
    return (
        <button type="button" className="header-clickable-container">
          <span className="header-organization">Organization</span>
          <img
            src="/webimages/HeaderImages/dropDown.svg"
            className="dropdown-icon"
            alt="dropDownIcon"
          />
        </button>
    )
}

export default HeaderOrganizationsPopupButton
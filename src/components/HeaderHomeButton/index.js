import './index.css'

const HeaderHomeButton = () => {
    return(
        <button type="button" className="header-clickable-container">
          <img
            src="/webimages/HeaderImages/home.svg"
            className="home-icon"
            alt="homeIcon"
          />
        </button>
    )
}

export default HeaderHomeButton
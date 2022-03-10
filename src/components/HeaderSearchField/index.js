import './index.css'

const HeaderSearchField = () => {
    return(
        <div className="header-search-container">
          <input type="search" placeholder="Search" className="header-search" />
          <img
            src="/webimages/HeaderImages/search.svg"
            className="search-icon"
            alt="searchIcon"
          />
        </div>
    )
}

export default HeaderSearchField
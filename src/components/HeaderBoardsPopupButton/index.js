import './index.css'

const HeaderBoardsPopupButton = () => {
    return(
        <button type="button" className="header-clickable-container">
          <img
            src="/webimages/HeaderImages/boards.svg"
            className="boards-icon"
            alt="boardsIcon"
          />
          <span className="header-boards">Boards</span>
        </button>
    )
}

export default HeaderBoardsPopupButton
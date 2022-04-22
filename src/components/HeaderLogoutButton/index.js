import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const HeaderLogoutButton = (props) => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove("trello_access_token");
    navigate("/login");
  };
  return (
    <button
      type="button"
      className="header-logout-button"
      onClick={onClickLogout}
    >
      Log Out
    </button>
  );
};

export default HeaderLogoutButton;

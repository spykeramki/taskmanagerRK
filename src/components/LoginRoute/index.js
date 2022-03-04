import { useMachine } from "@xstate/react";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import LoginMachine from "../../machines/LoginMachine/machines.js";
import "./index.css";

const LoginRoute = () => {
  // const [state, send] = useMachine(LoginMachine)
  const location = useLocation();
  const trelloAccessToken = Cookies.get("trello_access_token");

  useEffect(() => {
    const hashKey = getHashKeyFromLocationAfterLogin();

    if (hashKey.token) {
      setAccessTokenInCookies(hashKey.token);
    }
  });

  const getHashKeyFromLocationAfterLogin = () => {
    const { hash } = location;
    const hashKey = {};
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get("error");

    if (error === "access_denied") {
      window.close();
    }

    hash
      .replace(/^#\/?/, "")
      .split("&")
      .forEach((keyValue) => {
        const spl = keyValue.indexOf("=");
        if (spl !== -1) {
          hashKey[keyValue.substring(0, spl)] = keyValue.substring(spl + 1);
        }
      });
    return hashKey;
  };

  const setAccessTokenInCookies = (token) => {
    Cookies.set("trello_access_token", token, {
      expires: new Date().getTime() + 60,
    });
    window.location.replace("/");
  };

  const isDevelopmentEnvironment = () => {
    if (
      process.env.NODE_ENV === "development" ||
      window.location.hostname === "localhost"
    ) {
      return true;
    }
    return false;
  };

  const getReturnURL = () => {
    if (isDevelopmentEnvironment()) {
      /* ADD THIS URL to your Application return URIs to redirect after authentication success OR failure */
      return "http://localhost:3004/login";
    }
    /* Change this returnURL accordingly before publishing your project and ADD THIS URL to your Application Return URIs to redirect after authentication success OR failure */
    return "https://taskManager.ccbp.tech/login";
  };

  const openLoginModal = () => {
    const apiKey = "0086119b57e0fa386b533ee9b8fa7085";

    const returnURL = getReturnURL();

    const url = `https://trello.com/1/OAuthAuthorizeToken?expiration=never&name=TaskManager&scope=read,write,account&key=${apiKey}&callback_method=fragment&return_url=${returnURL}`;
    // const url=`https://trello.com/1/authorize?expiration=1day&name=TaskManager&scope=read,write,account&response_type=token&key=${apiKey}&callback_method=fragment&return_url=${returnURL}`
    window.open(url, "_self", "");
  };

  if (trelloAccessToken !== undefined) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="login-bg-container">
      <img
        src="/webimages/Logos/taskManagerLogo.svg"
        alt="taskManagerLogo"
        className="login-page-logo"
      />
      <div className="login-container">
        <img
          src="/webimages/Images/loginImage.svg"
          alt="loginImage"
          className="login-image"
        />
        <p className="login-page-app-description">
          Task tracking for your everyday needs
        </p>
        <button className="login-button" type="button" onClick={openLoginModal}>
          LOG IN WITH TRELLO
        </button>
      </div>
    </div>
  );
};

export default LoginRoute;

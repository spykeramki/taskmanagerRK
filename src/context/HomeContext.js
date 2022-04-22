import React from "react";

const HomeContext = React.createContext({
  selectedOrganization: null,
  profileData:{}
});

export default HomeContext;

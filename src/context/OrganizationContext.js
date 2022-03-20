import React from "react";

const OrganizationContext = React.createContext({
  selectedOrganization: null,
  organizationsList: [],
  addOrganization: () => {},
  removeOrganization: () => {},
});

export default OrganizationContext;

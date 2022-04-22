import {PopupContainer, ListContainer} from './StyledComponents';
import HeaderOrganizationListItem from '../HeaderOrganizationListItem';
import { useContext } from "react";
import HomeContext from '../../context/HomeContext'

const HeaderOrganizationsPopupContent = (props) => {
    const homeContextValue = useContext(HomeContext);
    const {profileData} = homeContextValue;
    const organizationsList = profileData.organizations;
    return(
        <PopupContainer>
            <ListContainer>
                {organizationsList.map(eachOrg => <HeaderOrganizationListItem organization={eachOrg} key={eachOrg.id} />)}
            </ListContainer>
        </PopupContainer>
    )
}

export default HeaderOrganizationsPopupContent
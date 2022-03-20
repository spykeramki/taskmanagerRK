import {OrganizationListItem, OrganizationContainer, OrganizationName} from './StyledComponents'

const HeaderOrganizationListItem = (props) => {
    const {organization} = props
    return(
        <OrganizationListItem>
            <OrganizationContainer>
                <OrganizationName>
                    {organization.displayName}
                </OrganizationName>
            </OrganizationContainer>
        </OrganizationListItem>
    )
}

export default HeaderOrganizationListItem
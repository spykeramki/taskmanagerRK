import { assign, createMachine } from "xstate";
import {userProfileFetch} from '../../fetchApiCalls/getApiCalls'


const HomeMachine = () => createMachine({
    id: 'loginState',
    initial: 'idle',
    context:{
        selectedOrganization: '',
        profileData:{}
    },
    states:{
        idle:{
            always: 'loadingHomeScreen'
        },
        loadingHomeScreen:{
            invoke:{
                id: 'userProfileFetch',
                src: userProfileFetch,
                onDone:{
                    target: 'homeScreenSuccess',
                    actions: ['assignProfileData','assignSelectedOrganization']
                },
                onError:{
                    target: 'homeScreenFailure'
                }
            }
        },
        homeScreenSuccess:{},
        homeScreenFailure:{}
    }
},
{
    actions: {
        assignProfileData: assign({profileData: (context, event) => event.data}),
        assignSelectedOrganization: assign({selectedOrganization: (context, event) => event.data.organizations[0]})
    }
})

export default HomeMachine
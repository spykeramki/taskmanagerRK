import './index.css'
import Header from '../Header'
import { useMachine } from '@xstate/react'
import HomeMachine from '../../machines/HomeMachine/machine'
import HomeContext from '../../context/HomeContext'

const HomeRoute =() => {
    const [currentState, send] = useMachine(HomeMachine)
    
    return (
        <HomeContext.Provider value={currentState.context}>
            <div>
                {currentState.matches("loadingHomeScreen") ? '' : (<Header />)}
            </div>
        </HomeContext.Provider>
        
    )
}

export default HomeRoute
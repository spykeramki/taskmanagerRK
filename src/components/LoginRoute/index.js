import { useMachine } from '@xstate/react';
import LoginMachine from '../../machines/LoginMachine/machines.js'
import './index.css'

const LoginRoute = () => {
    const [state, send] = useMachine(LoginMachine)
    console.log(state)
    return (
        <div className="login-bg-container">
            <img src="/webimages/Logos/taskManagerLogo.svg" alt="taskManagerLogo" className='login-page-logo' />
            <div className="login-container">
                <img src="/webimages/Images/loginImage.svg" alt="loginImage" className='login-image' />
                <p className="login-page-app-description">
                    Task tracking for your everyday needs
                </p>
                <button className="login-button" type='button' onClick={()=>send('LOGIN')}>
                    LOG IN WITH TRELLO
                </button>
            </div>
        </div>
    )
}

export default LoginRoute
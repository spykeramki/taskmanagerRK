import { createMachine } from "xstate";

const LoginMachine = (isLoggedIn) => createMachine({
    id: 'loginState',
    initial: 'idle',
    states:{
        idle:{
            on:{
                LOGIN:{
                    target: 'loginLoading'
                }
            }
        },
        loginLoading:{},
        loginSuccess:{},
        loginFailure:{}
    }
})

export default LoginMachine
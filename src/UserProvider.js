import {createContext,useState} from "react"


const userContext = createContext(undefined)
const userDispatchContext = createContext(undefined)

const UserProvider =({children})=> {

        const [userDetails,setUserDetails] = useState({
            userName:"Kailash"
        })


        return(
            <userContext.Provider value={userDetails}>
                <userDispatchContext.Provider value={setUserDetails}>
                    {children}
                </userDispatchContext.Provider>
            </userContext.Provider>
        )
}

export {userContext,UserProvider,userDispatchContext} ;
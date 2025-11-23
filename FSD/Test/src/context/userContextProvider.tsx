import { useState, type ReactNode } from "react"
import UserContext from "./user.context"

const UserContextProvider = ({children} : {children: ReactNode}) => {
  const [user, setUser] = useState(null)
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
import { useState, type ReactNode } from "react"
import UserContext from "./user.context"

const UserContextProvider = ({children} : {children: ReactNode}) => {
  const [user, setUser] = useState(null)
  
  return (
    <UserContext value={{user, setUser}}>
      {children}
    </UserContext>
  )
}

export default UserContextProvider
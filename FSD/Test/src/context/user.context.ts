/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, type Dispatch } from "react"

interface UserContextType {
  user: any
  setUser: Dispatch<any>
}

const UserContext = createContext<UserContextType | null>(null)

export default UserContext
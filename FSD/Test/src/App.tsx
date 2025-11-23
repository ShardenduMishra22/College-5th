import { useContext } from "react"
import UserContext from "./context/user.context"

const App = () => {
  const context = useContext(UserContext)

  if ( !context ) {
    return <div>Loading...</div>
  }

  const { user, setUser } = context

  return (
    <div>
      {user ? `Hello ${user}` : "Hello guys"}

      <button onClick={() => setUser("John Doe")}>Set User</button>
    </div>
  )
}

export default App

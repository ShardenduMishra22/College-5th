import { useContext } from "react"
import UserContext from "./context/user.context"

const App = () => {
  const context = useContext(UserContext)

  if (!context) {
    return <div>Loading...</div>
  }

  const { user, setUser } = context

  return (
    <div>
      {user ? `Hello ${user}` : "Hello guys"}
      <br />
      <button onClick={() => setUser("Shardendu")}>
        Set User
      </button>
    </div>
  )
}

export default App

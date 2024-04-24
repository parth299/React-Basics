import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./contexts/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
     <div className="heading text-7xl text-center pt-20 text-zinc-500 font-bold">
      React Context and UseContext Basics
     </div>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App

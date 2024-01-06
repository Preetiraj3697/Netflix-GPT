import Header from "./Header"
import Login from "./Login"


const Body = () => {
  return (
    <div className="flex-1 bg-hero bg-cover bg-center bg-no-repeat" style={{height:'900px'}} >
        <div className="bg-gradient-to-tr from-black h-full">
    <Header />
    <Login />
    </div>
    </div>
  )
}

export default Body
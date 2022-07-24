import Navbar from "./Components/Others/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Others/Login";
import { ProtectedRoutes } from "./Components/Hooks/Routs/Routs"
import RequireAuth from "./Components/Hooks/RequirAuth";
function App() {

  return (
    <div className="App">
      <Navbar />


      <Routes>
        {/* publicRouts */}
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth />} >
          {ProtectedRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>


      </Routes>

    </div>
  );
}

export default App;

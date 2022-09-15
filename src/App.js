import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AppViews from "./Views/app-views";
import AuthViews from "./Views/auth-views";

function App({ search }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Login Page Statement
    const token = localStorage.getItem("auth_token");
    setIsLoggedIn(token == null ? false : true);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              // Token'ı çekerse AppViews'a atıcak, token null gelirse AuthViews'a atıcak.
              isLoggedIn ? (
                <AppViews setIsLoggedIn={setIsLoggedIn} search={search} />
              ) : (
                <AuthViews setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

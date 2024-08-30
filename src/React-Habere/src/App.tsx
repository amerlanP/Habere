import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Account from "./components/Account";
// import Social from "./components/Social";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserRecord } from "firebase-admin/auth";

// Define the props interface
interface AppProps {
  userName: string;
  email: string;
  userId: string;
}

const App: React.FC<AppProps> = ({ userId, userName, email }: AppProps) => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Landing userName={userName} email={email}/>}></Route>
        <Route path="/dashboard" element={<Dashboard email={email}/>}></Route>
        <Route path="/account" element={<Account userId={userId} displayName={userName} email= {email}/>}></Route>
        {/* <Route path="/social" element={<Social/>}></Route> */}
      </Routes>
    </Router>
    // <>
    //   <Landing userName={userName}/>
    // </>
  );
};

export default App;
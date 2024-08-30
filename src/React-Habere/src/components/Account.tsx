import React, { useState } from "react";
import TopMenu from "./TopMenu";



interface AccountProps {
  email: string;
  displayName: string;
  userId: string;
}
const Account: React.FC<AccountProps> = ({userId, email, displayName }) => {
  const [newPassword, setNewPassword] = useState("");
  const [changePassStatus, setChangeStatus] = useState(false);

  const changePassword = async (): Promise<void> => {

    const response = await fetch("/api/auth/change-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId: userId, newPassword: newPassword }),
    });

    if(response.status === 200){
      setChangeStatus(true);
      setNewPassword("");
    }
    
  };

  return (
    <>
      <TopMenu></TopMenu>
      <div className="acc-container">
        <h1>Your Account info</h1>
        <p className="acc-label">User Name</p>
        <div className="acc-info-container">
          <p className="acc-info">{displayName}</p>
        </div>

        <p className="acc-label">Email</p>
        <div className="acc-info-container">
          <p className="acc-info">{email}</p>
        </div>

        <p className="acc-label">Password</p>
        <input
          className="acc-info-container new-pass-input"
          type="password"
          placeholder="new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        {changePassStatus && (<div style={{marginTop:'10px'}}>SUCCESS CHANGING THE PASSWORD!</div>)}

        <button
          className="btn-secondary change-pass-btn"
          onClick={changePassword}
        >
          Change Password
        </button>
      </div>
    </>
  );
};

export default Account;

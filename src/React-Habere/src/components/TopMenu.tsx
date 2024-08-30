import {ImHome} from 'react-icons/im';
function TopMenu(){
    return (
      <div className="topHeader">
        <h1 className="logo">HABERE</h1>
        <form action="/home">
            <button id="backHome" className="home-btn" type="submit">
              <ImHome/>
            </button>
        </form>
        <form action="/api/auth/signout">
          <button id="signout" className="btn-secondary" type="submit">Sign out</button>
        </form>
      </div>
    );
  }

export default TopMenu;
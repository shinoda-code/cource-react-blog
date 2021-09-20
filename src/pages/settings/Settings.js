import Sidebar from '../../components/sidebar/Sidebar';
import './Setting.css';

function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsUpdateTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="http://placehold.it/500x300/e8117f/fff" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id='fileInput' style={{display:'none'}} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder='Safak' />
          <label>Email</label>
          <input type="email" placeholder='Safak@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings

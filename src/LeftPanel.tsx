import './LeftPanel.css'
import profilePic from './assets/ProfilePhoto.jpg'
import data from './assets/data.json'

function LeftPanel() {

    return (
        <div id="leftPanelContainer">
            <div id='profilePicContainer'>
                <img id='profilePic' src={profilePic} alt='ProfilePicture'></img>
            </div>
            <div id='nameContainer'>
                <div className='name'>{data.profile.firstName}</div>
                <div className='name'>{data.profile.lastName}</div>
            </div>
            <div id='jobName'>{data.profile.currentPosition}</div>
            <div id='city'>{data.profile.city}</div>
            <div id='email'>{data.profile.email}</div>
            <div></div>
        </div>
    )
}

export default LeftPanel;
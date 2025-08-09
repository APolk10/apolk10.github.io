import './RightPanel.css'
import data from './assets/data.json'

function RightPanel() {

    return (
        <div id="rightPanelContainer">
            <h2 className='headers'>Professional Summary</h2>
            <i id='bio'>{data.profile.bio}</i>
            <h2 id='experience' className='headers'>Experience</h2>
            {data.experience.map(e =>
                <>
                    <h4 className='headers'>{e.jobName}</h4>
                    <div className='jobContainer'>
                        <div className='jobHeader'>
                            <div>{e.company}</div>
                            <div>{e.startDate} - {e.endDate ?? 'Current'}</div>
                        </div>
                        <i className='jobDescription'>{e.description ?? ''}</i>
                    </div>
                </>
            )}
            <h3>Education</h3>
            <div>{data.profile.degree}</div>
            <div>{data.profile.furtherEd}</div>
        </div>
    )
}

export default RightPanel;
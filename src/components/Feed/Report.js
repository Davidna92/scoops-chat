import React, { useState } from 'react'
import moment from 'moment';
import 'moment/locale/he';
import Zoom from 'react-reveal/Zoom';
import './Feed.css'
import { storage } from '../../services/config';


const Report = ({ report }) => {

    const [avatarUrl, setAvatarUrl] = useState('');


    //getting the url from firebase storage and setting the state
    const imgURL = async () => {
        const fileName = report.reporter.avatar.Pc.path.segments[8];
        const storageRef = storage.ref('images');
        await storageRef.child(`/${fileName}`).getDownloadURL().then((url) => {
            setAvatarUrl(url);
        });
    }
    imgURL();



    return (
        <Zoom>
            <div className="feed__container">
                {report && (
                    <div className="feed__box">
                        <div className="reporter__avatar">
                            <img src={`${avatarUrl}`} alt="" />
                        </div>
                        <div className="message__header">
                            <p>{report.reporter.displayName}</p>
                        </div>
                        <div className="feed__message">
                            <p>
                                {report.content}
                            </p>
                        </div>
                        <div className="message__footer">
                            <p className="message__footer__time">
                                {moment(report.timestamp.toDate()).locale('he').startOf('minute').fromNow()}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </Zoom>
    )
}

export default Report;
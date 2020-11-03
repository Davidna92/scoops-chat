import React, { useState, useEffect } from 'react'
import { db } from '../../services/config';
import Report from './Report';
import './Feed.css';
import Buttons from '../buttons/Buttons';

const Feed = () => {
    const [reports, setReports] = useState([{}]);

    useEffect(() => {
        let isMuted = true;
        db.collection("reports").orderBy('timestamp', 'desc').limit(10).onSnapshot(snapshot => {
            if (isMuted) {
                setReports(snapshot.docs.map(doc => ({ id: doc.id, report: doc.data() })))
            };
        })
        return () => isMuted = false;
    }, []);



    return (
        <div className="container">
            <div className="feed__header">
                <h1>צ'אט הסקופים</h1>
            </div>
            <div className="feed">
                {reports.length > 1 && reports.map(report => (
                    <Report report={report.report} key={report.id} />
                ))
                }
            </div>
            <Buttons />
        </div>
    )
}


export default Feed;
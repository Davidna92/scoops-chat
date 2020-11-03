import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { db } from '../../services/config';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import './Reporters.css';


const Reporters = () => {
    const [input, setInput] = useState('');
    const [reporters, setReporters] = useState([{}]);
    const [writer, setWriter] = useState({});

    useEffect(() => {
        db.collection('reporters').onSnapshot(snapshot => {
            setReporters(snapshot.docs.map(doc => doc.data()));
        })
    }, [])



    const handleSelect = (e) => {
        db.collection("reporters").where('displayName', "==", e.target.value).get().then((querySnapshot) => querySnapshot.forEach((doc) => {
            setWriter(doc.data());
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('reports').add({
            content: input,
            reporter: writer,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }



    return (
        <div className="reporters">
            <div className="reporters__container">
                <div className="reporters__header">
                    <h1>כתיבת סקופ</h1>
                </div>
                <div className="reporters__box">
                    <form>
                        <select name="reporter"
                            onChange={e => handleSelect(e)}
                        >
                            <option value="" selected>בחר כתב</option>
                            {reporters.map(reporter => (
                                <option
                                    value={reporter.displayName}
                                >{reporter.displayName}</option>
                            ))}
                        </select>
                        <div className="text">
                            <textarea type="text" name="text" value={input} onChange={e => setInput(e.target.value)} />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} disabled={!input}>פרסם</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="back__btn">

            <Button variant="contained" color="primary"><Link to="/">חזור לדיווחים</Link></Button>
            </div>
        </div>
    )
}

export default Reporters;

import './admin-css/add-project.css';
import './admin-css/update_socialMedia.css';
import {useState, useEffect} from "react";
import axios from "axios";

export default function Update_socialMedia() {
    const [linkedin, setlinkedin] = useState();
    const [instagram, setinstagram] = useState();
    const [telegram, settelegram] = useState();
    const [github, setgithub] = useState();
    const [x, setx] = useState();
    const [data, setData] = useState([]);

    // const id = '667791b395483bfc4c7ac7e1';

    useEffect(() => {
        axios.get('http://localhost:3001/getSocialMedia')
        .then(result => {
            console.log(result)
            setData(result.data)
        })
        .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/updateSocialMedia', {linkedin, instagram, telegram, github, x})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return(
        <>
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Social Media Links</h2>
                    <form onSubmit={submit}>
                        <div className='social_media'>  <div className='socialMedia_title'><p>Linked in</p></div> <input onChange={(e) => {setlinkedin(e.target.value)}} style={{width: "80%"}}  type="text" placeholder="Linked In" /></div>
                        <div className='social_media'>  <div className='socialMedia_title'><p>Instagram</p></div> <input onChange={(e) => {setinstagram(e.target.value)}} style={{width: "80%"}}  type="text" placeholder="Instagram" /></div>
                        <div className='social_media'>  <div className='socialMedia_title'> <p>Telegram</p></div> <input onChange={(e) => {settelegram(e.target.value)}} style={{width: "80%"}} type="text" placeholder="Telegram" /></div>
                        <div className='social_media'>  <div className='socialMedia_title'><p>Github</p> </div><input onChange={(e) => {setgithub(e.target.value)}} style={{width: "80%"}} type="text" placeholder="Github" /></div>
                        <div className='social_media'>  <div className='socialMedia_title'><p>X</p></div> <input onChange={(e) => {setx(e.target.value)}} style={{width: "80%"}} type="text" placeholder="X" /></div>
                        <button>Update</button>
                    </form>
                </div>
            </div>
        </>
    );
}
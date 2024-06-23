import React from "react";
import Messages from "./Messages";
import Add_items from "./Add_items";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main_admin() {
    const [page, setpage] = useState(<Add_items/>);
    const [pagename, setpagename] = useState('item');
    const [data, setData] = useState([]);
    const [count, setCount] = useState(data.length);
    useEffect(() => {
        axios.get('http://localhost:3001/getMessages')
        .then(result => {
            setData(result.data)
            setCount(result.data.length)
        })
        .catch(err => console.log(err))
    })

    function set_message(e) {
        e.preventDefault();
        setpage(<Messages/>);
        setpagename('message');
    }
    function set_item(e) {
        e.preventDefault();
        setpage(<Add_items/>);
        setpagename('item');
    }

    return(
        <>
            <div className="header">
                <div className="logo">
                    <h2>Dagos</h2>
                </div>
                <div className="item-menu">
                    <a href="/items" >
                        {
                            pagename === 'item' ? (
                                <a href="" onClick={set_message} ><p>{count}</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg></a>
                            ) : <a href="" onClick={set_item}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></a>
                        }
                    </a>
                    <a href="/admin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg><a href="/"></a></a>
                </div>
            </div>

            {page}

            {/* --------- Footer------- */}
            <div className="line"></div>
            <div className="footer">
                
                <div className="contents">
                    <p>All Right is received | 2024 </p>
                </div>
            </div>
        </>
    );
}
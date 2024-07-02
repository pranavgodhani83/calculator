import React from 'react';
import { useState } from 'react';

function Calc() {

    const [v1, setv1] = useState(1);
    const [v2, setv2] = useState(2);
    const [v3, setv3] = useState(3);
    const [v4, setv4] = useState(4);
    const [v5, setv5] = useState(5);
    const [v6, setv6] = useState(6);
    const [v7, setv7] = useState(7);
    const [v8, setv8] = useState(8);
    const [v9, setv9] = useState(9);
    const [v0, setv0] = useState(0);
    const [v00, setv00] = useState('00');
    const [dot, setdot] = useState('.');
    const [ac, setac] = useState('Ac');
    const [c, setc] = useState('C');
    const [back, setback] = useState('⌫');
    const [div, setdiv] = useState('/');
    const [mul, setmul] = useState('*');
    const [sub, setsub] = useState('-');
    const [sum, setsum] = useState('+');
    const [equal, setequal] = useState('=');
    const [dis, setdis] = useState('');


    function a() {
        var x = []

        if (dis.includes('+')) {
            x = dis.split('+')
            return parseFloat(x[0]) + parseFloat(x[1])
        } else if (dis.includes('-')) {
            x = dis.split('-')
            return parseFloat(x[0]) - parseFloat(x[1])
        } else if (dis.includes('*')) {
            x = dis.split('*')
            return parseFloat(x[0]) * parseFloat(x[1])
        } else if (dis.includes('/')) {
            x = dis.split('/')
            return parseFloat(x[0]) / parseFloat(x[1])
        }
    }

    function t() {
        var n = a()
        setdis(n)
    }

    return (
        <>
            <div className='center'>
                <div className='calc'>
                    <div className='calc-main'>
                        <input type="text" className='dis' value={dis} />
                        <input type="button" value={ac} className='btn' onClick={(e) => { setdis('') }} />
                        <input type="button" value={c} className='btn' onClick={(e) => { setdis('') }} />
                        <input type="button" value={back} className='btn' onClick={e => setdis(dis.slice(0, -1))} />
                        <input type="button" value={div} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v7} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v8} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v9} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={mul} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v4} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v5} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v6} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={sub} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v1} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v2} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v3} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={sum} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v00} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={v0} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={dot} className='btn' onClick={(e) => { setdis(dis + e.target.value) }} />
                        <input type="button" value={equal} className='btn' onClick={() => t()} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calc
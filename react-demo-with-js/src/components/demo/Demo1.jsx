import { useState } from 'react'
import style from './Demo1.module.css'

const Demo1 = () => {
    const product = [
        { id: 1, name: "Apple", price: 210 },
        { id: 2, name: "Banana", price: 90 },
        { id: 3, name: "Pomegranite", price: 170 },
        { id: 4, name: "Gauva", price: 130 },
    ]

    const [isShow, setIsShow] = useState(true);

    return (
        <>
            <h2>Hello, from Demo 1 component</h2>
            <hr />
            <div className={style.btnGroup}>
                <button className={style.btnsuccess} onClick={() => setIsShow(prev => !prev)}>
                    {isShow ? "Hide" : "Show"}
                </button>
            </div>
            {
                isShow ?
                    <div>
                        Hello, click on button to show/hide me.
                    </div>
                    : null
            }
            <hr />
        </>
    )
}

export default Demo1;
import { useState } from 'react'
import style from './Demo1.module.css'

const Demo1 = () => {
    const product = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Pomegranite" },
        { id: 4, name: "Gauva" },
    ]

    const [isShow, setIsShow] = useState(true);
    const [selectedValue, setSelectedValue] = useState(0);
    const [selectedFruit, setSelectedFruit] = useState("");

    const handleFruitChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
    }

    function SelectedFruit() {
        if(selectedValue) {
            console.log(selectedValue, product.find(x => x.id === Number(selectedValue)));
            setSelectedFruit(product.find(x => x.id === Number(selectedValue)).name);
        }
        console.log('fruits')
    }

    return (
        <>
            <h2>Hello, from Demo 1 component</h2>
            <hr />
            <div className={style.btnGroup}>
                <h2>Conditional operator</h2>
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
            <div className={style.btnGroup}>
                <h2 className={style.newline}>Button Click Event</h2>
                <select value={selectedValue} onChange={handleFruitChange}>
                    <option value="">--- select a option ---</option>
                    {
                        product.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
                <button className={style.btnfruit} onClick={SelectedFruit}>Get Fruid Name</button>
                <h3>Select Fruid Name: {selectedFruit}</h3>
            </div>
            <hr />
            <h2>Display Product List</h2>
            <div>
                <ul>
                    {
                        product.map((item) => (
                            <li key={item.id}>
                                <h3>{item.id}</h3>
                                <h3>{item.name}</h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Demo1;
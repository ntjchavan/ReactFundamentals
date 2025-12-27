import { useState } from 'react';
import style from './UserRegistrationForm.module.css'

export default function UserRegistrationForm() {
    const countryList = [
        { code: 'IN', name: 'India' },
        { code: 'USA', name: 'United States of America' },
        { code: 'JP', name: 'Japan' },
        { code: 'UK', name: 'United Kingdom' },
    ];

    const [registerForm, setRegisterForm] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        gender: 'male',
        country: '',
        skills: []
    });

    // for textbox, radio and dropdown
    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegisterForm({
            ...registerForm,
            [name]: value
        });
    }

    // for checkbox
    function handleSkillChange(e) {
        const { value, checked } = e.target;

        setRegisterForm((prev) => ({
            ...prev,
            skills: checked
                ? [...prev.skills, value]
                : prev.skills.filter((skill) => skill !== value)
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log('Form data: ', JSON.stringify(registerForm));
        handleClear();
    }

    function handleClear() {
        setRegisterForm({
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            gender: 'male',
            country: '',
            skills: []
        });
    }

    return (
        <>
            <div className={style.container}>
                <h3>User Registration Form</h3>
                <form onSubmit={handleSubmit}>
                    <div className={style.table}>
                        <div className={style.row}>
                            <div className={style.cells}>
                                <label htmlFor="firstname">First Name</label>
                                <input className={style.formControl} type="text" name="firstName"
                                    placeholder='Enter first name' value={registerForm.firstName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cells}>
                                <label htmlFor="lastname">Last Name</label>
                                <input className={style.formControl} type="text" name="lastName"
                                    placeholder='Enter last name' value={registerForm.lastName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cells}>
                                <label htmlFor="username">User Name</label>
                                <input className={style.formControl} type="text" name="userName"
                                    placeholder='Enter user name' value={registerForm.userName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cells}>
                                <label htmlFor="password">Password</label>
                                <input className={style.formControl} type="password" name="password"
                                    placeholder='Enter password' value={registerForm.password} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cells}>
                                <label>Gender</label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value='male'
                                        checked={registerForm.gender === 'male'}
                                        onChange={handleChange}
                                    />
                                    <span style={{ marginLeft: "10px" }}>
                                        Male
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value='female'
                                        checked={registerForm.gender === 'female'}
                                        onChange={handleChange}
                                    />
                                    <span style={{ marginLeft: "10px" }}>
                                        Female
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cells}>
                                <label>Skills</label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="angular"
                                        checked={registerForm.skills.includes('angular')}
                                        onChange={handleSkillChange}
                                    /> Angular2+
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="react"
                                        checked={registerForm.skills.includes('react')}
                                        onChange={handleSkillChange}
                                    /> React
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="vue"
                                        checked={registerForm.skills.includes('vue')}
                                        onChange={handleSkillChange}
                                    /> Vue JS
                                </label>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cells}>
                                <label htmlFor="country">Country</label>
                                <select className={style.formControl} name="country" value={registerForm.country} onChange={handleChange}>
                                    <option value="">--select country--</option>
                                    {
                                        countryList.map((item) => (
                                            <option key={item.code} value={item.code}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.cells}>
                                <div className={style.btngroups}>
                                    <button className={style.buttons} type="button" onClick={handleClear}>Clear</button>
                                    <button className={style.buttons} type="submit" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
import { useState } from "react";
import validation from "../Validation/Validation";
import  styles from "../Form/Form.module.css";
import error from "../Validation/Validation.css";



const Forms = ({login}) => {
        const [userData, setUserData] = useState({
            email: "",
            password: ""
        });

        const [errors, setErrors] = useState ({

        });

        const handleChange = (event) => {
            setErrors(validation({...userData, [event.target.name]: event.target.value}))
            setUserData({...userData, [event.target.name]: event.target.value,})
        };

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
};


    return (
        <div >
            
            <form className={styles.form}>
                <label1 htmlFor="email">Email:</label1>
                <input onChange={handleChange} value={userData.email}type="text" name="email" className={styles.input1} maxLength={33} placeholder="Ingrese email" />
                {errors.e1 ? <p>{errors.e1}</p> : errors.e2 ? <p>{errors.e2}</p> : <p>{errors.e3}</p>}
                
                <label1 htmlFor="password">Password:</label1>
                <input onChange={handleChange} value={userData.password}type="password" name="password" className={styles.input1}maxLength={20} minLength={6} placeholder="Ingrese contraseña"/>
                {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
                

                <button onClick={handleSubmit} type="submit">SUBMIT</button>
                
                
            </form>

        </div>
    )
};

export default Forms;
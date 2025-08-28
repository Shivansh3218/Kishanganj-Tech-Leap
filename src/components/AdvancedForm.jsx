import { useState } from 'react'
import Profile from './Profile';

function AdvancedForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [flag, setFlag] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFlag(true);
    }
    return (
        <div>

            <form action="">

                <label htmlFor="name">Enter Your Name</label>
                <input type="text" name='name' value={formData.name} onChange={handleChange} />

                <br />
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" name='email' value={formData.email} onChange={handleChange} />
                <br />

                <label htmlFor="age" >Enter your age</label>
                <input type="number" name='age' value={formData.age} onChange={handleChange} />
                <br />
                <button type='submit' onClick={handleSubmit}>Submit</button>

            </form>
            {
                flag ?
                    <Profile name={formData.name} email={formData.email} age={formData.age} />
                    :
                    <h3>Please fill the form to see the details</h3>
            }
           
        </div>
    )
}

export default AdvancedForm


import {useState} from "react";

export default function App() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "Amanda",
        lastName: "Rachel",
        phone: "(123) 456 7890",
        email: "myemail@gmail.com",
        linkedin: "https://www.linkedin.com/in/amandarmoral/",
        image: "/moi.jpg"
    });

    function handleChange(event) {
        let target = event && event.target;
        setPersonalInfo((prevInfo) => {
            return {
                ...prevInfo,
                [target.name]: target.value
            }
        });
    }
    
    return (
        <main>
            <article className="card">
                <img src={personalInfo.image} className="cardImg" />
                <div className="cardBody">
                    <h2 className="name">
                        {personalInfo.firstName + " " + personalInfo.lastName}
                    </h2>
                    <p className="contactInfo">{personalInfo.phone}</p>
                    <p className="contactInfo">{personalInfo.email}</p>
                </div>
                <div>
                    <a href={personalInfo.linkedin} className="fa fa-linkedin-square linkedInIcon" target="_blank"></a>
                </div>                
            </article>

            <section>
                <h2 className="hero">Feel free to input your personal information to update the card.</h2>
                <div>
                    <input type="text" className="userInput" name="firstName" placeholder="First Name" onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="userInput" name="lastName" placeholder="Last Name" onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="userInput" name="phone" placeholder="Phone Number" onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="userInput" name="email" placeholder="Email" onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="userInput" name="linkedin" placeholder="LinkedIn Url" onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="userInput" name="image" placeholder="Main Image Url" onChange={handleChange}/>
                </div>
            </section>
        </main>
    )
}

import React,{ useState }from 'react' ;
import { useHistory } from "react-router-dom";
import './Login.css' ;


function Login(){

  let history = useHistory();

   

  const [Username, setUsername] = useState('') ;
  const [Password, setPassword] = useState('') ;
  const[IsAdmin , setIsAdmin] = useState(false) ;


  let userdefault = 'pd@123' ; 
  let passworddefault = "pd@123"

function handleSubmit(e){

e.preventDefault();

if(Username==userdefault && Password==passworddefault){
 

history.push('/dashboard')
              
}else{
  alert('wrong username password')
}

}


    return (
      <section className="contact-section">
        <div className="contact-section-heading">
          {/* <h6 className="contact-heading">Contact Us</h6> */}
    <h6 className="contact-subheading">Login With your id Password.Default {userdefault , passworddefault}</h6>
        </div>

        <div className="contact-form-section">
          <div className="image-section">
            <img
              src="https://image.freepik.com/free-vector/new-gdpr-concept-with-flat-design_23-2147851568.jpg?1"
              alt="people-with-telephone"
              srcSet=""
            />
          </div>

          <div className="contact-form">
            <form className="form-contact-form" onSubmit={handleSubmit}>
            
              <label className="label">Username :</label>
              <input placeholder="example@id" className="form-control" type="text" onChange={(e)=>{setUsername(e.target.value)}} />
              <label className="label">Password</label>
              <input placeholder="***********" className="form-control" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
              <button className="submit-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
}



export default Login  ;
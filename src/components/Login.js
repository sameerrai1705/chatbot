import {useState} from 'react'
import { Form, Button, InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    

    const handleLogin = () => {
      const registeredUser = JSON.parse(localStorage.getItem("user"));
      if(registeredUser.email === email && registeredUser.password === password){
        window.location.href = "/chatbot";
      }
      else alert('Something is wrong');
    }

  return (
    <div
      className="container card"
      style={{
        margin: "auto",
        width: "380px",
        padding: "35px",
        marginTop: "65px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Form>
        <InputGroup className="mb-4">
          <InputGroup.Text id="basic-addon3">
            <span>
              <MdEmail></MdEmail>
            </span>
          </InputGroup.Text>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            aria-label="email"
            aria-describedby="basic-addon3"
          />
          <Form.Text className="text-muted">
              We'll never share your email with anyone else.
        </Form.Text>
        </InputGroup>

        <InputGroup className="mb-4">
          <InputGroup.Text id="basic-addon2">
            <span>
              <FaLock></FaLock>
            </span>
          </InputGroup.Text>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            aria-label="password"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Button variant="primary" onClick={handleLogin} className="mb-3"> Login </Button>

        <p style={{textAlign:'end'}}>
          Don't have a Account then 
          <LinkContainer to="/">
            <Link> sign Up</Link>
          </LinkContainer>
        </p>
      </Form>
    </div>
  )
}

export default Login;
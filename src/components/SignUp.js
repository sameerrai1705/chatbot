import {useState} from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";


const SignUp = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirm , setconfirm] = useState("");

    const handleSignUp = () => {
        if(confirm !== password){
            alert('Password do not match');
        }
        else{
            const user = { name , email , password };
            setName("");
            setEmail("");
            setPassword("");
            setconfirm("");
            localStorage.setItem("user" , JSON.stringify(user));
        }
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
          <InputGroup.Text id="basic-addon1">
            <span>
              <FaUser></FaUser>
            </span>
          </InputGroup.Text>

          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

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
            placeholder="Create password"
            aria-label="password"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-4">
          <InputGroup.Text id="basic-addon2">
            <span>
              <FaLock></FaLock>
            </span>
          </InputGroup.Text>
          <Form.Control
            value={confirm}
            onChange={(e) => setconfirm(e.target.value)}
            type="password"
            placeholder="Confirm password"
            aria-label="password"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Button onClick={handleSignUp} variant="primary" className="mb-3"> Create Account </Button>

        <p style={{textAlign:'end'}}>
          Already registered then 
          <LinkContainer to="/login">
            <Link> sign in</Link>
          </LinkContainer>
        </p>

      </Form>
    </div>
  );
};

export default SignUp;

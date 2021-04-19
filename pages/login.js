import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import styles from "@styles/Login.module.css";
import Link from "next/link";
import { useUser } from "../hooks/useUser";

const Login = ({ data }) => {
  const user = useUser();
  return (
    <div className={styles["log-in-container"]}>
      <Segment className={styles["log-in-box"]}>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" type="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Form.Field style={{ textAlign: "right" }}>
            <Link href="/signin">Create an account</Link>
          </Form.Field>
          <Button type="submit" fluid color="blue">
            Log In
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default Login;

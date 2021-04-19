import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import styles from "@styles/Login.module.css";
import Link from "next/link";
import { useUser } from "../hooks/useUser";
import { populateUser } from "../server/utils/populateUser";

const Login = ({ user }) => {
  console.log(user);
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

export const getServerSideProps = async (ctx) => {
  const { user } = await populateUser(ctx);
  if (user) {
    return {
      props: { user },
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {},
  };
};

export default Login;

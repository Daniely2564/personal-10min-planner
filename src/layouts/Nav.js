import React, { useState } from "react";
import { Input, Menu, Container } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const { pathname } = useRouter();
  const [activeItem, setActiveItem] = useState();
  return (
    <Menu secondary color="blue" inverted>
      <Container>
        <Link href="/">
          <Menu.Item name="home" active={activeItem === "/"} />
        </Link>
        <Menu.Item name="messages" active={activeItem === "messages"} />
        <Menu.Item name="friends" active={activeItem === "friends"} />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Link href="/login">
            <Menu.Item name="logout" active={activeItem === "logout"}>
              Log In
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Nav;

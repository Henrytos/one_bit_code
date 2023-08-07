import Avatar from "./components/Avatar";
import Title from "./components/Title";
import Description from "./components/Description";
import Button from "./components/Button";
import Card from "./components/Card";
import Links from "./components/Links";

import styles from "./global.module.css";
import { useState } from "react";

export default function Profile({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  const [followText, setFollowText] = useState("follow");
  function follow() {
    setFollowText("Following");
  }
  return (
    <Card className={styles.container}>
      <Avatar src={avatar} alt={name} />
      <Title>
        <span>{name}</span>
        <button onClick={follow} className={styles.view}>
          {followText}
        </button>
      </Title>
      <hr />
      <Description>{bio}</Description>
      <hr />
      <Description>{email}</Description>

      <hr />
      <Description>{phone}</Description>
      <hr />
      <Links
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <Button href={githubUrl}>Git hub</Button>
        <Button href={linkedinUrl}>Linkedin</Button>
        <Button href={twitterUrl}>Twitter</Button>
      </Links>
    </Card>
  );
}

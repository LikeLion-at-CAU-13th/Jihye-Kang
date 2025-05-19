import React from "react";
import "./ContactPage.css";
import githubLogo from "../../assets/GithubLogo.jpeg";
import velogLogo from "../../assets/VelogLogo.png";

function ContactPage() {
  return (
    <main>
      <h2>Hit me up! 💬</h2>
      <article>
        <a href="https://github.com/Jihaeee">
          <img src={githubLogo} alt="github_logo" />
        </a>
        <a href="https://velog.io/@jihaeee/posts">
          <img src={velogLogo} alt="velog_logo" />
        </a>
      </article>
    </main>
  );
}

export default ContactPage;
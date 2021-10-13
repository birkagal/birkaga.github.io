import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInUpBig } from "react-animations";
import { AppContext } from "../hooks/AppContext";
import { Github, Linkedin, Email, Resume } from "./../icons";
/* Buttons component. Github, Linkedin and main buttons are shown with some animation. */

const fadeInUpAnimation = keyframes`${fadeInUpBig}`;

const FadeInUpDiv = styled.div`
  animation: 2s ${fadeInUpAnimation};
`;

const Container = styled.div`
  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .button-container {
    display: inline-block;
    height: 6rem;
    width: 6rem;
    margin: 0 1.75rem;
  }

  .button {
    transition: color 0.5s linear;
    height: 6rem;
    width: 6rem;
    color: ${({ theme }) => theme.primaryTextColor};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 25%;
  }

  .icon {
    height: 4.5rem;
    width: 4.5rem;
    padding: 1rem;
  }

  .icon_title {
    font-size: 1.25rem;
  }

  .button:hover {
    background-color: ${({ theme }) => theme.shadowColor};
    box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);
  }

  .button:active {
    transform: scale(0.9);
  }

  .button-container .icon_title {
    display: none;
  }

  .button-container:hover .icon_title {
    display: initial;
  }

  .button-container:hover .icon {
    display: none;
  }

  @media only screen and (max-device-width: 820px) {
    .button-container {
      height: 5rem;
      width: 5rem;
      margin: 0 0.8rem;
    }

    .button {
      height: 5rem;
      width: 5rem;
    }

    .icon {
      height: 4rem;
      width: 4rem;
      padding: 0.5rem;
    }

    .icon_title {
      font-size: 1rem;
    }
  }
`;

const Buttons = () => {
  const { theme } = useContext(AppContext);

  const DATA = [
    {
      href: "https://github.com/birkagal/",
      aria: "Visit my Github profile",
      icon: <Github />,
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/birkagal/",
      aria: "Visit my Linkedin profile",
      icon: <Linkedin />,
      label: "Linkedin",
    },
    {
      href: "https://drive.google.com/file/d/1tb2hTQ1y5oH6cMHSnkM6jDVlbXtThnth/",
      aria: "Visit Google Drive to view and download my resume",
      icon: <Resume />,
      label: "Resume",
    },
    {
      href: "mailto:birkagal@gmail.com",
      aria: "Send me an email",
      icon: <Email />,
      label: "Email",
    },
  ];

  return (
    <Container theme={theme}>
      {DATA.map(({ href, aria, icon, label }, i) => (
        <span className="button-container" key={i}>
          <a
            className="button"
            href={href}
            target="_blank"
            aria-label={aria}
            rel="noopener noreferrer"
          >
            <FadeInUpDiv>
              <div className="icon">{icon}</div>
              <span className="icon_title">{label}</span>
            </FadeInUpDiv>
          </a>
        </span>
      ))}
    </Container>
  );
};

export default Buttons;

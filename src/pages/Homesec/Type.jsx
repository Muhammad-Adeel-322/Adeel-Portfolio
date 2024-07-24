import React from 'react'
import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <Typewriter
          options={{
            strings: [
              "Front-End Developer",
              "Freelancer",
              "React Developer",
              "Open Source Contributor",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      );
    };

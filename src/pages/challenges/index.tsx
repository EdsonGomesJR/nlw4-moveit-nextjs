import { CompletedChallenges } from "../../components/CompletedChallenges";
import { CountDown } from "../../components/CountDown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import Head from "next/head";
import { useRouter } from "next/router";

import { GetServerSideProps } from "next";
import styles from "../../styles/pages/Challenges.module.css";
import { ChallengeBox } from "../../components/ChallengeBox";
import { CountDownProvider } from "../../contexts/CountDownContext";
import { ChallengesProvider } from "../../contexts/ChallengesContext";
import React from "react";
import { SideBar } from "../../components/SideBar";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function ChallengesPage(props: HomeProps) {
  console.log(props);
  const router = useRouter();

  function handleChangePage(event) {
    event.preventDefault();
    router.push("/challenges");
  }

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <SideBar challengeActivePage />
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
          <Profile />
          <CompletedChallenges />
          <section>
            <div>
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

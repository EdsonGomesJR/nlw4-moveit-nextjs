import React, { useState } from "react";
import { Router, useRouter } from "next/router";
import { FiHome, FiArrowLeft, FiAward } from "react-icons/fi";

import { AppSideBar, MidIcons, NavButtons } from "./styles";

interface SideBarProps {
  challengeActivePage?: boolean;
  leaderBoardActivePage?: boolean;
}
export function SideBar({
  challengeActivePage,
  leaderBoardActivePage,
}: SideBarProps) {
  const routes = useRouter();

  function handleNavigateToChallenges(event) {
    routes.push("/challenges");
  }
  function handleNavigateToLeaderBoardPage(event) {
    routes.push("/leaderboard");

    // setActiveChallengesPage(false);
    //
    //
    //
  }
  return (
    <AppSideBar>
      <img src="/favicon.png" alt="moveit" />

      <MidIcons>
        <NavButtons
          isChallengePage={challengeActivePage}
          onClick={handleNavigateToChallenges}
          type="button"
        >
          <FiHome />
        </NavButtons>
        <NavButtons
          type="button"
          onClick={handleNavigateToLeaderBoardPage}
          isLeaderBordPage={leaderBoardActivePage}
        >
          <FiAward />
        </NavButtons>
      </MidIcons>

      <footer>
        <div />
      </footer>
    </AppSideBar>
  );
}

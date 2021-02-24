import GlobalStyle from "../styles/global";
import { AppProps } from "next/app";
import { ChallengesProvider } from "../contexts/ChallengesContext";
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChallengesProvider>
  );
};

export default MyApp;


import GlobalStyle from '../styles/global';
import { AppProps } from 'next/app';

const MyApp : React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
   <> 
    <Component {...pageProps}/>
    <GlobalStyle />
   </>
    
  );
  
}

export default MyApp

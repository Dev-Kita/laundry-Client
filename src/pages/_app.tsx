import ClientTemplate from '@/templates/ClientTemplate';
import { MyAppProps } from '@types';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const Layout = Component.layout ?? ClientTemplate;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

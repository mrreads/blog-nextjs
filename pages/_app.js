import Layout from './../layouts';

import '../styles/ck-content.css';
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return <Layout> <Component {...pageProps} /> </Layout>
}

export default App;

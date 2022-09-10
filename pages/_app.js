import Layout from './../layouts';

import '/utils/prism.css';
import '/styles/ck-content.css';
import '/styles/wysiwyg.css';
import '/styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return <Layout> <Component {...pageProps} /> </Layout>
}

export default App;

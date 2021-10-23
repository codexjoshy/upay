
import './assets/css/style.css';
import './assets/css/vendors_css.css';
import './assets/css/skin_color.css';
import Header from './components/common/header';
import LeftSideBar from './components/common/sidebar';
import  { Toaster } from 'react-hot-toast';
function App({ children }) {
  return (
    <>
      <Toaster

      />
    <div
      className="light-skin sidebar-mini theme-primary sidebar-collapse"
      // className="hold-transition light-skin sidebar-mini theme-primary sidebar-collapse sidebar-open"
      style={{ height: 'auto', minHeight: '100%' }}
    >
      <div className="wrapper">
        <LeftSideBar />
        <Header />
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
    </>
  );
}

export default App;

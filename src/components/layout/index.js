import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      {'FOOTER'}
    </div>
  );
}

export default Layout;
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Header/Banner/Banner';
import AddPackage from './components/AddPackage/AddPackage';
import AllPackages from './components/AllPackages/AllPackages';
import Login from './components/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PackDetails from './components/PackDetails/PackDetails';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
import MyOrders from './components/MyOrders/MyOrders';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Collage from './components/Collage/Collage';
import Video from './components/Video/Video';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Banner></Banner>
          <Collage></Collage>
          <AllPackages></AllPackages>
          <Video></Video>
          </Route>
          <PrivateRoute path="/addPackage">
            <AddPackage></AddPackage>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/pack/:id">
            <PackDetails></PackDetails>
          </PrivateRoute>
          <Route path="/manageOrders">
            <Admin></Admin>
          </Route>
          <Route path="/myBookings">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/myBookings">
            <MyOrders></MyOrders>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";


/****site route*****/
import Header from "./layout/header";
import Footer from "./layout/footer";
//  Home page
const Home = lazy(() => import("./pages/Home"));
const TigerFarms = lazy(() => import("./pages/TigerFarms"));
const Scrub = lazy(() => import("./pages/Scrub"));
const DummyText = lazy(() => import("./pages/DummyText"));
const Bonds = lazy(() => import("./pages/Bonds"));
const TigerStaking = lazy(() => import("./pages/TigerStaking"));
const BearSale = lazy(() => import("./pages/BearSale"));

const loader = (
  <div style={{
    width: '100vw',
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <div className="reverse-spinner" />
  </div>
);

const AppRouter = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Suspense fallback={loader}>
           <Route exact path="/" component={Home} />
        <Route exact path="/tiger-farms" component={TigerFarms} />
        <Route exact path="/scrub" component={Scrub} />
        <Route exact path="/dummy" component={DummyText} />
        <Route exact path="/bonds" component={Bonds} />
        <Route exact path="/tiger-staking" component={TigerStaking} />
        <Route exact path="/bear-sale" component={BearSale} />
        </Suspense>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;

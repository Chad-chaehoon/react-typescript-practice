import * as React from "react";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
const AdminPage = React.lazy(() => import("./AdminPage"));

const RoutesWrap: React.SFC = () => {
  // 상위 컴포넌트에서 history나 다른게 {} 라서 에러난다 할때 withRoute을 해야 하는데
  // 이건 Router 밖을 벗어나게 되서 새로 하나 만들어서 props를 empty로 받고 그냥 감싸서
  // 넘겨주면 에러 사라짐 (100%로 이해는 못했음)
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

const Routes: React.SFC<RouteComponentProps> = props => {
  const [loggedIn] = React.useState(true);
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact={true} from="/" to="/products" />
            <Route exact={true} path="/products" component={ProductsPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/admin">
              {loggedIn ? (
                <Suspense
                  fallback={<div className="page-container">Loading...</div>}
                >
                  <AdminPage />
                </Suspense>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default RoutesWrap;

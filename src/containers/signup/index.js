import React, { useEffect, useMemo, useState } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { SignupForm, SignupInformation } from "../../components";

function SignupPage() {
  let match = useRouteMatch();
  let history = useHistory();

  const [journey, setJourney] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [err, setErr] = useState(null);

  const routeToAppropriatePageIndex = () => {
    return pageIndex === 0
      ? null
      : history.push(`${match.path}/${journey[pageIndex].section}`);
  };
  useEffect(() => {
    routeToAppropriatePageIndex();
  }, [journey, pageIndex]);

  const fetchSignupJourney = async () => {
    try {
      const res = await fetch("http://localhost:3001/journey");
      const json = await res.json();
      setJourney(json);
    } catch (error) {
      setErr(error);
    }
  };

  const resetCacheToEmpty = () => {
    return sessionStorage.setItem("signupForm", JSON.stringify({}));
  };
  const handleSubmitContainer = (page, values) => {
    let signupFormBefore = JSON.parse(sessionStorage.getItem("signupForm"));
    let signupFormAfter = {
      ...signupFormBefore,
      [page]: values,
    };
    sessionStorage.setItem("signupForm", JSON.stringify(signupFormAfter));

    if (pageIndex === 3) {
      setPageIndex(4);
      return history.push("/signup/confirmation");
    } else {
      setPageIndex(pageIndex + 1);
    }
  };

  const handleStartSignup = () => {
    history.push("/signup/personal");
  };

  const memoSignupInformation = useMemo(() => {
    return (
      <SignupInformation
        heading="Welcome to Signup"
        buttonText="Get Started!"
        handleSubmit={handleStartSignup}
      />
    );
  });

  const memoSignupConfirmation = useMemo(() => {
    return (
      <SignupInformation
        heading={journey && journey[pageIndex].heading}
        subheading={
          journey && journey[pageIndex].subheading
            ? journey[pageIndex].subheading
            : ""
        }
        buttonText="Login?"
        handleSubmit={() => null}
      />
    );
  });

  const memoSignupForm = useMemo(() => {
    return (
      <SignupForm
        heading={journey && journey[pageIndex].heading}
        questions={journey && journey[pageIndex].questions}
        handleSubmitContainer={handleSubmitContainer}
      />
    );
  });

  useEffect(() => {
    resetCacheToEmpty();
    fetchSignupJourney();
  }, []);

  if (!journey) return <h1>Loading...</h1>;
  if (err) return <p>api error</p>;

  return (
    <div className="App w-40 h-100 flex-center flex-col">
      <h1>Signup For Da Best Dealz, Fam!</h1>
      <Switch>
        <Route exact path={`${match.path}/confirmation`}>
          {memoSignupConfirmation}
        </Route>
        <Route path={`${match.path}/:section`}>{memoSignupForm}</Route>
        <Route path={`${match.path}`}>{memoSignupInformation}</Route>
        <Route path={match.path}>
          <h3>Any other signup component here</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default SignupPage;

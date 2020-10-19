import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { SignupForm } from "../../components";

function SignupPage() {
  let match = useRouteMatch();

  const [journey, setJourney] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [err, setErr] = useState(null);

  const fetchSignupJourney = async () => {
    try {
      const res = await fetch("http://localhost:3001/journey");
      const json = await res.json();
      setJourney(json);
    } catch (error) {
      setErr(error);
    }
  };

  const handleSubmitContainer = (page, values) => {
    console.log("page ", page);
    console.log("values ", values);
    pageIndex < 3 ? setPageIndex(pageIndex + 1) : setPageIndex(3);
  };

  useEffect(() => {
    fetchSignupJourney();
  }, []);

  if (!journey) return <h1>Loading...</h1>;
  if (err) return <p>api error</p>;

  console.log("match", match);

  return (
    <div className="App h-100 flex-center flex-col">
      <h1>Signup for the best dealz!</h1>
      <Switch>
        <Route path={`${match.path}/:section`}>
          <SignupForm
            heading={journey[pageIndex].heading}
            questions={journey[pageIndex].questions}
            handleSubmit={handleSubmitContainer}
          />
        </Route>
        <Route path={match.path}>
          <h3>other signup component here</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default SignupPage;

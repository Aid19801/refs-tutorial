import React, {useState, useEffect} from 'react';
import SignupForm from './SignupForm';

const differentFormNames = ["user_info", "address_details", "terms_conditions"];

function App() {

  const [ allSignupFormData, updateAllSignupFormData ] = useState({});
  const [ currentFormName, setCurrentFormName ] = useState("");

  useEffect(() => {
    setCurrentFormName(differentFormNames[0]);
  }, [])

  const handleSubmit = (obj) => {

    updateAllSignupFormData({
      ...allSignupFormData,
      [currentFormName]: obj
    });
    const indexOfNextPage = Object.keys(allSignupFormData).length + 1;
    setCurrentFormName(differentFormNames[indexOfNextPage]);
  }

  return (
    <div className="App h-100 flex-center">
      <SignupForm formName={currentFormName} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;

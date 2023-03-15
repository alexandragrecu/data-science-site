export const login = async (params) => {
  let encodedParams = helpers.encryptParams(params);

  let response;
  try {
    response = await axios.get(`${ApiBasePath}/users/login`, {
      params: encodedParams,
    });
  } catch (error) {
    response = error;
    console.log(response);
  }

  return response;
};


const Offer = () => {

    return (
        <React.Fragment>
            <button></button>
        </React.Fragment>
    )


}

export default App;


import React, {createContext, useState} from 'react';
const UserContext = createContext();

function AppProvider({children}) {
    const [user, setUser] = useState({});

    const store = {user, setUser};

    return (
        <UserContext.Provide value={store}>
            {children}
        </UserContext.Provide>
    )
}

export {UserContext};
export default AppProvider;
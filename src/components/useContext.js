import { createContext, useState, useContext, useMemo } from 'react';

const UserContext = createContext({
  userName: '',
  setUserName: () => {},
});

function UserInfo() {
    const { userName } = useContext(UserContext);
    return <span>{userName}</span>;
  }

export function Application() {
  const [userName, setUserName] = useState('John Smith');
  const value = useMemo(
    () => ({ userName, setUserName }), 
    [userName]
  );
  
  return (
    <UserContext.Provider value={value}>
      {useMemo(() => (
        <>
          <UserNameInput />
          <UserInfo />
        </>
      ), [])}
    </UserContext.Provider>
  );
}

function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = event => setUserName(event.target.value);

  return (
    <input
      type="text"
      value={userName}
      onChange={changeHandler}
    />
  );
}


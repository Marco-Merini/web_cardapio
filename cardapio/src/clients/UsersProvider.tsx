import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, set, update, remove, push } from 'firebase/database';

export interface User {
  userId: string;
  email: string;
  name: string;
  password: string;
  isAdmin: boolean;
}

interface UsersState {
  allUsers: User[];
}

interface UsersContextProps extends UsersState {
  addUser: (user: User) => void;
  updateUser: (userId: string, userData: User) => void;
  removeUser: (userId: string) => void;
}

export const UsersContext = React.createContext<UsersContextProps>({} as UsersContextProps);

const UsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<UsersState>({
    allUsers: [],
  });

  const db = getDatabase();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData: User[] = [];
      const usersRef = ref(db, 'usersAdmin');

      await get(usersRef).then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const user = {
              userId: childSnapshot.key as string,
              ...childSnapshot.val()
            } as User;
            usersData.push(user);
          });
        }
      });

      setState({ allUsers: usersData });
    };

    fetchUsers();
  }, [db]);

  const addUser = (user: User) => {
    const usersRef = ref(db, 'usersAdmin');
    const newUserRef = push(usersRef);
    set(newUserRef, {
      email: user.email,
      name: user.name,
      password: user.password,
      isAdmin: user.isAdmin
    })
      .then(() => {
        console.log(`${user.name} added successfully`);
        setState((prevState) => ({
          allUsers: [...prevState.allUsers, { ...user, userId: newUserRef.key as string }],
        }));
      })
      .catch((error) => {
        console.error(`Error adding ${user.name}:`, error);
      });
  };

  const updateUser = (userId: string, userData: User) => {
    const userRef = ref(db, `usersAdmin/${userId}`);
    update(userRef, {
      email: userData.email,
      name: userData.name,
      password: userData.password,
      isAdmin: userData.isAdmin
    })
      .then(() => {
        console.log(`${userData.name} updated successfully`);
        setState((prevState) => ({
          allUsers: prevState.allUsers.map((user) =>
            user.userId === userId ? { ...userData, userId } : user
          ),
        }));
      })
      .catch((error) => {
        console.error(`Error updating ${userData.name}:`, error);
      });
  };

  const removeUser = (userId: string) => {
    const userRef = ref(db, `usersAdmin/${userId}`);
    remove(userRef)
      .then(() => {
        console.log(`User with ID ${userId} removed successfully`);
        setState((prevState) => ({
          allUsers: prevState.allUsers.filter((user) => user.userId !== userId),
        }));
      })
      .catch((error) => {
        console.error(`Error removing user with ID ${userId}:`, error);
      });
  };

  return (
    <UsersContext.Provider
      value={{
        allUsers: state.allUsers,
        addUser,
        updateUser,
        removeUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

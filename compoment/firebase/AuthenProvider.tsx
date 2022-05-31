import auth from '@react-native-firebase/auth';
import React, {createContext, useState} from 'react';

export const AuthContext: any = createContext(null);

export const AuthenProvider = ({children}: any) => {
  const [user, setUser]: any = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: any, password: any) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email: any, password: any) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

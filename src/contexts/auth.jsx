import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    const usersStorage = localStorage.getItem('users_db');

    if (userToken && usersStorage) {
      const userEmail = JSON.parse(userToken)?.email;
      const hasUser = JSON.parse(usersStorage)?.find(
        (user) => user.email === userEmail,
      );
      if (hasUser) setUser(hasUser);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db'));

    const hasUser = usersStorage?.find((user) => user.email === email);

    if (hasUser) {
      if (hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('user_token', JSON.stringify({ email, token }));
        setUser(hasUser);
        return;
      } else {
        return 'E-mail ou senha incorretos';
      }
    } else {
      return 'Usuário não cadastrado';
    }
  };

  const signup = (name, email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];

    const hasUser = usersStorage.find((user) => user.email === email);

    if (hasUser) {
      return 'Já existe uma conta com esse e-mail';
    }

    const newUser = [...usersStorage, { name, email, password }];
    localStorage.setItem('users_db', JSON.stringify(newUser));
    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('user_token');
  };

  const updateName = (newName) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userToken = JSON.parse(localStorage.getItem('user_token'));

    if (!userToken) return;

    const updatedUsers = usersStorage.map((u) => {
      if (u.email === userToken.email) {
        return { ...u, name: newName };
      }
      return u;
    });

    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    const updatedUser = updatedUsers.find((u) => u.email === userToken.email);
    setUser(updatedUser);
  };

  const updateSurname = (newSurname) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userToken = JSON.parse(localStorage.getItem('user_token'));

    if (!userToken) return;

    const updatedUsers = usersStorage.map((u) => {
      if (u.email === userToken.email) {
        return { ...u, surname: newSurname };
      }
      return u;
    });

    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    const updatedUser = updatedUsers.find((u) => u.email === userToken.email);
    setUser(updatedUser);
  };

  const toggleWishlistItem = (productId) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userToken = JSON.parse(localStorage.getItem('user_token'));

    if (!userToken) return;

    const updatedUsers = usersStorage.map((u) => {
      if (u.email === userToken.email) {
        const wishlist = u.wishlist || [];
        const isInWishlist = wishlist.includes(productId);
        const updatedWishlist = isInWishlist
          ? wishlist.filter((id) => id !== productId)
          : [...wishlist, productId];

        return { ...u, wishlist: updatedWishlist };
      }
      return u;
    });

    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    const updatedUser = updatedUsers.find((u) => u.email === userToken.email);
    setUser(updatedUser);
  };

  const isInWishlist = (productId) => {
    return user?.wishlist?.includes(productId);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signin,
        signup,
        signout,
        updateSurname,
        updateName,
        toggleWishlistItem,
        isInWishlist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

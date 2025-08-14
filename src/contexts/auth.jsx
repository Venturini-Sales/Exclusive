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

  const quickLogin = () => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];

    const email = 'teste@teste.com';
    const password = 'teste';
    const name = 'teste';
    const surname = 'teste';

    let hasUser = usersStorage.find((user) => user.email === email);

    if (!hasUser) {
      hasUser = { name, surname, email, password };
      usersStorage.push(hasUser);
      localStorage.setItem('users_db', JSON.stringify(usersStorage));
    }

    const token = Math.random().toString(36).substring(2);
    localStorage.setItem('user_token', JSON.stringify({ email, token }));
    setUser(hasUser);
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

  const addToCart = (product, quantity = 1) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userToken = JSON.parse(localStorage.getItem('user_token'));

    if (!userToken) return;

    const updatedUsers = usersStorage.map((u) => {
      if (u.email === userToken.email) {
        const cart = u.cart || [];
        const existingItem = cart.find((item) => item.id === product.id);

        let updatedCart;
        if (existingItem) {
          updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        } else {
          updatedCart = [...cart, { ...product, quantity }];
        }

        return { ...u, cart: updatedCart };
      }
      return u;
    });

    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    const updatedUser = updatedUsers.find((u) => u.email === userToken.email);
    setUser(updatedUser);
  };

  const removeFromCart = (productId) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userToken = JSON.parse(localStorage.getItem('user_token'));

    if (!userToken) return;

    const updatedUsers = usersStorage.map((u) => {
      if (u.email === userToken.email) {
        const updatedCart = (u.cart || []).filter(
          (item) => item.id !== productId,
        );
        return { ...u, cart: updatedCart };
      }
      return u;
    });

    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    const updatedUser = updatedUsers.find((u) => u.email === userToken.email);
    setUser(updatedUser);
  };

  const clearCart = () => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userToken = JSON.parse(localStorage.getItem('user_token'));
    if (!userToken) return;

    const updatedUsers = usersStorage.map((u) =>
      u.email === userToken.email ? { ...u, cart: [] } : u,
    );

    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    const updatedUser = updatedUsers.find((u) => u.email === userToken.email);
    setUser(updatedUser);
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userToken = JSON.parse(localStorage.getItem('user_token'));

    if (!userToken) return;

    const updatedUsers = usersStorage.map((u) => {
      if (u.email === userToken.email) {
        const updatedCart = (u.cart || []).map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        );
        return { ...u, cart: updatedCart };
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
        quickLogin,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

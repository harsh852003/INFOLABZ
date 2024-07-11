
// Login component (default export)
export const Login = () => {
  return <button>Login</button>;
};


// Logout component (exported)
export const Logout = () => {
  return <button>Logout</button>;
};

// Addtocart component (exported)
export const Addtocart = () => {
  return <button>Add to Cart</button>;
};

// All component (exported) combining Login, Logout, Addtocart
export const All = () => {
  return (
    <div>
      <Login />
      <Logout />
      <Addtocart />
    </div>
  );
};

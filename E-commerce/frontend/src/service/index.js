export const postSignUp = async (username, email, password) => {
  const serverResponse = await fetch(
    "http://localhost:3000/auth/registration",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const postLogin = async (email, password) => {
  const serverResponse = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getCurrentUser = async () => {
  const serverResponse = await fetch("http://localhost:3000/getCurrentUser", {
    method: "GET",
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getLogout = async () => {
  const serverResponse = await fetch("http://localhost:3000/auth/logout", {
    method: "GET",
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getProductFromServer = async () => {
  const serverResponse = await fetch("http://localhost:3000/admin/getProduct", {
    method: "GET",
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getOneProduct = async (productId) => {
  const serverResponse = await fetch(
    `http://localhost:3000/admin/getOneProduct/${productId}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const addProductInCart = async (productId, size) => {
  const serverResponse = await fetch(`http://localhost:3000/addProductInCart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, size }),
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getProductFromCart = async () => {
  const serverResponse = await fetch(
    `http://localhost:3000/getProductFromCart`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const updateCart = async (productId, task) => {
  const serverResponse = await fetch(
    `http://localhost:3000/updateCart/${productId}/${task}`,
    {
      method: "PUT",
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const removeProductFromCart = async (productId) => {
  const serverResponse = await fetch(
    `http://localhost:3000/removeProductFromCart/${productId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const placeOrder = async (userData, productData) => {
  // console.log("calling index: ", userData, productData);
  const serverResponse = await fetch(`http://localhost:3000/place-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userData, productData }),
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getOrderDetail = async () => {
  const serverResponse = await fetch(`http://localhost:3000/getOrderDetail`, {
    method: "GET",
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const cancelOrder = async (orderId) => {
  const serverResponse = await fetch(
    `http://localhost:3000/cancelOrder/${orderId}`,
    {
      method: "PUT",
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getInitialAddress = async () => {
  const serverResponse = await fetch(`http://localhost:3000/gettingAddress`, {
    method: "GET",
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

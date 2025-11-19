export const postLogin = async (email, password) => {
  const serverResponse = await fetch("http://localhost:3000/auth/admin/login", {
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

export const getCurrentAdmin = async () => {
  const serverResponse = await fetch("http://localhost:3000/getCurrentAdmin", {
    method: "GET",
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const adminLogout = async () => {
  const serverResponse = await fetch("http://localhost:3000/auth/logout", {
    method: "GET",
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const addProduct = async (formData) => {
  const serverResponse = await fetch("http://localhost:3000/admin/addProduct", {
    method: "POST",

    body: formData,
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getProduct = async () => {
  const serverResponse = await fetch("http://localhost:3000/admin/getProduct", {
    method: "GET",
    credentials: "include",
  });
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const deleteProduct = async (productId) => {
  const serverResponse = await fetch(
    `http://localhost:3000/admin/deleteProduct/${productId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const getOrderDetail = async () => {
  const serverResponse = await fetch(
    "http://localhost:3000/admin/getOrderDetail",
    {
      method: "GET",
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

export const updateOrderDetail = async (productId, status) => {
  const serverResponse = await fetch(
    `http://localhost:3000/admin/updateOrderDetail/${productId}/${status}`,
    {
      method: "PUT",
      credentials: "include",
    }
  );
  const actualResponse = await serverResponse.json();
  return actualResponse;
};

// add user to the database
export const registerUser = async (userDataObj) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(userDataObj),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch('url', requestOptions);
    if (!response.ok) {
      throw new Error('Could not register the user with username: ' + userDataObj.email);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

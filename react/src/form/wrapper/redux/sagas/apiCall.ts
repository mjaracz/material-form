export const getSignUp = async (signal: AbortSignal) =>
  fetch('http://localhost:8080/sign-up',
    {
      method: 'GET',
      signal
    }
  ).then(res => res.json())
import axios from 'axios';

import React, { useState } from 'react';

// custom hook to send get Request to an api
// input - { url, pageNo }
// output - returns response object
const useRequest = ({ url, pageNo }) => {
  const [response, setResponse] = useState(null);

  const doRequest = async () => {
    const response = await axios.get(`${url}&page=${pageNo}`);

    return response.data;
    // setResponse(response);
  };

  return { response, doRequest };
};

export default useRequest;

import { useState, useEffect } from "react";
import jsonPlaceholder from "../apis/jsonPlaceholder";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await jsonPlaceholder.get(`/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  return resources;
};

export default useResources;

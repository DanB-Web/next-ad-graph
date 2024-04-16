const GRAPH_ENDPOINT = "https://graph.microsoft.com/v1.0/me";

const accessGraphApi = async (accessToken) => {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;
  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  let graphData = null;

  try {
    const res = await fetch(GRAPH_ENDPOINT, options);
    graphData = await res.json();
  } catch (error) {
    console.error(error);
  }

  return graphData;
};

export default accessGraphApi;

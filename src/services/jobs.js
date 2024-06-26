const getJobs = ({ limit, offset }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit,
    offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const result = fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .then((res) => res.jdList);

  return result;
};

export default { getJobs };

import sendRedirect from "../helpers/sendRedirect";

async function get(id) {
  try {
    const endpoint = id ? `favorites/${id}` : `favorites`;

    const answer = await sendRedirect(endpoint);
    if (answer.status === 200) {
      return answer?.data || false;
    }
    return false;
  } catch (AxiosError) {
    console.log(AxiosError);
  }
}


async function post(data) {
  try {
    const method = "POST";
    const endpoint = `favorites`;

    return await sendRedirect(endpoint, data, method);
  } catch (AxiosError) {
    console.log(AxiosError);
  }
}

export { get, post };

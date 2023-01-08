import axios from "axios";
import { apiURL } from "constants/apiURL";

const getListingData = async (id: string) => {
  try {
    const resp = await axios.get(`${apiURL}/listings?id=${id}`);
    const listing = resp.data;
    return {
      id,
      listing,
    };
  } catch (error) {
    return error;
  }
};

export default getListingData;

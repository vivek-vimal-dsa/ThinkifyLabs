import { commonAxios } from "../Common";

export const AxiosGet = async (props) => {
  const { endPoint } = props;
  try {
    const res = await commonAxios({
      method: "GET",
      url: endPoint,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

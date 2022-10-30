import axios from 'axios';


export const postDataForm = {
  post: async function (url: string, data: any) {
    const res = await axios.post(url, data);
    console.log(res.data);
    return res.data;
  },
  test: (data: any) => console.log(data),
};

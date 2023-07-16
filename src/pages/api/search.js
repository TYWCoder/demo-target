import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { keyword } = JSON.parse(req.body);

  if (keyword) {
    try {
      const targetAPI = `${
        process.env.TARGET_SEARCH_URL
      }&keyword=${encodeURIComponent(keyword)}&page=%2Fs%2F${encodeURIComponent(
        keyword,
      )}`;

      const result = await fetch(targetAPI);
      const data = await result.json();

      res
        .status(200)
        .json({
          success: true,
          products: data?.data?.search?.products ?? [],
          msg: '',
        });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ success: false, products: null, msg: 'Search failed' });
    }
  } else {
    res.status(400).json({ success: false, products: null, msg: 'No keyword' });
  }
}


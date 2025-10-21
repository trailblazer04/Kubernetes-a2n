// A2N/nextjs-add2num/pages/api/api.js

export default function handler(req, res) {
    if (req.method === "POST") {
      const { num1, num2 } = req.body;
      const sum = num1 + num2;
      return res.status(200).json({ sum });
    } else {
      res.status(405).json({ message: "Only POST method allowed" });
    }
  }

  
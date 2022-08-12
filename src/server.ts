import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

const port = process.env.PORT || 3003;

app.use(cors({credentials: true, origin: (_origin, callback) => {
  return callback(null, true);
}}));

app.use(cookieParser());

app.get('/', (req, res) => {
  const cookies = req.headers.cookie;

  console.log(cookies)

  if(!cookies) {
    return res.json({ success: false });
  }

  const parsedCookies = cookies.split('; ');
  let cookiesObject = {};

  parsedCookies.forEach(cookie => {
    const [key, value] = cookie.split('=');
    cookiesObject = { ...cookiesObject, [key]: value };
  });

  return res.json(cookiesObject);
});

app.listen(port, () => console.log(`Server started on port ${port}`));

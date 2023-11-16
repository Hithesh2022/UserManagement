// File: server.js
import express from 'express';
import cors from 'cors';
import router from './Router/router.js';



const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/auth', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

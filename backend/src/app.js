import express from 'express';
import session from 'express-session';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

import connectDB from './config/db';
import initializePassport from './config/passport';

import authRouter from './routes/auth';

// connect to mongo db
connectDB();

// cors middleware
app.use(
  cors({
    origin: '*', // todo allow only frontend origin
    credentials: true,
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  })
);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    },
  })
);

// initialize passport for authentication and authorization
initializePassport(app);

app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('work in progress');
});

app.listen(port, () => {
  console.log(`server up on running on port ${port}`);
});

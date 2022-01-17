import passportLocal from 'passport-local';
import passport from 'passport';
import User from '../models/user';
import bcrypt from 'bcrypt';


const LocalStrategy = passportLocal.Strategy;

const getUserById = async (id) => {
  const user = await User.findOne({
    id: id,
  });

  return user;
};

const authenticateUser = async (email, password, done) => {
  console.log('authenticate user');
  const user = await getUserById(email);

  if (user == null) {
    return done(null, false, { message: 'Email not found' });
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Password incorrect' });
    }
  } catch (e) {
    return done(e);
  }
};

const initializePassport = app => {
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    return done(null, await getUserById(id));
  });
};

export default initializePassport

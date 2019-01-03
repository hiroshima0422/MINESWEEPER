var passport = require('passport');
app.use(passport.initialize());

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done){
    // ここで username と password を確認して結果を返す
}));

app.get('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  });

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true });

app.post('/login',
passport.authenticate('local'),
function(req, res) {
  // 認証に施工すると、この関数が呼び出される。
  // 認証されたユーザーは `req.user` に含まれている。
  res.redirect('/users/' + req.user.username);
});

var session = require('express-session');
app.use(session({
    secret: '○○',
}));
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

function isAuthenticated(req, res, next){
    if (req.isAuthenticated()) {  // 認証済
        return next();
    }
    else {  // 認証されていない
        res.redirect('/login');  // ログイン画面に遷移
    }
}



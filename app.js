var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var reviewRouter = require('./app_server/routes/review'); // Add this line
require('./app_server/models/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, "app_server", 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json()); // Ensure JSON data is parsed
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to set user data for views
app.use((req, res, next) => {
  res.locals.user = req.user; // Assuming you're using passport or similar for user authentication
  next();
});

// Use the routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/review', reviewRouter); // Add this line for the review router

// --- Chatbot API Route (Add this section here) ---
app.post('/api/chatbot', (req, res) => {
  const userMessage = req.body.message; // Get the message from the request body
  let response = "I'm sorry, I don't understand."; // Default response

  // Chatbot logic for responding to specific questions
  if (userMessage.toLowerCase().includes('jio services')) {
    response = 'Jio offers a variety of services including JioFiber, JioTV, and more.';
  } else if (userMessage.toLowerCase().includes('help')) {
    response = 'How can I assist you? You can ask about services, plans, or support.';
  } else if (userMessage.toLowerCase() === 'hi') {
    response = 'Hello! How can I assist you today?';
  }

  // Send the response back to the client
  res.json({ message: response });
});
// --- End of Chatbot Route ---

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

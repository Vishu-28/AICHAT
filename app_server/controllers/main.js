// controllers/main.js

module.exports.index = function(req, res) {
    res.render('index', { title: 'AI CHAT' });
};

module.exports.signin = function(req, res) {
    res.render('signin', { title: 'Signin' });
};

module.exports.review = function(req, res) {
    res.render('review', { title: 'Review' });
};

// Remove the chatbot function if you are not using a separate view for it
// module.exports.chatbot = function(req, res) {
//     res.render('chatbot', { title: 'Chatbot' }); 
// };

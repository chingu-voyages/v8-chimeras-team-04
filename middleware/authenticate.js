

const authenticate = (req, res, next) => {
    // Check the header for a token value.
    // if there's a token value, check the DB to see if it's still valid.
    const token = req.header('x-auth');
    if (token) {
        const user = 'test-user';
        req.user = user;
        req.token = token;
        next();
    } 
    // If there is no x-auth token, send authentication error (401)
    res.status(401).send();
    
}

module.exports = { authenticate };
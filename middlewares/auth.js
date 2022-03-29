const jwt = require('jsonwebtoken'),
    config = require('../config/config.json');

// module.exports = (req,res,next) => {
//     const token = req?.headers['authorization']
//     if (token) {
//         jwt.verify(token, config.secret, function(err, decoded) {
//             if (err) {
//                 return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
//             }
//             req.decoded = decoded;
//             req.user_id = decoded.user_id;
//             next();
//         });
//     } else {
//         return res.status(403).send({
//             "error": true,
//             "message": 'No token provided.'
//         });
//     }
// }

module.exports = (req, res, next) => {
    console.log('AUTH');
    next();
}
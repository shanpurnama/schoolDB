
const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {
    try {
        jwt.verify(req.headers.token, process.env.PRIVATE_KEY)
        next()
      } catch(err) {
        res.status(err).json(400).json({
            message: 'unauthenticate'
        })
      }
}


function authorize(req, res, next) {
  try {
      const decode = jwt.verify(req.headers.token, process.env.PRIVATE_KEY)
      console.log(req.params.id)
      next()
    } catch(err) {
      res.status(err).json(400).json({
          message: 'unauthorize'
      })
    }
  
}

module.exports = {
    authenticate,
    authorize
}
module.exports = function (req, res, next) {

    console.log('url = ' + req.originalUrl);

    if (req.method === 'POST' && (req.originalUrl === '/users')) {
      return res.jsonp({ HasError: false, Result: {token: "foo", FullName: "full name", Email: "user1@email.com" }})
    }

    if (req.method === 'POST' && (req.originalUrl === '/timeentries')) {
        return res.jsonp({ HasError: false, Result: [
            {
                token: "foo", FullName: "full name", Email: "user1@email.com" 
            }
        ]})
      }

      if (req.method === 'POST' && (req.originalUrl === '/menu')) {
        req.method = 'GET';
      }
    next()
  }
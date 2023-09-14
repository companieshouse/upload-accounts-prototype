//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/10-check-your-answers', function(request, response) {

    var type = request.session.data['type-of-accounts']
    if (type == "Community Interest Company (CIC) accounts"){
        response.redirect("https://products.payments.service.gov.uk/pay/b963568c2e924d1db38baeda7815db76")
    } else if (type == "Overseas company accounts"){
        response.redirect("https://products.payments.service.gov.uk/pay/b6270574de6040fc9a76dbf47664c7ca")
    } else {
        response.redirect("/v1/12-confirmation-submission")
    }
})


//// Show session data and URLs in the terminal   - courtesy of Vicky Teinaki
router.use((req, res, next) => {
    const log = {
      method: req.method,
      url: req.originalUrl,
      data: req.session.data
    }
    console.log(JSON.stringify(log, null, 2))

  next()
})
module.exports.homelist = function(req, res) {
  res.render('location-list', {
      title: 'AI CHAT',
      pageHeader: {
          title: 'AI CHAT',
          strapline: 'Customer Support Interactive Platform'
      },
      locations: [{
          name: 'MY JIO',
          address: 'Ground Floor, H No 2-20, Sy No 54, Huzurnagar, Chilka Nagar Main Rd, Uppal, Hyderabad, Telangana 500039',
          rating: 3,
          facilities: ['Online service', 'Opening Time: 9am','Closing Time: 10pm'],
          distance: '400m'
      }, {
          name: 'AIRTEL EXPRESS',
          address: 'Airtel Express, SHOP NO. GS2, Gurukrupa Complex, OPP: ELECTRICAL SUB STATION, RING ROAD, near UPPAL, Venkateswara Colony, Vijayapuri Colony, Uppal, Hyderabad, Telangana 500039',
          rating: 4,
          facilities: ['Online service', 'Opening Time: 9am', 'Closing Time: 10pm'],
          distance: '3.2km'
      }, {
          name: 'VODAFONE IDEA',
          address: 'Ground Floor, Road, KLK Estate Ln, Fateh Maidan, Abids, Hyderabad, Telangana 500001',
          rating: 2,
          facilities: ['Online service', 'Opening Time: 9am','Closing Time :10pm'],
          distance: '16.0km'
      }]
  });
};

module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'LocationInfo' });
};

module.exports.locationInfo1 = function(req, res){
    res.render('locations-info2', { title: 'LocationInfo1' });
};

module.exports.locationInfo2 = function(req, res){
    res.render('locations-info3', { title: 'LocationInfo2' });
};

module.exports.addReview = function(req, res){
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};

// Function to output stars
function outputRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span style="color: gold;">&#9733;</span>'; // Filled star with gold color
        } else {
            stars += '<span style="color: grey;">&#9734;</span>'; // Empty star with grey color
        }
    }
    return stars;
}







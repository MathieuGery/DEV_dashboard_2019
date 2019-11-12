async function about(req, res) {
    var current_hour = Date.now();
    try {
           return res.status(200).json({
               customer: {
                   host: req.headers['x-forwarded-for'] || req.connection.remoteAddress
               },
               server: {
                   current_time: current_hour,
                   services: [{
                       name: " weather " ,
                       widgets: [{
                           name: " city_temperature " ,
                           description: " Display temperature for a city " ,
                           params: [{
                               name: " city " ,
                               type: " string "
                           }]
                       }]
                   } , {
                       name: " rss " ,
                       widgets: [{
                           name: " article_list " ,
                           description: " Displaying the list of the last articles " ,
                           params: [{
                               name: " link " ,
                               type: " string "
                           },{
                               name: " number " ,
                               type: " integer "
                           }]
                       }]
                   }]
               }

        });
    } catch (error) {
        return res.status(500).json({
            error
        });
    }
}

exports.about = about;
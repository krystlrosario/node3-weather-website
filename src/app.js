///////////////// HELLO EXPRESS /////////////////
// const express = require('express');

// const app = express()

// app.get('', (req, res) => {
//     res.send('Hello Express! ✋')
// })

// app.get('/help', (req, res) => {
//     res.send('Help Page')
// })

// app.get('/about', (req, res) => {
//     res.send('About')
// })

// app.get('/weather', (req, res) => {
//     res.send('Your Weather')
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })

///////////////// SERVING UP HTML AND JSON /////////////////
// const express = require('express');

// const app = express()

// //HTML
// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>'); 
// });

// //JSON: auto stringify
// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Krystl'
//     }, {
//         age: 23,
//     }]);  
// }); 

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia',
//     });
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })

///////////////// SERVING UP STATIC ASSETS /////////////////
// const path = require('path');
// const express = require('express');

// const app = express();
// const publicDirectoryPath = path.join(__dirname, '../public');

// app.use(express.static(publicDirectoryPath));

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia',
//     });
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })

///////////////// SERVING UP CSS, JS, IMAGES AND MORE /////////////////
// const path = require('path');
// const express = require('express');
// const { isAbsolute } = require('path');

// const app = express();

// // Define Pathr for Express config
// const publicDirectoryPath = path.join(__dirname, '../public');
// const viewsPath = path.join(__dirname, '../templates')

// // Setup handlebars engine and views location
// app.set('view engine', 'hbs');
// app.set('views', viewsPath);

// // Setup static directory to serve
// app.use(express.static(publicDirectoryPath));
// app.use(express.static(viewsPath));

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Krystl Rosario',
//     });
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Krystl Rosario',
//     });
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         title: 'Help',
//         msg: 'This is some helpful text',
//     });
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia',
//     });
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })

///////////////// ADVANCED TEMPLATING /////////////////
// const path = require('path');
// const express = require('express');
// const { isAbsolute } = require('path');
// const hbs = require('hbs');

// const app = express();

// // Define Path for Express config
// const publicDirectoryPath = path.join(__dirname, '../public');
// const viewsPath = path.join(__dirname, '../templates/views');
// const partialsPath = path.join(__dirname, '../templates/partials');

// // Setup handlebars engine and views location
// app.set('view engine', 'hbs');
// app.set('views', viewsPath);
// hbs.registerPartials(partialsPath);

// // Setup static directory to serve
// app.use(express.static(publicDirectoryPath));
// app.use(express.static(viewsPath));


// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Krystl Rosario',
//     });
// }); 

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Krystl Rosario',
//     });
// });

// app.get('/help', (req, res) => {
//     res.render('help', {
//         title: 'Help',
//         msg: 'This is some helpful text',
//         name: "Krystl Rosario",
//     });
// });

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia',
//     });
// });

// // Help/*
// app.get('/help/*', (req,res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Krystl Rosario',
//         errorMessage: 'Help article not found',
//     });
// });

// //404 Page
// app.get('*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Krystl Rosario',
//         errorMessage: 'Page Not Found',
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// });

///////////////// QUERY STRING /////////////////
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast.js');
const geocode = require('./utils/geocode.js');

const app = express();
const port = process.env.PORT || 3000;

// Define Path for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use(express.static(viewsPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Krystl Rosario',
    });
}); 

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Krystl Rosario',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'This is some helpful text',
        name: "Krystl Rosario",
    });
});

//Query String Challenge
//localhost:3000/weather?address=philadelphia
//
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Address must be provided!",
        });
    } 
 
    geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
         if (error) {
             return res.send({error});
         }
         forecast(longitude,latitude, (error, forecastData) => {
             if (error) {
             return res.send({error});
             }
         
             res.send({
                 forecast: forecastData,
                 location,
                 address: req.query.address,
             });
         });
     });
 });


//Query String
//localhost:3000/products?search=games&rating=5
//req.query 
app.get('/products', (req,res) => {
    if(!req.query.search) {
        return res.send({
            error: "You must provide a search term",
        });
    };

    console.log(req.query.search);
    res.send({
        products: [],
    });
});

// Help/*
app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Krystl Rosario',
        errorMessage: 'Help article not found',
    });
});

//404 Page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Krystl Rosario',
        errorMessage: 'Page Not Found',
    });
});

app.listen(port, () => {
    console.log(`Server is up on port. ${port}`)
});


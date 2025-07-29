import express from 'express';

const app = express();

// Middleware to serve static files
app.use(express.static('public'));

// get
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});    
import {Router} from 'express';
const router = new Router();

router.get('/', (req, res) => {
    res.render('index', {title : 'Tus series favoritas'});
});

router.get('/favorites', (req, res) => {
    res.render('favorites', {title : 'Favoritas'});
});

router.get('/news', (req, res) => {
    res.render('news', {title : 'Estrenos'});
});

export default router;
var express = require('express');
var router = express.Router();

// Додайте себе сюди!!!!
var students = [
    { id: 1, name: 'Максим', age: '19', bio: 'Живу в невеличкому містечку, багато чим цікавлюсь та основне це - програмування та кулінарія.', externalLink: 'https://discordapp.com/users/777127385551470602/', image: '/images/max.png' },
];

router.get('/:id', function (req, res) {
    var student = students.find(s => s.id == req.params.id);
    if (!student) {
        return res.status(404).send('Сторінки не знайдено!')
    }
    res.render('student', {
        student: student,
    });
});

module.exports = router;
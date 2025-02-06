const express = require('express');
const router = express.Router();

// Додайте себе сюди!!!!
const students = [
    { id: 1, name: 'Максим', age: '19', bio: 'Живу в невеличкому містечку, багато чим цікавлюсь та основне це - програмування та кулінарія.', externalLink: 'https://discordapp.com/users/777127385551470602/', image: '/images/max.png' },
    { id: 2, name: 'Анастасія', age: '18', bio: 'Люблю освоювати нові вміння', externalLink: 'https://www.linkedin.com/in/anastasia-sameliuk-48265129b/', image: '/images/nastya.jpg' },
];

router.get('/:id', function (req, res) {
    const student = students.find(s => s.id == req.params.id);
    if (!student) {
        return res.status(404).send('Сторінки не знайдено!')
    }
    res.render('student', {
        student: student,
    });
});

module.exports = router;

/*1. Добавить всем пользователям id (поле, по которому пользователя можно уникально идентифицировать).
2. Переписать метод добавления таким образом, чтобы id генерировался автоматически (например, порядковый номер)
3. Добавить метод удаления пользователей*/



var users = [
    {
        id: '1',
        firstName: 'Dmitry',
        lastName: 'Kozlov',
        birthDay: '16.07.1990',
        phones: [
			'89001234567',
			'83431234567'
		]
	},
    {
        id: '2',
        firstName: 'Ivan',
        lastName: 'Petrov',
        birthDay: '08.06.1956',
        phones: [
			'89001234567',
			'83431234567'
		]
	}
];




function checkId(users) {
    return users[users.length - 1].id;
}




function addUser(users, nomer) {

    var user = {};
    user.id = nomer;
    user.firstName = prompt('Введите имя:');
    user.lastName = prompt('Введите фамилию:');
    user.birthDay = prompt('Дату рождения:');
    user.phones = [];
    /*  var n = 0;
        n = prompt('сколько всего номеров телефонов?');
        for (i = 0; i < n; i++) {
        user.phones[i] = prompt('Номер телефона:'); */
    while (true) {
        var phone = prompt('Номер телефона:(для выхода введите пустой номер)');
        if (!phone) break;
        user.phones.push(phone);
    }
    users.push(user);
}

function csvFormat(users) {
    return users.map(function (user) {
        return Object.keys(user).map(function (key) {
            if (typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"';
            else return user[key].map(function (phone) {
                return '"' + phone + '"';
            }).join(';');
        }).join(';');
    }).join('\r\n');
}

function delUser(users, nomer) {


    for (var i = 0; i < users.length; ++i) {
        if (users[i].id == nomer) {
            users.splice(users.indexOf(i), 1);
            console.log('Id: ' + users[i].id, 'Имя: ' + users[i].firstName, ' Фамилия: ' + users[i].lastName, ' Дата рождения: ' + users[i].birthDay)


        }
    }
    for (var i = 0; i < users.length; ++i) {
        console.log('Id: ' + users[i].id, 'Имя: ' + users[i].firstName, ' Фамилия: ' + users[i].lastName, ' Дата рождения: ' + users[i].birthDay)

    };
}







var N = prompt('how many users?');
for (i = 0; i < N; i++) {

    var newId = parseInt(checkId(users)) + 1;
    addUser(users, newId);
}

for (var i = 0; i < users.length; ++i) {
    console.log('Id: ' + users[i].id, 'Имя: ' + users[i].firstName, ' Фамилия: ' + users[i].lastName, ' Дата рождения: ' + users[i].birthDay, ' Телефоны: ' + users[i].phones.join(', '));
    csvFormat(users);
};

var Q = prompt("Delete user? Y/N-?");
if (Q == "Y") {
    for (var i = 0; i < users.length; ++i) {
        console.log('Id: ' + users[i].id, 'Имя: ' + users[i].firstName, ' Фамилия: ' + users[i].lastName, ' Дата рождения: ' + users[i].birthDay, ' Телефоны: ' + users[i].phones.join(', '));
    };

    var delId = prompt('Введите ID:');

    delUser(users, delId);
}
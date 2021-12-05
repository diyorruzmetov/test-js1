for (let i = 1; i < 10; i++) {
    const name = prompt('Введите имя пользователя');
    const age = +prompt('Введите возраст');

    const users = {
        пользователь: {
            name: name,
            age: age
        }
    }
    for(const user in users) {
        console.log(`${i}-пользователь:`, users[user]);
    }
}
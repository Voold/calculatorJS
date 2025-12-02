// Подключаем модуль для работы с вводом
const readline = require('readline');

// Объявляем интерфейс для общение с пользователем 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Подключаемся к потоку ввода
rl.on('line', (input) => {

	console.log(input);
  
});

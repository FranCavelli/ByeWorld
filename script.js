const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';

let byeWorld = document.getElementById('byeWorld');

const phrase = 'Bye World';

findPhrase(0);

function findPhrase(index) {
    if (index < phrase.length) {
        findLetter(phrase[index], () => {
            findPhrase(index + 1);
        });
    }
}

function findLetter(letter, callback) {
    let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (randomLetter === letter) {
        displayLetter(letter);
        callback();
    } else {
        setTimeout(() => findLetter(letter, callback), 10);
    }
}

function displayLetter(letter) {
    byeWorld.innerText += letter;
}

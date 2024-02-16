const firstItem = document.getElementById('first');
const secondItem = document.getElementById('second');
const thirdItem = document.getElementById('third');
const fourthItem = document.getElementById('fourth');
const fifthItem = document.getElementById('fifth');

const array = [firstItem, secondItem, thirdItem, fourthItem, fifthItem];

function randomColorGenerator() {
    const hexCharacters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += hexCharacters[randomIndex];
    }

    return color;
}

array.forEach((item) => {
    item.addEventListener('click', function () {
        item.style.backgroundColor = randomColorGenerator();
    });
});

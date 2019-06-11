const students = ['Mike', 'Julie', 'Xing', 'Sal', 'Austin', 'Brandon', 'Ian', 'Isaac', 'Javier', 'Joshua', 'Sean', 'Thao'];

const shuffleArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

const randomizer = function () {
    $('#card_1').empty()
    $('#card_2').empty()
    $('#card_3').empty()
    $('#card_4').empty()
    const groups = [[], [], [], []];
    shuffleArray(students);
    for (let i = 0; i < students.length; i++) {
        const groupIndex = i % 4;
        groups[groupIndex].push(students[i]);

    }

    for (let j = 0; j < groups[0].length; j++) {
        $('#card_1').append('<ul><li>' + groups[0][j] + '</li></ul>');
    }
    for (let k = 0; k < groups[1].length; k++) {
        $('#card_2').append('<ul><li>' + groups[1][k] + '</li></ul>');
        console.log(groups[2])
    }
    for (let l = 0; l < groups[2].length; l++) {
        $('#card_3').append('<ul><li>' + groups[2][l] + '</li></ul>');
    }
    for (let h = 0; h < groups[3].length; h++) {
        $('#card_4').append('<ul><li>' + groups[3][h] + '</li></ul>');
    }
    console.log(groups);
};



$('.btn').on('click', function(){
    randomizer()
})
;

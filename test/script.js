//Fork 1
document.getElementById('fork1-1').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork1').style.display = 'none';
    document.getElementById('fork1-1').style.display = 'none';
    document.getElementById('fork1-2').style.display = 'none';
    document.getElementById('fork1-3').style.display = 'none';

    document.getElementById('fork3').style.display = 'inline-block';
    document.getElementById('fork3-1').style.display = 'inline-block';
    document.getElementById('fork3-2').style.display = 'inline-block';
});

document.getElementById('fork1-2').addEventListener('click', function(event) {
    //Maternal Route

    document.getElementById('fork1').style.display = 'none';
    document.getElementById('fork1-1').style.display = 'none';
    document.getElementById('fork1-2').style.display = 'none';
    document.getElementById('fork1-3').style.display = 'none';

    document.getElementById('m-route').style.display = 'inline-block';
    document.getElementById('end1').style.display = 'inline-block';
});

document.getElementById('fork1-3').addEventListener('click', function(event) {
    //Docile Route

    document.getElementById('fork1').style.display = 'none';
    document.getElementById('fork1-1').style.display = 'none';
    document.getElementById('fork1-2').style.display = 'none';
    document.getElementById('fork1-3').style.display = 'none';

    document.getElementById('fork2').style.display = 'inline-block';
    document.getElementById('fork2-1').style.display = 'inline-block';
    document.getElementById('fork2-2').style.display = 'inline-block';
});

//Fork 2
document.getElementById('fork2-1').addEventListener('click', function(event) {
    //Docile Route

    document.getElementById('fork2').style.display = 'none';
    document.getElementById('fork2-1').style.display = 'none';
    document.getElementById('fork2-2').style.display = 'none';

    document.getElementById('fork4').style.display = 'inline-block';
    document.getElementById('fork4-1').style.display = 'inline-block';
    document.getElementById('fork4-2').style.display = 'inline-block';
});

document.getElementById('fork2-2').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork2').style.display = 'none';
    document.getElementById('fork2-1').style.display = 'none';
    document.getElementById('fork2-2').style.display = 'none';

    document.getElementById('fork3').style.display = 'inline-block';
    document.getElementById('fork3-1').style.display = 'inline-block';
    document.getElementById('fork3-2').style.display = 'inline-block';
});

//Fork 3
document.getElementById('fork3-1').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork3').style.display = 'none';
    document.getElementById('fork3-1').style.display = 'none';
    document.getElementById('fork3-2').style.display = 'none';

    document.getElementById('fork5').style.display = 'inline-block';
    document.getElementById('fork5-1').style.display = 'inline-block';
    document.getElementById('fork5-2').style.display = 'inline-block';
});

document.getElementById('fork3-2').addEventListener('click', function(event) {
    //Sabotage Route

    document.getElementById('fork3').style.display = 'none';
    document.getElementById('fork3-1').style.display = 'none';
    document.getElementById('fork3-2').style.display = 'none';

    document.getElementById('fork7').style.display = 'inline-block';
    document.getElementById('fork7-1').style.display = 'inline-block';
    document.getElementById('fork7-2').style.display = 'inline-block';
});

//Fork 4
document.getElementById('fork4-1').addEventListener('click', function(event) {
    //Docile Route

    document.getElementById('fork4').style.display = 'none';
    document.getElementById('fork4-1').style.display = 'none';
    document.getElementById('fork4-2').style.display = 'none';

    document.getElementById('d-route').style.display = 'inline-block';
    document.getElementById('end2').style.display = 'inline-block';
});

document.getElementById('fork4-2').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork4').style.display = 'none';
    document.getElementById('fork4-1').style.display = 'none';
    document.getElementById('fork4-2').style.display = 'none';

    document.getElementById('fork3').style.display = 'inline-block';
    document.getElementById('fork3-1').style.display = 'inline-block';
    document.getElementById('fork3-2').style.display = 'inline-block';
});

//Fork 5
document.getElementById('fork5-1').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork5').style.display = 'none';
    document.getElementById('fork5-1').style.display = 'none';
    document.getElementById('fork5-2').style.display = 'none';

    document.getElementById('fork6').style.display = 'inline-block';
    document.getElementById('fork6-1').style.display = 'inline-block';
    document.getElementById('fork6-2').style.display = 'inline-block';
});

document.getElementById('fork5-2').addEventListener('click', function(event) {
    //some route

    document.getElementById('fork5').style.display = 'none';
    document.getElementById('fork5-1').style.display = 'none';
    document.getElementById('fork5-2').style.display = 'none';
});

//Fork 6
document.getElementById('fork6-1').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork6').style.display = 'none';
    document.getElementById('fork6-1').style.display = 'none';
    document.getElementById('fork6-2').style.display = 'none';

    document.getElementById('o-route').style.display = 'inline-block';
    document.getElementById('end3').style.display = 'inline-block';
});

document.getElementById('fork6-2').addEventListener('click', function(event) {
    //some route

    document.getElementById('fork6').style.display = 'none';
    document.getElementById('fork6-1').style.display = 'none';
    document.getElementById('fork6-2').style.display = 'none';
});

/*
//End
function endGame() {
    if (path1+path2 == 3) {
        if (path1 > path2) {
            document.getElementById('end1').style.display = 'flex';
        }
        else {
            document.getElementById('end2').style.display = 'flex';
        }
    }
}*/

var path1 = 0;
var path2 = 0;

//Fork 1
document.getElementById('fork1-1').addEventListener('click', function(event) {
    path1++;

    document.getElementById('fork1').style.display = 'none';
    document.getElementById('fork1-1').style.display = 'none';
    document.getElementById('fork1-2').style.display = 'none';

    document.getElementById('fork2').style.display = 'inline-block';
    document.getElementById('fork2-1').style.display = 'inline-block';
    document.getElementById('fork2-2').style.display = 'inline-block';
});

document.getElementById('fork1-2').addEventListener('click', function(event) {
    path2++;

    document.getElementById('fork1').style.display = 'none';
    document.getElementById('fork1-1').style.display = 'none';
    document.getElementById('fork1-2').style.display = 'none';

    document.getElementById('fork2').style.display = 'inline-block';
    document.getElementById('fork2-1').style.display = 'inline-block';
    document.getElementById('fork2-2').style.display = 'inline-block';
});

//Fork 2
document.getElementById('fork2-1').addEventListener('click', function(event) {
    path1++;

    document.getElementById('fork2').style.display = 'none';
    document.getElementById('fork2-1').style.display = 'none';
    document.getElementById('fork2-2').style.display = 'none';

    document.getElementById('fork3').style.display = 'inline-block';
    document.getElementById('fork3-1').style.display = 'inline-block';
    document.getElementById('fork3-2').style.display = 'inline-block';
});

document.getElementById('fork2-2').addEventListener('click', function(event) {
    path2++;

    document.getElementById('fork2').style.display = 'none';
    document.getElementById('fork2-1').style.display = 'none';
    document.getElementById('fork2-2').style.display = 'none';

    document.getElementById('fork3').style.display = 'inline-block';
    document.getElementById('fork3-1').style.display = 'inline-block';
    document.getElementById('fork3-2').style.display = 'inline-block';
});

//Fork 3
document.getElementById('fork3-1').addEventListener('click', function(event) {
    path1++;

    document.getElementById('fork3').style.display = 'none';
    document.getElementById('fork3-1').style.display = 'none';
    document.getElementById('fork3-2').style.display = 'none';

    endGame();
});

document.getElementById('fork3-2').addEventListener('click', function(event) {
    path2++;

    document.getElementById('fork3').style.display = 'none';
    document.getElementById('fork3-1').style.display = 'none';
    document.getElementById('fork3-2').style.display = 'none';

    endGame();
});

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
}
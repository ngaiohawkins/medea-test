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
    document.getElementById('again').style.display = 'inline-block';
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
    //End 2

    document.getElementById('fork2').style.display = 'none';
    document.getElementById('fork2-1').style.display = 'none';
    document.getElementById('fork2-2').style.display = 'none';

    document.getElementById('d-route').style.display = 'inline-block';
    document.getElementById('end2').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
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
    //S1 Route

    document.getElementById('fork4').style.display = 'none';
    document.getElementById('fork4-1').style.display = 'none';
    document.getElementById('fork4-2').style.display = 'none';

    document.getElementById('fork7').style.display = 'inline-block';
    document.getElementById('fork7-1').style.display = 'inline-block';
    document.getElementById('fork7-2').style.display = 'inline-block';
});

document.getElementById('fork4-2').addEventListener('click', function(event) {
    //Docile Route

    document.getElementById('fork4').style.display = 'none';
    document.getElementById('fork4-1').style.display = 'none';
    document.getElementById('fork4-2').style.display = 'none';

    document.getElementById('fork11').style.display = 'inline-block';
    document.getElementById('fork11-1').style.display = 'inline-block';
    document.getElementById('fork11-2').style.display = 'inline-block';
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
    //S6 route

    document.getElementById('fork5').style.display = 'none';
    document.getElementById('fork5-1').style.display = 'none';
    document.getElementById('fork5-2').style.display = 'none';

    document.getElementById('fork13').style.display = 'inline-block';
    document.getElementById('fork13-1').style.display = 'inline-block';
    document.getElementById('fork13-2').style.display = 'inline-block';
});

//Fork 6
document.getElementById('fork6-1').addEventListener('click', function(event) {
    //End 3

    document.getElementById('fork6').style.display = 'none';
    document.getElementById('fork6-1').style.display = 'none';

    document.getElementById('o-route').style.display = 'inline-block';
    document.getElementById('end3').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

//Fork 7
document.getElementById('fork7-1').addEventListener('click', function(event) {
    //End 4

    document.getElementById('fork7').style.display = 'none';
    document.getElementById('fork7-1').style.display = 'none';
    document.getElementById('fork7-2').style.display = 'none';

    document.getElementById('s1-route').style.display = 'inline-block';
    document.getElementById('end4').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

document.getElementById('fork7-2').addEventListener('click', function(event) {
    //S2 Route

    document.getElementById('fork7').style.display = 'none';
    document.getElementById('fork7-1').style.display = 'none';
    document.getElementById('fork7-2').style.display = 'none';

    document.getElementById('fork8').style.display = 'inline-block';
    document.getElementById('fork8-1').style.display = 'inline-block';
    document.getElementById('fork8-2').style.display = 'inline-block';
});

//Fork 8
document.getElementById('fork8-1').addEventListener('click', function(event) {
    //S2 Route

    document.getElementById('fork8').style.display = 'none';
    document.getElementById('fork8-1').style.display = 'none';
    document.getElementById('fork8-2').style.display = 'none';

    document.getElementById('fork10').style.display = 'inline-block';
    document.getElementById('fork9-1').style.display = 'inline-block';
    document.getElementById('fork9-2').style.display = 'inline-block';
});

document.getElementById('fork8-2').addEventListener('click', function(event) {
    //S2 Route

    document.getElementById('fork8').style.display = 'none';
    document.getElementById('fork8-1').style.display = 'none';
    document.getElementById('fork8-2').style.display = 'none';

    document.getElementById('fork9').style.display = 'inline-block';
    document.getElementById('fork9-1').style.display = 'inline-block';
    document.getElementById('fork9-2').style.display = 'inline-block';
});

//Fork 9
document.getElementById('fork9-1').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork9').style.display = 'none';
    document.getElementById('fork9-1').style.display = 'none';
    document.getElementById('fork9-2').style.display = 'none';

    document.getElementById('fork6').style.display = 'inline-block';
    document.getElementById('fork6-1').style.display = 'inline-block';
    document.getElementById('fork6-2').style.display = 'inline-block';
});

document.getElementById('fork9-2').addEventListener('click', function(event) {
    //End 5 Route

    document.getElementById('fork9').style.display = 'none';
    document.getElementById('fork9-1').style.display = 'none';
    document.getElementById('fork9-2').style.display = 'none';

    document.getElementById('s2-route').style.display = 'inline-block';
    document.getElementById('end5').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

//Fork 10
document.getElementById('fork9-1').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork10').style.display = 'none';
    document.getElementById('fork9-1').style.display = 'none';
    document.getElementById('fork9-2').style.display = 'none';

    document.getElementById('fork6').style.display = 'inline-block';
    document.getElementById('fork6-1').style.display = 'inline-block';
    document.getElementById('fork6-2').style.display = 'inline-block';
});

document.getElementById('fork9-2').addEventListener('click', function(event) {
    //End 5 Route

    document.getElementById('fork10').style.display = 'none';
    document.getElementById('fork9-1').style.display = 'none';
    document.getElementById('fork9-2').style.display = 'none';

    document.getElementById('s2-route').style.display = 'inline-block';
    document.getElementById('end5').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

//Fork 11
document.getElementById('fork11-1').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork11').style.display = 'none';
    document.getElementById('fork11-1').style.display = 'none';
    document.getElementById('fork11-2').style.display = 'none';

    document.getElementById('fork6').style.display = 'inline-block';
    document.getElementById('fork6-1').style.display = 'inline-block';
    document.getElementById('fork6-2').style.display = 'inline-block';
});

document.getElementById('fork11-2').addEventListener('click', function(event) {
    //Docile Route

    document.getElementById('fork11').style.display = 'none';
    document.getElementById('fork11-1').style.display = 'none';
    document.getElementById('fork11-2').style.display = 'none';

    document.getElementById('fork12').style.display = 'inline-block';
    document.getElementById('fork12-1').style.display = 'inline-block';
    document.getElementById('fork12-2').style.display = 'inline-block';
});

//Fork 12
document.getElementById('fork12-1').addEventListener('click', function(event) {
    //Original Route

    document.getElementById('fork12').style.display = 'none';
    document.getElementById('fork12-1').style.display = 'none';
    document.getElementById('fork12-2').style.display = 'none';

    document.getElementById('fork6').style.display = 'inline-block';
    document.getElementById('fork6-1').style.display = 'inline-block';
    document.getElementById('fork6-2').style.display = 'inline-block';
});

document.getElementById('fork12-2').addEventListener('click', function(event) {
    //S3 Route

    document.getElementById('fork12').style.display = 'none';
    document.getElementById('fork12-1').style.display = 'none';
    document.getElementById('fork12-2').style.display = 'none';

    document.getElementById('fork13').style.display = 'inline-block';
    document.getElementById('fork13-1').style.display = 'inline-block';
    document.getElementById('fork13-2').style.display = 'inline-block';
    document.getElementById('fork13-3').style.display = 'inline-block';
});

//Fork 13
document.getElementById('fork13-1').addEventListener('click', function(event) {
    //End 6

    document.getElementById('fork13').style.display = 'none';
    document.getElementById('fork13-1').style.display = 'none';
    document.getElementById('fork13-2').style.display = 'none';
    document.getElementById('fork13-3').style.display = 'none';

    document.getElementById('s3-route').style.display = 'inline-block';
    document.getElementById('end6').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

document.getElementById('fork13-2').addEventListener('click', function(event) {
    //End 7

    document.getElementById('fork13').style.display = 'none';
    document.getElementById('fork13-1').style.display = 'none';
    document.getElementById('fork13-2').style.display = 'none';
    document.getElementById('fork13-3').style.display = 'none';

    document.getElementById('s4-route').style.display = 'inline-block';
    document.getElementById('end7').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

document.getElementById('fork13-3').addEventListener('click', function(event) {
    //End 8

    document.getElementById('fork13').style.display = 'none';
    document.getElementById('fork13-1').style.display = 'none';
    document.getElementById('fork13-2').style.display = 'none';
    document.getElementById('fork13-3').style.display = 'none';

    document.getElementById('s5-route').style.display = 'inline-block';
    document.getElementById('end8').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

//Fork 14
document.getElementById('fork14-1').addEventListener('click', function(event) {
    //End 9

    document.getElementById('fork14').style.display = 'none';
    document.getElementById('fork14-1').style.display = 'none';
    document.getElementById('fork14-2').style.display = 'none';

    document.getElementById('s6-route').style.display = 'inline-block';
    document.getElementById('end9').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

//Fork 15
document.getElementById('fork15-1').addEventListener('click', function(event) {
    //End 10

    document.getElementById('fork15').style.display = 'none';
    document.getElementById('fork15-1').style.display = 'none';
    document.getElementById('fork15-2').style.display = 'none';

    document.getElementById('s7-route').style.display = 'inline-block';
    document.getElementById('end10').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

document.getElementById('fork15-2').addEventListener('click', function(event) {
    //End 11

    document.getElementById('fork15').style.display = 'none';
    document.getElementById('fork15-1').style.display = 'none';
    document.getElementById('fork15-2').style.display = 'none';

    document.getElementById('s8-route').style.display = 'inline-block';
    document.getElementById('end11').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

document.getElementById('fork15-2').addEventListener('click', function(event) {
    //End 12

    document.getElementById('fork15').style.display = 'none';
    document.getElementById('fork15-1').style.display = 'none';
    document.getElementById('fork15-2').style.display = 'none';

    document.getElementById('s9-route').style.display = 'inline-block';
    document.getElementById('end12').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
});

//Replay
function refreshTab() {
    location.reload();
}
  
document.getElementById('again').addEventListener('click', function(event) {
    event.stopPropagation();
    refreshTab();
});

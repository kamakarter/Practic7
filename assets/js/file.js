// 1 task

document.querySelector('.btn_hide').addEventListener('click', function(){
    document.querySelector('.btn_hide').classList.add('hidden');
})


// 2 task 


document.querySelector('.btn_hide_div').addEventListener('click', function(){
    document.getElementById('text').style.display = 'none';
})


// 3 task


document.querySelector('.btn_reverse').addEventListener('click', function(){
    document.getElementById('text_2').classList.toggle('hidden');

})


// 4 task 


let BallBox = document.querySelector('.ball_box');

BallBox.addEventListener('click', function(){
    let ball = document.getElementById('ball');

    ball.classList.toggle('ball_animate');
})
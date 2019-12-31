let difficulty = 1;
let valueofdiff = 200;

$('#up1').on('click', () => {
    console.log('按到了喔')
    difficulty = 1
    valueofdiff = 200 / (Number(difficulty));
    let game = setInterval(draw, Number(valueofdiff));
})
$('#up2').on('click', () => {
    console.log('按到了喔')
    difficulty = 2
    valueofdiff = 200 / (Number(difficulty));
    let game = setInterval(draw, Number(valueofdiff));
})
$('#up3').on('click', () => {
    console.log('按到了喔')
    difficulty = 3
    valueofdiff = 200 / (Number(difficulty));
    let game = setInterval(draw, Number(valueofdiff));
})
$('#up4').on('click', () => {
    console.log('按到了喔')
    difficulty = 4
    valueofdiff = 200 / (Number(difficulty));
    let game = setInterval(draw, Number(valueofdiff));
})
$('#up5').on('click', () => {
    console.log('按到了喔')
    difficulty = 5
    valueofdiff = 200 / (Number(difficulty));
    let game = setInterval(draw, Number(valueofdiff));
})
$('#up6').on('click', () => {
    console.log('按到了喔')
    difficulty = 6
    valueofdiff = 200 / (Number(difficulty));
    let game = setInterval(draw, Number(valueofdiff));
})

$('#start').on('click', () => {
    console.log('按到了喔')

    const cvs = document.getElementById("snake");
    const ctx = cvs.getContext("2d");

    const box = 32;

    const ground = new Image();
    ground.src = "img/ground.png";

    const lier = new Image();
    lier.src = "img/lier.png";

    const foodImg = new Image();
    foodImg.src = "img/FotoJet.png";

    const bombImg = new Image();
    bombImg.src = "img/bomb.png";

    let dead = new Audio();
    let eat = new Audio();
    let up = new Audio();
    let right = new Audio();
    let left = new Audio();
    let down = new Audio();

    dead.src = "audio/dead.mp3";
    eat.src = "audio/eat.mp3";
    up.src = "audio/up.mp3";
    right.src = "audio/right.mp3";
    left.src = "audio/left.mp3";
    down.src = "audio/down.mp3";

    let snake = [];

    snake[0] = {
        x: 9 * box,
        y: 10 * box
    };

    let food = {
        x: Math.floor(Math.random() * 17 + 1) * box,
        y: Math.floor(Math.random() * 15 + 3) * box
    }
    let bomb = {
        x: Math.floor(Math.random() * 17 + 1) * box,
        y: Math.floor(Math.random() * 15 + 3) * box
    }

    let score = 0;

    let d;

    document.addEventListener("keydown", direction);

    function direction(event) {
        let key = event.keyCode;
        if (key == 65 && d != "RIGHT") {
            left.play();
            d = "LEFT";
        } else if (key == 87 && d != "DOWN") {
            d = "UP";
            up.play();
        } else if (key == 68 && d != "LEFT") {
            d = "RIGHT";
            right.play();
        } else if (key == 83 && d != "UP") {
            d = "DOWN";
            down.play();
        }
    }

    function collision(head, array) {
        for (let i = 0; i < array.length; i++) {
            if (head.x == array[i].x && head.y == array[i].y) {
                return true;
            }
        }
        return false;
    }

    function draw() {

        ctx.drawImage(ground, 0, 0);

        for (let i = 0; i < snake.length; i++) {
            ctx.drawImage(lier, snake[i].x, snake[i].y);
        }

        ctx.drawImage(foodImg, food.x, food.y);
        ctx.drawImage(bombImg, bomb.x, bomb.y);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (d == "LEFT") snakeX -= box;
        if (d == "UP") snakeY -= box;
        if (d == "RIGHT") snakeX += box;
        if (d == "DOWN") snakeY += box;

        if (snakeX == food.x && snakeY == food.y) {
            score++;
            eat.play();
            food = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 15 + 3) * box
            }

        } else {
            snake.pop();
        }
        if (snakeX == bomb.x && snakeY == bomb.y) {
            score--;
            dead.play();
            bomb = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 15 + 3) * box
            }
            snake.pop();
        } else {

        }

        let newHead = {
            x: snakeX,
            y: snakeY
        }

        if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
            clearInterval(game);
            dead.play();
        }

        snake.unshift(newHead);

        ctx.fillStyle = "white";
        ctx.font = "45px Changa one";
        ctx.fillText(score, 2 * box, 1.6 * box);
        ctx.fillText(difficulty, 17 * box, 1.6 * box);

    }
    let game = setInterval(draw, Number(valueofdiff));
    $('#start').attr('disabled', '')
    $('#up1').attr('disabled', '')
    $('#up2').attr('disabled', '')
    $('#up3').attr('disabled', '')
    $('#up4').attr('disabled', '')
    $('#up5').attr('disabled', '')
    $('#up6').attr('disabled', '')
})
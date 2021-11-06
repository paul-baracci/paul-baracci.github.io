const gravity = 9.0;
const spriteWidth = spriteHeight = 70;
const totalPlatforms = 40;
const bulletLimit = 3;
const backgroundColor = 'white';
const lavaColor = 'red';
const bulletColor = 'red';
const goalColor = 'orange';
let playerx = playery = 200;
let xvelocity = yvelocity = 0;
let onGround = holdLeft = holdRight = false;
let platforms = [];
let bullets = [];
let goal = {};
let enemies = [];
let playerDirection = 'right'
let framex = 0;
let framey = 0;
let spriteframe = 0;
let playerImage = new Image();
playerImage.src = 'player.png';


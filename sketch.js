var dog, sadDog, happyDog;

var database;
var food, lastFed;
var milk;

function preload() {
  sadDog = loadImage("Images/Dog.png");
  happyDog = loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000, 400);


  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);

  dog.scale = 0.15;

  database = firebase.database();

  var readMilk = database.ref('food');
  readMilk.on("value", function (data) { food = data.val(); });

  var readLastFed = database.ref('lastFed');
  readLastFed.on("value", function (data) { lastFed = data.val(); });

  milk = new Milk();

}

function draw() {
  background(46, 139, 87);

  milk.display();

  drawSprites();

  fill("black");
  text("Ruby", 790, 280);


  if (lastFed >= 12)
    text("Last Feed: " + lastFed % 12 + "PM", 500, 32);

  else if (lastFed == 0)
    text("Last Feed: 12 PM", 500, 32);

  else
    text("Last Feed: " + lastFed + "AM", 500, 32);

}


function writeMilk(food) {
  database.ref('/').update({ food: food });
}

function writeLastFed(lastFed) {
  database.ref('/').update({ lastFed: lastFed });
}

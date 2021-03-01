class Milk {
    constructor() {
        this.image = loadImage("Images/Milk.png");
    }

    display() {
        var feedButton = createButton("Feed the dog");
        feedButton.position(500, 100);


        var addFoodButton = createButton("Add Food");
        addFoodButton.position(600, 100);

        feedButton.mousePressed(function () {
            dog.addImage(happyDog);
            if (food > 0) {
                food = food - 1;
                lastFed = hour();
                writeMilk(food);
                writeLastFed(lastFed);
            }
        });

        addFoodButton.mousePressed(function () {
            food = food + 1;
            writeMilk(food);
        });



        if (food != 0) {

            imageMode(CENTER);
            image(this.image, 720, 220, 70, 70);

            var y = 100;
            var x = 80;

            for (var i = 0; i < food - 1; i++) {
                if (i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;

            }
        }

    }



}
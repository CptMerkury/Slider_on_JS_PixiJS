PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer({transperent: true, resolution: 1})

document.getElementById('spin').appendChild(renderer.view)

var stage = new PIXI.Container()

PIXI.loader
    .add("hookah", 'img/image%202.png')
    .load(setup)

var hookah;

function setup() {
    stage.interactive = true
    hookah = new PIXI.Sprite(
        PIXI.loader.resources['hookah'].texture
    );
    hookah.interactive = true
    hookah.anchor.set(0.5)
    hookah.x = renderer.screen.width / 2;
    hookah.y = renderer.screen.height / 2;

    stage.addChild(hookah)
    hookah.on("click", function() {
        this.canRotate = !this.canRotate;
    });
    animate()
}
function animate() {
    if(hookah.canRotate)
        hookah.rotation += 0.1;
    requestAnimationFrame(animate);
    renderer.render(stage);
}
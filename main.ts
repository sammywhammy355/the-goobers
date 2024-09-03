controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    axe.vy = -300
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthWest1, function (sprite, location) {
    game.gameOver(true)
})
info.onScore(3, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let axe: Sprite = null
axe = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . 2 . . . 2 . . . 
    . 2 2 . . 2 . . 2 . . 2 2 . . . 
    . . 2 2 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 f 3 3 f 3 3 2 . 2 . 
    . . 2 2 3 3 3 3 3 3 3 3 . 2 2 . 
    . . . . 3 3 3 f f 3 3 3 . . . . 
    . . . 2 3 3 3 3 3 3 3 3 2 . . . 
    . 2 2 . . 3 3 3 3 3 3 . 2 2 . . 
    . . . 3 . 3 3 3 3 3 3 . 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 . 3 3 3 3 3 3 . 3 . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . 3 . 3 3 3 3 3 3 . 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 . . 3 3 3 3 . . 3 . . . 
    `, SpriteKind.Player)
controller.moveSprite(axe, 100, 0)
scene.cameraFollowSprite(axe)
axe.ay = 500
axe.setPosition(10, 200)
tiles.setCurrentTilemap(tilemap`level2`)
let worm = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
worm.setPosition(15, 80)
let worm_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
worm_2.setPosition(250, 240)
let worm_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
worm_3.setPosition(250, 50)

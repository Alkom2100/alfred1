namespace SpriteKind {
    export const bonus = SpriteKind.create()
    export const gun = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loaded > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, alkom, 100, 0)
        loaded += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gun, function (sprite, otherSprite) {
    fireball.destroy(effects.smiles, 500)
    loaded = 5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bonus, function (sprite, otherSprite) {
    kiste.setImage(img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)
    pause(500)
    otherSprite.destroy(effects.smiles, 100)
    for (let value of mur) {
        tiles.setTileAt(value, myTiles.transparency16)
        tiles.setWallAt(value, false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (alkom.vy == 0) {
        alkom.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.fire, 100)
        kiste = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.bonus)
        tiles.placeOnTile(kiste, tiles.getTileLocation(14, 14))
        fireball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.gun)
        tiles.placeOnTile(fireball, tiles.getTileLocation(35, 11))
    } else {
        game.over(false, effects.slash)
    }
})
let kiste: Sprite = null
let fireball: Sprite = null
let projectile: Sprite = null
let loaded = 0
let alkom: Sprite = null
let mur: tiles.Location[] = []
tiles.setTilemap(tiles.createTilemap(hex`4600100000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000001010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010100000000000500000000000001010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000005000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000050000000000000000000000010100000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000001000000000500000000000000000000000000000000000000000000000000000000000000000000000007010103000000000004010101010100000001010101000000000000010000000005000000000000000000000001010101010100000000000000000001010108080801010101010801010101010101010100000001010101010000000600000000000000000000050000000101010000000101010808080801000000000000000101010801080808010808080808080808080801000000000000000000000000000006060000000000000000000500010101080801010101080808080808010101010101010101080808010808080108080808080808080808010000000000000000000000000000000606000000000000000001010108080808080808080808080808080808080808080808080808080108080801080808080808080808080100000000000000000000000000000000000000000000000101010808080808080808080808080808080808080808080808080808080801080808010808080808080808080801080808080801010101010101010101010101010101010101080808080808080808080808080808080808080808080808080808080808010808080108080808`, img`
    ................................2.....................................
    ................................2.....................................
    ................................2.....................................
    ................................2.....................................
    ................................2.....................................
    ................................2....222..............................
    ..................222222222.....2......22222..........................
    ..........................22....2..........22.........................
    ...........................2....2...........22........................
    ...........................2....2.....................................
    22.......22222...2222......2....2...........222222.........222...22222
    .222222222...22222...2..........2...222...222..2.2.......222.2...2....
    .....................22.........2.222..2222......222222222...2...2....
    ......................22........222..........................2...2....
    ..............................222............................2...2....
    ............2222222222222222222..............................2...2....
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.builtin.oceanDepths8,sprites.builtin.oceanDepths9,sprites.castle.tilePath5,myTiles.tile2,sprites.castle.rock0,sprites.builtin.oceanDepths4], TileScale.Sixteen))
mur = tiles.getTilesByType(sprites.castle.tilePath5)
alkom = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(alkom, sprites.castle.tileGrass2)
alkom.ay = 300
scene.cameraFollowSprite(alkom)
controller.moveSprite(alkom, 100, 0)
let nemo = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......fd1111111f.......
    ......fdd1111111df......
    ......fddd111111df......
    ......fdddddd111df......
    ......fbddddbfd1df......
    ......fcbbbdcfddbf......
    .......fcbb11111f.......
    ........fffff1b1f.......
    ........fb111cfbf.......
    ........ffb1b1ff........
    ......f.fffbfbf.........
    ......ffffffff..........
    .......fffff............
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(nemo, sprites.builtin.oceanDepths8)
nemo.x += 14
loaded = 0
game.onUpdate(function () {
    if (alkom.y > 240) {
        game.over(false, effects.splatter)
    }
    if (nemo.tileKindAt(TileDirection.Left, sprites.builtin.oceanDepths8)) {
        nemo.vx = 50
        nemo.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......fd1111111f.......
            ......fdd1111111df......
            ......fddd111111df......
            ......fdddddd111df......
            ......fbddddbfd1df......
            ......fcbbbdcfddbf......
            .......fcbb11111f.......
            ........fffff1b1f.......
            ........fb111cfbf.......
            ........ffb1b1ff........
            ......f.fffbfbf.........
            ......ffffffff..........
            .......fffff............
            ........................
            ........................
            ........................
            ........................
            `)
    } else if (nemo.tileKindAt(TileDirection.Right, sprites.builtin.oceanDepths9)) {
        nemo.vx = -50
        nemo.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `)
    }
    if (controller.right.isPressed()) {
        alkom.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    } else if (controller.left.isPressed()) {
        alkom.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    }
})

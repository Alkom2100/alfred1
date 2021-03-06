namespace SpriteKind {
    export const bonus = SpriteKind.create()
    export const gun = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const top = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loaded > 0) {
        if (vej == 1) {
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
                `, alkom, 120, 0)
        } else if (vej == 0) {
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
                `, alkom, -120, 0)
        }
        loaded += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gun, function (sprite, otherSprite) {
    fireball.destroy(effects.smiles, 500)
    loaded = 5
})
function make_tilemap (levels: number) {
    if (level == 1) {
        tiles.setTilemap(tiles.createTilemap(hex`460010000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000101010101010000000000040000000000000101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000400000000000000000000010100000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000001010000000004000000000000000000000000000000000000000000000000000000010000000000010000000900000000000000000000000000000000000000000000000000000100000000040000000000000000000000000000000000000000000000000001000000000001000000000601010200000000000301010101010000000001010000000000000001010000000400000000000000000000000101010101010000000000000101080707070707070808010101070101010101010101010000000000000000000000050000000000000101000004000000010101000000010101070707070100000000000001070707070707070708070707070707070707070100000000000000000000000000000505000000000000010100040001010107070101010107070707070701010101010101010107070707070707080707070707070707070701000000000000000000000000000000050500000000000000000101010707070707070707070707070707070707070707070707070707070707070807070707070707070707010000000000000000000000000000000000000000000000010101070707070707070707070707070707070707070707070707070707070707070708070707070707070707070107070707070101010a0a0801080801010101010101010101070707070707070707070707070707070707070707070707070707070707070707070807070707`, img`
            ................................2.....................................
            ................................2.....................................
            ................................2.....................................
            ................................2.....................................
            ................................2.....................................
            ................................2....222..............................
            ..................22.222222.....2......22222..........................
            ..........................2.....2..........22.................2.......
            ..........................22....2...........................2.....2...
            ...........................2....2.........................2.....2.....
            22.......22222....22.......22...2...........222222......22.........222
            .222222222...........2......22..2...222...222....2......2.............
            .....................22......22.2.222..2222......222222222............
            ......................22........222...................................
            ..............................222.....................................
            ............222...2..2222222222.......................................
            `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.builtin.oceanDepths8,sprites.builtin.oceanDepths9,sprites.castle.tilePath5,myTiles.tile2,sprites.castle.rock0,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0,sprites.builtin.coral5,sprites.builtin.oceanDepths3], TileScale.Sixteen))
        monster = sprites.create(img`
            .......55.......
            ..55555555......
            ..5555555555....
            .555555555555...
            55555555555555..
            556166666666665.
            .56ff6666661f65.
            .56666666666665.
            .55555555555555.
            .555555555555555
            .55555555555555.
            .5555222f222255.
            .5555222f2225555
            .5555222f2225555
            .5555222f2225555
            .5555222f2225555
            .5555222f2255555
            .5555522f2255555
            .5555552f2555555
            .555555555555555
            ..55555555555555
            ...55555555555..
            ....555555555...
            .....4.333.4....
            .....4..3..4....
            111..44.33.4....
            .1...44.33.4....
            c1c..4...3.4....
            ccc..4...5.44...
            ccc..4..5.44....
            c.c..4.....44...
            c.c44444.44444..
            `, SpriteKind.boss)
        tiles.placeOnTile(monster, tiles.getTileLocation(55, 11))
        boss_life = 4
    } else if (level == 2) {
        tiles.setTilemap(tiles.createTilemap(hex`96001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000000005000000000000000000000000000101000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060101010101010101000000000101010000000500000000000101000100000101000000000001000000000001000000000000000100000000000000000000000000000001010000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060601010101010100010000000000000000000101060106060101000101000001010101000001000000000001000100000000000000000000010000000001010000000000000100000000000000000000010000000100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060606060606010000000000000000000001060101060106060101060101000001010101000001000101010001000100010000000001010000010000010001010001000000000100000101010000000100010001000100010000000000000000000000000000000000000000000000000001000100000000000100000000070000000000000000000000000000000000060606060606060606060606010000000300000000000401060101060106060101060101060601010101000001000101010001000100010000000001010001010000010001010001000101000101000101010000010100010001000100010000000000010001000000000000000000000000000001000101000100000000000100000000010000000000000000000000000000000000060606060606060606060606010101010101010101010101060101060106060101060101060601010101060601060101010601060106010606010101010601010606010601010601060101060101060101010101010106010601060106010606060101010101010101010106060606010101060601060101060106010606060106060606010606060606060606060606060606060606`, img`
            ......................................................................................................................................................
            ......................................................................................................................................................
            ......................................................................................................................................................
            ......................................................................................................................................................
            ......................................................................................................................................................
            ......................................................................................................................................................
            ......................................................................................................................................................
            ......................................................................................................................................................
            ......................................................................................................................................................
            ......................................................................................................................................................
            222..............2.............22...........2.........................................................................................................
            .22222222....222...2.....22.2..22.....2.....2.......2...............22.......................2........................................................
            ........222222.2.........22.2..22.22..2222..2.....2.2..........2....22......2..........2...2.2........................................................
            ............2..........2.22.2..22.22..2222..2.222.2.2.2....22..2..2.22.2....2..222...2.2.2.2.2.........................2.2.....2......................
            ............2..........2.22.2..22.22..2222..2.222.2.2.2....22.22..2.22.2.22.22.222..22.2.2.2.2.....2.2..............2.22.2.....2....2.................
            ............222222222222.22.2..22.22..2222..2.222.2.2.2..2222.22..2.22.2.22.22.2222222.2.2.2.2...2222222222....222..2.22.2.2...2......................
            `, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.saplingPine,sprites.builtin.crowd4,sprites.builtin.crowd1,sprites.castle.tileDarkGrass3,sprites.builtin.oceanDepths0,sprites.castle.rock0], TileScale.Sixteen))
        loaded = 0
        tiles.placeOnRandomTile(alkom, sprites.castle.saplingPine)
        nemo = sprites.create(img`
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
        tiles.placeOnRandomTile(nemo, sprites.builtin.crowd4)
        nemo.x += 14
    } else {
        game.over(true, effects.blizzard)
    }
}
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
    pause(200)
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
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    level += 1
    make_tilemap(level)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 100)
    boss_life += -1
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
        tiles.placeOnTile(kiste, tiles.getTileLocation(20, 6))
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
        tiles.placeOnTile(fireball, tiles.getTileLocation(40, 11))
    } else {
        game.over(false, effects.slash)
    }
})
let kiste: Sprite = null
let boss_life = 0
let monster: Sprite = null
let fireball: Sprite = null
let projectile: Sprite = null
let vej = 0
let loaded = 0
let nemo: Sprite = null
let alkom: Sprite = null
let mur: tiles.Location[] = []
let level = 0
level = 1
make_tilemap(level)
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
tiles.placeOnRandomTile(alkom, sprites.builtin.coral5)
controller.moveSprite(alkom, 100, 0)
alkom.ay = 300
scene.cameraFollowSprite(alkom)
nemo = sprites.create(img`
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
vej = 1
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
        vej = 1
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
        vej = 0
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
    if (loaded > 0) {
        alkom.say(loaded)
    } else {
        alkom.say("")
    }
    if (boss_life <= 0) {
        monster.destroy(effects.warmRadial, 500)
    }
    if (monster.top <= 110) {
        monster.vy = 50
    } else if (monster.bottom >= 180) {
        monster.vy = -50
    }
})

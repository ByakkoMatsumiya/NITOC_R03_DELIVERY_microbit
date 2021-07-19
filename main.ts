input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(x, y)
    x = 0
    y = 0
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
})
let iy = 0
let ix = 0
let y = 0
let x = 0
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
x = 0
y = -1
loops.everyInterval(1, function () {
    led.plot(x, y)
    if (x < 0) {
        x = 0
    }
    if (x > 4) {
        x = 4
    }
    if (x == ix && y == iy) {
        led.unplot(x, y)
        led.unplot(ix, iy)
        x = 0
        y = 0
    }
    if (led.point(4, 4) && led.pointBrightness(4, 4) == 255) {
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.Target)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showString("GOAL!!")
        basic.clearScreen()
        basic.pause(1000)
        x = 0
        y = 0
    }
})
loops.everyInterval(20000, function () {
    if (y != 4) {
        led.unplot(x, y)
        y += 1
    }
})
loops.everyInterval(randint(1000, 5000), function () {
    led.unplot(ix, iy)
    if (randint(0, 2) == 0) {
        ix = randint(x + 2, x - 2)
        iy = randint(y + 1, y - 1)
    } else {
        ix += randint(-1, 1)
        iy += randint(-1, 1)
    }
    if (ix < 0) {
        ix = 0
    }
    if (iy < 0) {
        iy = 0
    }
    if (ix > 4) {
        ix = 4
    }
    if (iy > 4) {
        iy = 4
    }
    led.plotBrightness(ix, iy, 32)
})

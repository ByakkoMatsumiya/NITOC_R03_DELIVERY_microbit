input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += randint(-1, 1)
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(x, y)
    x = 0
    y = 0
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    y += randint(-1, 1)
})
let iy = 0
let ix = 0
let y = 0
let x = 0
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
y = 0
loops.everyInterval(10000, function () {
    led.unplot(ix, iy)
    iy = randint(0, 4)
    iy = randint(0, 4)
    led.plotBrightness(ix, iy, 32)
})
loops.everyInterval(1, function () {
    led.plot(x, y)
    if (x < 0) {
        x = 0
    }
    if (x > 4) {
        x = 4
    }
    if (y < 0) {
        y = 0
    }
    if (y > 4) {
        y = 4
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

input.onPinPressed(TouchPin.P0, function () {
    y += 1
})
input.onButtonPressed(Button.A, function () {
    x += -1
})
input.onButtonPressed(Button.AB, function () {
    x = 2
    y = 2
})
input.onButtonPressed(Button.B, function () {
    x += 1
})
input.onPinPressed(TouchPin.P1, function () {
    y += -1
})
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
x = 2
y = 2
loops.everyInterval(100, function () {
    led.plot(x, y)
})

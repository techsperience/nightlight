basic.forever(function () {
    serial.writeValue("light", input.lightLevel())
    if (input.lightLevel() < 30) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    } else {
        basic.clearScreen()
    }
})

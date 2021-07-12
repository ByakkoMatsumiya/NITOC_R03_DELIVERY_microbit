basic.show_leds("""
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    """)
basic.pause(100)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    """)
basic.pause(100)

def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(100)
basic.forever(on_forever)

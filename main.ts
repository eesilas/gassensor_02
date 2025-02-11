let recal = 0
basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
let gaslevel = pins.analogReadPin(AnalogReadWritePin.P0)
gaslevel = 600
strip.showRainbow(1, 360)
basic.forever(function () {
    basic.showString("" + (gaslevel))
    if (pins.analogReadPin(AnalogReadWritePin.P0) <= 400) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        recal = 800
        led.plotBarGraph(
        pins.map(
        gaslevel,
        600,
        recal,
        0,
        1023
        ),
        1023
        )
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        led.plotBarGraph(
        pins.map(
        gaslevel,
        600,
        recal,
        0,
        1023
        ),
        1023
        )
    }
})

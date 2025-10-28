radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    led.toggle(0, 0)
    recv = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    int = parseFloat(recv.substr(0, 5))
    radio.sendNumber(int)
})
let int = 0
let recv = ""
radio.setGroup(123)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.showIcon(IconNames.Triangle)

let Change_throttle = 0
input.onButtonPressed(Button.A, function () {
    Change_throttle += -5
})
input.onButtonPressed(Button.B, function () {
    Change_throttle += 5
})
basic.forever(function () {
	
})

board.digital[13].write(HIGH)
board.digital[2].mode = pyfirmata.INPUT
board.digital[].write()
board.digital[13].write()
board.digital[].write(1)
board.digital[].mode = pyfirmata.PWM
board.digital[].write({ frequency: , duty_cycle: 0.5, duration:  })

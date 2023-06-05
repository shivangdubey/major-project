from pyfirmata import Arduino, util
import time

# specify the port to which the arduino is connected
board = Arduino('COM6')

# get a reference to the servo pin
servo_pin = board.get_pin('d:9:s')

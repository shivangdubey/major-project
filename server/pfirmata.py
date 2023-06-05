import serial.tools.list_ports
from pyfirmata import Arduino, util
import time

# specify the port to which the arduino is connected
arduinoPort = ""

ports = serial.tools.list_ports.comports()
for port, desc, hwid in sorted(ports):
    arduinoPort = port
board = Arduino(arduinoPort)

# get a reference to the servo pin
servo_pin = board.get_pin('d:9:s')

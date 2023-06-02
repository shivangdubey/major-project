from pyfirmata import Arduino, util
import time

board = Arduino('COM6')
for i in range(10):
    board.digital[13].write(1)
    time.sleep(2)
    board.digital[13].write(0)
USE_FAKE_GPIO = True # Chage to FALSE if testing in the Raspberry Pi

if USE_FAKE_GPIO:
    from .fake_gpio import GPIO  # For running app
else:
    import RPi.GPIO as GPIO  # For testing in Raspberry Pi


# import ...

class MotorController(object):

    def __init__(self):
        self.working = False

    def start_motor(self):
        self.PIN_STEP = 25  # do not change
        self.PIN_DIR = 8  # do not change
        self.working = True
        # ...
        print('Motor started')

    def is_working(self):
        return self.working

class Car:
    def __init__(self):
        self.model=input("Enter car name:")
        self.color=input("Enter color of car:")
    def car_details(self):
        print(f"This is a {self.color} {self.model} with {self.mpg} MPG. It has a {self.battery_type} battery")
class Electriccar(Car):
    def __init__(self):
        Car.__init__(self)
        self.mpg=input("Enter mpg:")
        self.battery_type=input("Enter battery type:")
    
boom=Electriccar()
boom.car_details()


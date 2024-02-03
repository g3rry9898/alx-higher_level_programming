#!/usr/bin/python3
# Creating an instance of LockedClass
my_obj = MyClass()

# Trying to set a new instance attribute
my_obj.first_name = "John"  # This is allowed
my_obj.last_name = "Doe"    # Raises AttributeError


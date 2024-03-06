#!/usr/bin/python3

class Base:
      """
          Base class for other classes.

              Attributes:
                      id (int): Unique identifier for instances. If not provided, it is auto-assigned.
                          """
    __nb_objects = 0
    
    def __init__(self, id=None):
         """
                 Class constructor.

                         Args:
                                     id (int, optional): If provided, assigns the public instance attribute "id" with this value.
                                                                     Otherwise, increments __nb_objects and assigns the new value to "id".
                                                                             """
        if id is not None:
            self.id = id
        else:
             Base.__nb_objects += 1
                 self.id =  Base.__nb_objects

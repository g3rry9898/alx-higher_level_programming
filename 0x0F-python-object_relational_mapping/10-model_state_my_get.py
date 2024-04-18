#!/usr/bin/python3
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State
import sys

if __name__ == "__main__":
    if len(sys.argv) == 5:
        username = sys.argv[1]
        password = sys.argv[2]
        database = sys.argv[3]
        state_name = sys.argv[4]

        engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'.format(username, password, database))
        Session = sessionmaker(bind=engine)
        session = Session()

        state = session.query(State).filter(State.name == state_name).first()
        if state is not None:
            print(state.id)
        else:
            print("Not found")

        session.close()
    else:
        print("Usage: ./0-select_states.py <username> <password> <database> <state_name>")


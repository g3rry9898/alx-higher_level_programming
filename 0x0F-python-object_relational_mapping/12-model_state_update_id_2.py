#!/usr/bin/python3
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State
import sys

if __name__ == "__main__":
    if len(sys.argv) == 4:
        username = sys.argv[1]
        password = sys.argv[2]
        database = sys.argv[3]

        engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'.format(username, password, database))
        Session = sessionmaker(bind=engine)
        session = Session()

        state = session.query(State).filter(State.id == 2).first()
        if state is not None:
            state.name = "New Mexico"
            session.commit()
        else:
            print("State not found")

        session.close()
    else:
        print("Usage: ./0-change_state.py <username> <password> <database>")


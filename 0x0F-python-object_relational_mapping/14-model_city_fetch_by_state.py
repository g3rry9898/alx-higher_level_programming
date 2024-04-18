#!/usr/bin/python3
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State
from model_city import City
import sys

if __name__ == "__main__":
    if len(sys.argv) == 4:
        username = sys.argv[1]
        password = sys.argv[2]
        database = sys.argv[3]

        engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'.format(username, password, database))
        Session = sessionmaker(bind=engine)
        session = Session()

        for city, state in session.query(City, State).filter(City.state_id == State.id).order_by(City.id):
            print("{}: ({}) {}".format(state.name, city.id, city.name))

        session.close()
    else:
        print("Usage: ./14-model_city_fetch_by_state.py <username> <password> <database>")


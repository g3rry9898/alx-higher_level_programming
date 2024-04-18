#!/usr/bin/python3
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class State(Base):
    __tablename__ = 'states'
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    name = Column(String(128), nullable=False)

if __name__ == "__main__":
    from sqlalchemy import create_engine
    engine = create_engine('mysql+mysqldb://<username>:<password>@localhost:3306/<database>')
    Base.metadata.create_all(engine)


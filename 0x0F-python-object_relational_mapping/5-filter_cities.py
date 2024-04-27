#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    if len(sys.argv) == 5:
        username = sys.argv[1]
        password = sys.argv[2]
        database = sys.argv[3]
        state_name = sys.argv[4]

        db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database)
        cursor = db.cursor()
        cursor.execute("SELECT cities.id, cities.name, states.name FROM cities \
                        JOIN states ON cities.state_id = states.id \
                        WHERE states.name = %s ORDER BY cities.id ASC", (state_name,))
        rows = cursor.fetchall()
        for row in rows:
            print(row)
        cursor.close()
        db.close()
    else:
        print("Usage: ./0-select_cities.py <username> <password> <database> <state_name>")


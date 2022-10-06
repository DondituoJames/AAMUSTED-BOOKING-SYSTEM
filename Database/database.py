import sqlite3
import json
import os
from tkinter import E

DB_DIR = os.path.dirname(os.path.abspath(__file__))

db_path =os.path.join(DB_DIR, "counsellingdb.sqlite3")
print(db_path)

class Database:
    
    @classmethod
    def get_student(self, data):
        query = "SELECT * FROM Student_Profiles WHERE Student_ID = ? AND Index_No = ?"
        
        with sqlite3.connect(db_path) as conn:
            cursor = conn.execute(query, data)
            return cursor.fetchall()
        
    @classmethod
    def get_lec(self, data):
        query = "SELECT * FROM Lecturer_Profiles WHERE Name = ? AND Password = ?"
        
        with sqlite3.connect(db_path) as conn:
            cursor = conn.execute(query, data)
            return cursor.fetchall()
        
    @classmethod
    def add_others(self, data):
        query = "INSERT INTO OTHER_APPOINMENT VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        try:
            with sqlite3.connect(db_path) as conn:
                conn.execute(query, data)
                conn.commit()

            return True
        except Exception as e:
            print(e)
            return False
        
    @classmethod
    def get_oid(self, data):
        query = "SELECT Name FROM Auth_Others WHERE ID = ? AND Name = ? "
        with sqlite3.connect(db_path) as conn:
            cursor = conn.execute(query, data)
            return cursor.fetchall()

    @classmethod
    def add_student(self, data):
        query = "INSERT INTO Student_Appointment VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        try:
            with sqlite3.connect(db_path) as conn:
                conn.execute(query, data)
                conn.commit()

            return True
        except Exception as e:
            print(e)
            return False
        
    @classmethod
    def get_student_based_on_counsellor(self, data):
        query = "SELECT * FROM Student_Appointment WHERE Preferred_Counsellor = ?"
        
        with sqlite3.connect(db_path) as conn:
            cursor = conn.execute(query, (data,))
            return cursor.fetchall()  
        
        
    
    @classmethod
    def get_counsellor(self, data):
        query = "SELECT Name FROM Counsellors WHERE email = ? AND password = ?"
        
        with sqlite3.connect(db_path) as conn:
            cursor = conn.execute(query, data)
            return cursor.fetchall()  
    
    @classmethod
    def add_counsellor(self, data):
        query = "INSERT INTO Available_Counsellor VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
        try:
            with sqlite3.connect(db_path) as conn:
                conn.execute(query, data)
                conn.commit()

            return True
        except Exception as e:
            print(e)
            return False
        
    @classmethod
    def add_lecturer(self, data):
        query = "INSERT INTO Lecturers_Appointment_Record VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
        try:
            with sqlite3.connect(db_path) as conn:
                conn.execute(query, data)
                conn.commit()
            return True
        except Exception as e:
            print(e)
            return False 

    @classmethod
    def executeQuery(self,query):
        try:
            with sqlite3.connect(db_path) as conn:
                cursor = conn.execute(query)
                return cursor.fetchall()
        except Exception as e:
            print(e)
    
    @classmethod
    def countBookings(self, query):
        try:
            with sqlite3.connect(db_path) as conn:
                cursor = conn.execute(query)
                return cursor.fetchall()
        except Exception as e:
            print(e)
         
        






        



# s = Database.add_student(("Adam Sumaila","0544776322","sumailaadams95@yahoo.com","Computer science", 4, "Academic","GPA issues","Know","Dondituo James","Male","Married"))
# print(s)
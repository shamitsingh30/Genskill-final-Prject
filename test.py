import psycopg2
conn = psycopg2.connect(dbname='todo')
cursor = conn.cursor()
cursor.execute("SELECT email FROM users;")
emails = cursor.fetchall()[0][0]
email = "shamit.singh61@gmail.com"
password = '123456'
cursor.execute(f"SELECT password FROM users WHERE email = '{email}'")
correct_password = cursor.fetchone()[0]
cursor.close()
if (email in emails) and (str(password) == str(correct_password)):
    print('Yes')
print(emails)
print(str(correct_password))

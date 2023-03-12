CREATE TABLE IF NOT EXISTS responses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  session_id INT,
  user VARCHAR(50),
  email VARCHAR(50),
  addressLine1 VARCHAR(30),
  addressLine2 VARCHAR(30),
  city VARCHAR(20),
  state VARCHAR(2),
  zipcode INT,
  phone VARCHAR(20),
  ccNum VARCHAR(20),
  expDate DATE,
  cvv INT,
  ccZipcode INT
)
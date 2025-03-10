1 Register a New User
HTTP Method: POST
URL: http://localhost:5000/api/auth/register
Body (JSON):
json
Copy
Edit
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "role": "patient"
}
Response:
This should return a message like "User registered successfully".
2 Login a User
HTTP Method: POST
URL: http://localhost:5000/api/auth/login
Body (JSON):
json
Copy
Edit
{
  "email": "johndoe@example.com",
  "password": "password123"
}
Response:
You will receive a JWT token in the response. Example:
json
Copy
Edit
{
  "token": "your.jwt.token"
}
Save the JWT token, as you’ll use it for authenticated requests.
3.1 Add a New Doctor
HTTP Method: POST
URL: http://localhost:5000/api/doctors
Headers:
Key: Authorization
Value: Bearer <your-jwt-token>
Body (JSON):
json
Copy
Edit
{
  "userId": "doctor_user_id", 
  "specialization": "Cardiology",
  "experience": 5,
  "phone": "1234567890",
  "availableSlots": ["9:00 AM", "10:00 AM"]
}
3.2 Approve a Doctor
HTTP Method: PUT
URL: http://localhost:5000/api/doctors/approve/{doctorId}
Headers:
Key: Authorization
Value: Bearer <your-jwt-token>

4.1 Add a New Patient
HTTP Method: POST
URL: http://localhost:5000/api/patients
Headers:
Key: Authorization
Value: Bearer <your-jwt-token>
Body (JSON):
json
Copy
Edit
{
  "userId": "patient_user_id",
  "age": 25,
  "gender": "Male",
  "phone": "0987654321",
  "medicalHistory": "No chronic illnesses"
}
5.1 Book an Appointment
HTTP Method: POST
URL: http://localhost:5000/api/appointments
Headers:
Key: Authorization
Value: Bearer <your-jwt-token>
Body (JSON):
json
Copy
Edit
{
  "doctorId": "doctor_id",
  "patientId": "patient_id",
  "date": "2025-03-15",
  "time": "9:00 AM"
}
5.2 Get Appointments for a Doctor
HTTP Method: GET
URL: http://localhost:5000/api/appointments/doctor/{doctorId}
Headers:
Key: Authorization
Value: Bearer <your-jwt-token>
Response:
This should return a list of appointments for that doctor:
json
Copy
Edit
[
  {
    "_id": "appointment_id",
    "doctorId": "doctor_id",
    "patientId": "patient_id",
    "date": "2025-03-15",
    "time": "9:00 AM",
    "status": "pending"
  }
]
5.3 Update Appointment Status
HTTP Method: PUT
URL: http://localhost:5000/api/appointments/{appointmentId}
Headers:
Key: Authorization
Value: Bearer <your-jwt-token>
Body (JSON):
json
Copy
Edit
{
  "status": "confirmed"
}

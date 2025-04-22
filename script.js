function login() {
    const id = document.getElementById('enrollmentId').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
  
    if (id === "GATE2025" && pass === "password123") {
      errorMsg.textContent = "Login successful!";
      errorMsg.style.color = "green";
    } else {
      errorMsg.textContent = "Please enter valid credentials.";
      errorMsg.style.color = "red";
    }
  }
  
  function showOtpPopup() {
    document.getElementById("otpPopup").style.display = "flex";
  }
  
  function verifyOtp() {
    const otp = document.getElementById("otpInput").value;
    const otpMsg = document.getElementById("otpMsg");
  
    if (otp === "123456") {
      otpMsg.textContent = "OTP verified. You can reset your password.";
      otpMsg.style.color = "green";
    } else {
      otpMsg.textContent = "Invalid OTP. Try again.";
      otpMsg.style.color = "red";
    }
  }
  
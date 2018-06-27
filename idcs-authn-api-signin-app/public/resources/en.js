const resources = {
  "signin-page-title": "Login",

  // Side bar
  "bar-signin-btn" : "Sign in",
  "bar-signup-btn" : "Sign up",
  "bar-signin-hdr" : "One of us?",
  "bar-signup-hdr" : "Don't have an account?",
  "bar-signin-subhdr" : "Just sign in",

  // Signin form
  "signin-hdr" : "Welcome",
  "signin-username-fld" : "Username",
  "signin-password-fld" : "Password",
  "signin-submit-btn" : "Login",
  "signin-forgot-password-btn" : "Forgot Password?",

  // OTP form
  "otp-hdr" : "Verifying OTP",
  "otp-info-msg" : "Please enter OTP code sent to ",
  "otp-fld" : "OTP Code",
  "otp-submit-btn" : "Verify",

  // TOTP form
  "totp-hdr" : "Verifying Time-based OTP",
  "totp-info-msg" : "Please enter Time-based OTP as displayed in ",
  "totp-submit-btn" : "Verify",

  // Push form
  "push-hdr" : "Verifying Push Notification",
  "push-info-msg" : "A notification has been sent to the Oracle Mobile Authenticator App on your mobile device.",
  "push-approve-info-msg" : "You must approve it for moving forward.",

  // Trusted device
  "td-msg" : "Trust this device for ",
  "td-days-msg" : "days",

  // Social
  "social-user-not-registered-msg" : "User is not registered in IDCS. Please, click here to register.",
  "social-email-fld": "Email",
  "social-givenName-fld": "Given Name",
  "social-familyName-fld": "Family Name",
  "social-mobileNo-fld": "Mobile No",
  "social-phoneNo-fld": "Phone No",
  "social-socialRegisterUser-hdr":"Social Registration",
  "social-cancel-btn": "Cancel",

  // Security Questions form
  "qa-hdr" : "Verifying Security Questions",
  "qa-info-msg" : "Please provide the answers",
  "qa-submit-btn" : "Verify",

  // Enrollment Init
  "enroll-hdr" : "Enabling 2-Step Verification",
  "enroll-subhdr" : "Select a Factor",
  "enroll-skip-msg" : "Skip Enrollment",
  "enroll-switch-msg" : "Switch Factor to Enroll",

  // Enrollment Success
  "enroll-success-hdr" : "2-Step verification method has been set successfully.",
  "enroll-success-btn" : "Done",
  "enroll-anotherfactor-btn" : "Enroll Another Factor",

  "factor-sms-btn" : "OTP over SMS",
  "factor-email-btn" : "OTP over E-Mail",
  "factor-push-btn" : "Push Notifications",
  "factor-totp-btn" : "Time-Based OTP",
  "factor-security_questions-btn" : "Security Questions",
  "factor-bypasscode-btn" : "Bypass Code",

  "factor-sms-desc" : "SMS to Mobile Number",
  "factor-email-desc" : "Send an email with a code to use",
  "factor-push-desc" : "Oracle Authenticator App",
  "factor-totp-desc" : "Time-based OTP",
  "factor-security_questions-desc" : "Security question and answers",
  "factor-bypasscode-desc" : "Use a security bypass code if you cannot use another factor",

  // OTP Enrollment form
  "enroll-otp-hdr" : "Enrolling in OTP over E-Mail ",
  "enroll-otp-info-msg" : "Please enter OTP code sent to ",
  "enroll-otp-fld" : "OTP Code",
  "enroll-otp-submit-btn" : "Enroll",

  // SMS Enrollment form
  "enroll-sms-hdr" : "Enrolling in OTP over SMS",
  "enroll-sms-info-msg" : "Please enter mobile number to send SMS",
  "enroll-sms-fld" : "Mobile Number",
  "enroll-sms-submit-btn" : "Enroll",

  // Security Questions Enrollment form
  "enroll-qa-hdr" : "Enrolling in Security Questions",
  "enroll-qa-info-msg" : "Enter an answer for each chosen question",
  "enroll-qa-answer-fld" : "Answer",
  "enroll-qa-hint-fld" : "Hint",
  "enroll-qa-submit-btn" : "Enroll",
  "enroll-qa-error-sameq-twice-msg" : "Same security question is chosen twice. Please, select another question.",

  // TOTP Enrollment form
  "enroll-totp-hdr" : "Enrolling in Time-based OTP",
  "enroll-totp-scan-msg" : "Scan the QR code with the Oracle Mobile Authenticator App.",
  "enroll-totp-respond-msg": "Then enter the code you see on your phone's screen in the field below.",
  "enroll-totp-fld" : "Time-based OTP Code",
  "enroll-totp-submit-btn" : "Enroll",

  // Push Enrollment form
  "enroll-push-hdr" : "Enrolling in Push Notifications",
  "enroll-push-scan-msg" : "Scan the QR code with the Oracle Mobile Authenticator App.",

  "enroll-taplink-msg": "Tap to enroll your phone.",

  // Bypass code form
  "bypass-hdr" : "Bypass Code",
  "bypass-info-msg" : "Provide your bypass code",
  "bypass-fld" : "Bypass Code",
  "bypass-submit-btn" : "Submit",

  // Backup
  "backup-btn" : "Use an alternative authentication method",
  "backup-msg" : "Choose an alternative authentication method:",

  // Resend code
  "email-did-not-get-msg" : "Did not get the email?",
  "email-resend-btn" : "Resend email",
  "sms-did-not-get-msg" : "Did not get the SMS?",
  "sms-resend-btn" : "Resend SMS",

  // Forgot password
  "forgot-pw-btn" : "Forgot your Password?",
  "forgot-pw-hdr" : "Forgot your Password?",
  "forgot-pw-info-msg" : "Please, enter username for password reset.",
  "forgot-pw-fld" : "Username",
  "forgot-pw-submit-btn" : "Submit",
  "forgot-pw-success-info-msg" : "Password reset email has been sent for username ",
  "forgot-pw-ok-btn": "Ok",
  "forgot-pw-did-not-get-msg": "Did not receive email yet?",
  "forgot-pw-resend-btn": "Resend Email",
  "forgot-pw-incorrect-username-msg": "Incorrect Username?",
  "forgot-pw-incorrect-username-btn": "Fix Username",

  "reset-pw-hdr" : "Reset Password",
  "reset-pw-info-msg" : "Please, fill out password and confirm password.",
  "reset-pw-fld" : "Password",
  "reset-pw-confirm-fld" : "Confirm Password",
  "reset-pw-submit-btn" : "Submit",
  "reset-pw-success-info-msg" : "Your password has been successfully reset.",
  "reset-pw-windows-close-msg" : "You can close this window.",
  "reset-pw-ok-btn": "Ok",
  "reset-pw-nomatch-msg" : "Password and Confirm Password did not match! Please, retry.",

  //Self RegistrationProfiles
  "signup-chooseprofile": "Choose a Self Registration Profile",
  "signup-hdr": "Get on board!",
  "signup-noprofile": "No registration profiles available",
  "signup-btn": "Sign Up",
  "signup-btndone": "DONE",
  "signup-btnok": "Ok",
  "signup-passwordmatch": "Password and Confirm Password do not match",
  "signup-consent": "I Agree",
  "signup-hello-msg": "Hello, ",
  "signup-reg-success-msg": "Your registration was successful. You should get a confirmation email shortly...",
  "signup-reg-complete-msg": "Self Registration is Complete.<BR/>You can close this window.",

  // Misc
  "loading-msg" : "Loading...",
  "or-msg" : "or",
  "back-to-login-msg" : "Back to Login",

  // Errors
  "error-required-fld" : "Required field empty",
  "error-AUTH-1120" : "Invalid state. Please, reinitiate login.",
  "error-SDK-AUTH-9000" : "Initialization failed: no access token. Please, contact the administrator.",
  "error-SDK-AUTH-9001" : "Initialization failed: no initial state. Please, contact the administrator.",
  "error-SDK-AUTH-9010" : "An unexpected error occurred. Please, contact the administrator.",
  "error-SDK-AUTH-9011" : "An unexpected error occurred. Please, contact the administrator.",
  "error-SDK-AUTH-9020" : "Password reset failed. Your link for resetting the password might have expired.",
  "error-SDK-AUTH-9021" : "Chosen password violates one or more policies:",
  "error-SDK-AUTH-9999" : "Internal system error: invalid data. Please contact the administrator.",

  "error-SSO-1002" : "User is locked in Oracle Identity Cloud Service. You can either use the \"Forgot Password?\" function or contact the administrator to unlock.",
  "error-SSO-1003" : "User is deactivated in Oracle Identity Cloud Service. Please, contact the administrator."

}

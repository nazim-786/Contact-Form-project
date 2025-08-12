# Contact-Form-project
# A responsive contact form with client-side validation built using HTML, CSS, and JavaScript. The form ensures users enter valid data before submission and provides real-time feedback.

- Validates: Name, Email, and Message fields
- Prevents submission if inputs are invalid
- Displays error messages for incorrect inputs
- Shows success message on valid submission

 ## Features
# Form Fields:
- Name (Text input, minimum 2 characters)
- Email (Valid email format check)
- Message (Minimum 10 characters)

# Validation:
- Checks for empty fields
- Regex-based email validation
- Minimum length enforcement
- Special character restrictions (for name field)
  
## User Feedback:
- Error messages below invalid fields
  
## Usage
# Fill the form:
- Name: At least 2 letters (no numbers/symbols)
- Email: Must be valid (e.g., user@example.com)
- Message: Minimum 10 characters
- 
## Submit:
- If invalid → Errors appear
- If valid → Success message appears
  
## Testing
# Tested for:
- Empty submission → Shows all errors
- Invalid email → Highlights email field
- Short name/message → Enforces min length
- Special chars in name → Allows only valid chars
- Success message on valid submission

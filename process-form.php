<?php
// Simple PHP Form Handler for Cityline Signs
// No dependencies, works with any hosting provider

// Prevent direct access
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit();
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Basic validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// If there are errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration
$to = 'ken@citylinesigns.com'; // Replace with your actual email
$subject = 'New Contact Form Submission - Cityline Signs';

// Build email content
$emailContent = "Hello,\n\n";
$emailContent .= "You have received a new contact form submission from your website:\n\n";
$emailContent .= "Name: " . $name . "\n";
$emailContent .= "Email: " . $email . "\n";
$emailContent .= "Phone: " . ($phone ? $phone : 'Not provided') . "\n";
$emailContent .= "Message:\n" . $message . "\n\n";
$emailContent .= "This inquiry was sent from your Cityline Signs website contact form.\n\n";
$emailContent .= "Best regards,\nCityline Signs Website";

// Email headers
$headers = "From: Cityline Signs <ken@citylinesigns.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
$mailSent = mail($to, $subject, $emailContent, $headers);

if ($mailSent) {
    // Success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
} else {
    // Error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'errors' => ['Sorry, there was an error sending your message. Please try again or contact us directly.']
    ]);
}
?> 
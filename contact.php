<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data and sanitize input
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email and subject
    $to = "savinigunarathna7@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    // Create the email body
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Email headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you, $name! Your message has been sent successfully.";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>


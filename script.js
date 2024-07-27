document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_jlsvhfh', 'template_b9hrb2b', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});


function toggleCourseDetails(courseId) {
    var courseDetails = document.getElementById(courseId);
    if (courseDetails.style.display === "block") {
        courseDetails.style.display = "none";
    } else {
        courseDetails.style.display = "block";
    }
}

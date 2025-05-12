---
layout: base
title: Contact
permalink: /contact/
---

<section class="container py-5">
  <h1 class="mb-4">Contact</h1>
  <p class="mb-4">
    Interested in working together or have a question? Fill out the form below or email me at
    <span class="text-primary">
      <a href="mailto:hashim&#64;example.com">hashim&#64;example.com</a>
    </span>.
  </p>
  <form 
    name="contact" 
    method="POST" 
    data-netlify="true" 
    netlify-honeypot="bot-field"
    class="row g-3"
  >
    <input type="hidden" name="form-name" value="contact">
    <div class="d-none">
      <label>Don’t fill this out if you’re human: <input name="bot-field"></label>
    </div>
    <div class="col-md-6">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" name="name" required>
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" required>
    </div>
    <div class="col-12">
      <label for="subject" class="form-label">Subject</label>
      <input type="text" class="form-control" id="subject" name="subject" required>
    </div>
    <div class="col-12">
      <label for="message" class="form-label">Message</label>
      <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Send Message</button>
    </div>
  </form>
</section>

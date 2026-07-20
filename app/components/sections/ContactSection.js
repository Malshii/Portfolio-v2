"use client";
import {
  LuAtSign,
  LuGithub,
  LuLinkedin,
  LuMapPin,
  LuPhone,
  LuSend,
} from "react-icons/lu";
import PrimaryButton from "../ui/PrimaryButton";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email address.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!form.subject.trim()) {
      toast.error("Please enter a subject.");
      return false;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message.");
      return false;
    }

    if (form.message.trim().length < 15) {
      toast.error("Message should contain at least 15 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to send message.");
        return;
      }

      toast.success("Message sent successfully! I'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section-reveal" id="contact">
      <div className="contact-shell">
        <div className="contact-layout">
          <aside className="contact-overview glass-card">
            <p className="contact-eyebrow">Get In Touch</p>
            <h2>Let's create impactful software solutions</h2>
            <p className="contact-intro">
              Whether you're looking for a Full Stack Software Engineer,
              collaborating on a project, or simply want to connect, I'd love to
              hear from you. Feel free to reach out and let's discuss how we can
              work together.
            </p>

            <div className="contact-meta-grid">
              <a
                className="contact-meta-card"
                href="mailto:malshi.kulasinghe@gmail.com"
              >
                <span className="contact-meta-icon" aria-hidden="true">
                  <LuAtSign />
                </span>
                <span className="contact-meta-text">
                  <strong>Email</strong>
                  <small>malshi.kulasinghe@gmail.com</small>
                </span>
              </a>

              <a className="contact-meta-card" href="tel:+94769396646">
                <span className="contact-meta-icon" aria-hidden="true">
                  <LuPhone />
                </span>
                <span className="contact-meta-text">
                  <strong>Phone</strong>
                  <small>+94 76 939 6646</small>
                </span>
              </a>

              <div className="contact-meta-card">
                <span className="contact-meta-icon" aria-hidden="true">
                  <LuMapPin />
                </span>
                <span className="contact-meta-text">
                  <strong>Location</strong>
                  <small>Colombo, Sri Lanka</small>
                </span>
              </div>
            </div>

            <div className="contact-social-row" aria-label="Social links">
              <a
                href="https://linkedin.com/in/malshii/"
                target="_blank"
                rel="noreferrer"
              >
                <LuLinkedin aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/malshii"
                target="_blank"
                rel="noreferrer"
              >
                <LuGithub aria-hidden="true" />
                GitHub
              </a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="contact-form glass-card">
            <div className="contact-form-head">
              <h3>Send Me a Message</h3>
              <p>
                I'd be happy to discuss your project, answer your questions, or
                explore potential collaboration opportunities.
              </p>
            </div>

            <div className="contact-input-grid">
              <label>
                Name
                <input
                  type="text"
                  placeholder="Your full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                />
              </label>
            </div>

            <label>
              Subject
              <input
                type="text"
                placeholder="Project or Collaboration"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                disabled={loading}
              />
            </label>

            <label>
              Message
              <textarea
                rows="5"
                placeholder="Tell me about your project or how I can help..."
                name="message"
                value={form.message}
                onChange={handleChange}
                disabled={loading}
              />
            </label>

            <PrimaryButton
              type="submit"
              disabled={loading}
              className="contact-submit-btn"
            >
              <LuSend aria-hidden="true" />
              {loading ? "Sending..." : "Send Message"}
            </PrimaryButton>
          </form>
        </div>
      </div>
    </section>
  );
}

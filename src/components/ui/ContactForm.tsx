'use client';

import React, { useState } from 'react';
import styles from '@/styles/modules/contactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    acceptance: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.acceptance) newErrors.acceptance = 'You must agree to the privacy policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          acceptance: false,
        });
      } else {
        const data = await response.json();
        setSubmitError(data.error || 'Failed to send message');
      }
    } catch (err) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.fields}>
        <div className={styles.field}>
          <input
            className={`o-input ${errors.name ? 'is-invalid' : ''}`}
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            maxLength={400}
          />
          {errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
        </div>
        
        <div className={styles.field}>
          <input
            className="o-input"
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            maxLength={400}
          />
        </div>

        <div className={styles.field}>
          <input
            className={`o-input ${errors.email ? 'is-invalid' : ''}`}
            type="email"
            name="email"
            placeholder="Mail*"
            value={formData.email}
            onChange={handleChange}
            maxLength={400}
          />
          {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
        </div>

        <div className={styles.field}>
          <input
            className="o-input"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={400}
          />
        </div>

        <div className={`${styles.field} ${styles.message}`}>
          <textarea
            className={`o-text-area ${errors.message ? 'is-invalid' : ''}`}
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            maxLength={2000}
          />
          {errors.message && <div className={styles.errorMessage}>{errors.message}</div>}
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.acceptance}>
          <label>
            <input
              type="checkbox"
              name="acceptance"
              className="o-checkbox"
              checked={formData.acceptance}
              onChange={handleChange}
            />
            <span>
              I agree to the processing of my data in accordance with the <a href="/privacy" className={styles.acceptanceLink} target="_blank" rel="noopener noreferrer">Privacy Policy</a> declaration. Your data will be treated confidentially and will not be passed on to third parties without authorization.
            </span>
          </label>
          {errors.acceptance && <div className={styles.errorMessage}>{errors.acceptance}</div>}
        </div>

        <button className="btn is-black" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>

      {submitSuccess && <div className={styles.successMessage}>Message sent successfully!</div>}
      {submitError && <div className={styles.submitError}>{submitError}</div>}
    </form>
  );
}

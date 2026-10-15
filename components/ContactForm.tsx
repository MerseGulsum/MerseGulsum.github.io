"use client";

import { Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Fields = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

// Messages are delivered by FormSubmit (formsubmit.co) straight to this inbox.
// The very first submission sends an activation email to this address; click "Activate" once.
const CONTACT_EMAIL = "gulsumkocan.123@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type NoticeType = "info" | "success" | "error";

const initialFields: Fields = {
  name: "",
  surname: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState<NoticeType>("info");
  const [honeypot, setHoneypot] = useState("");

  const errors = useMemo(() => validate(fields), [fields]);
  const hasErrors = Object.keys(errors).length > 0;

  const update = (field: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    setNotice("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, surname: true, email: true, message: true });

    if (hasErrors) {
      setNoticeType("error");
      setNotice("Please fix the highlighted fields before continuing.");
      return;
    }

    // Bots fill the hidden field; quietly pretend success
    if (honeypot) {
      setNoticeType("success");
      setNotice("Thank you! Your message has been sent.");
      return;
    }

    setLoading(true);
    setNotice("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: `${fields.name.trim()} ${fields.surname.trim()}`,
          email: fields.email.trim(),
          message: fields.message.trim(),
          _replyto: fields.email.trim(),
          _subject: `New portfolio message from ${fields.name.trim()} ${fields.surname.trim()}`,
          _template: "table",
          _captcha: "false"
        })
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error("send failed");
      }

      setFields(initialFields);
      setTouched({});
      setNoticeType("success");
      setNotice("Thank you! Your message has been sent. I'll get back to you as soon as possible.");
    } catch {
      setNoticeType("error");
      setNotice(`Something went wrong. Please try again or email me at ${CONTACT_EMAIL}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      <div className="form-grid">
        <Field
          id="name"
          label="Name"
          value={fields.name}
          error={touched.name ? errors.name : undefined}
          onBlur={() => setTouched((current) => ({ ...current, name: true }))}
          onChange={(value) => update("name", value)}
          autoComplete="given-name"
        />
        <Field
          id="surname"
          label="Surname"
          value={fields.surname}
          error={touched.surname ? errors.surname : undefined}
          onBlur={() => setTouched((current) => ({ ...current, surname: true }))}
          onChange={(value) => update("surname", value)}
          autoComplete="family-name"
        />
      </div>
      <Field
        id="email"
        label="Email"
        type="email"
        value={fields.email}
        error={touched.email ? errors.email : undefined}
        onBlur={() => setTouched((current) => ({ ...current, email: true }))}
        onChange={(value) => update("email", value)}
        autoComplete="email"
      />
      <div className="field">
        <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
        <textarea
          id="message"
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, message: true }))}
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby={touched.message && errors.message ? "message-error" : undefined}
          required
          rows={6}
        />
        {touched.message && errors.message ? (
          <p className="field-error" id="message-error" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button className="button-reset contact-form__submit" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
        <Send size={16} aria-hidden="true" />
      </button>
      {notice ? (
        <p className={`form-notice form-notice--${noticeType}`} role="status" aria-live="polite">
          {notice}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  onChange,
  onBlur
}: {
  id: keyof Fields;
  label: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}) {
  const errorId = `${id}-error`;

  return (
    <div className={`field${id === "surname" ? " field--surname" : ""}`}>
      <label htmlFor={id}>{label} <span aria-hidden="true">*</span></label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        autoComplete={autoComplete}
        required
      />
      {error ? (
        <p className="field-error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function validate(fields: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.surname.trim()) errors.surname = "Surname is required.";
  if (!fields.email.trim()) errors.email = "Email is required.";
  if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!fields.message.trim()) errors.message = "Message is required.";
  if (fields.message.trim().length > 0 && fields.message.trim().length < 20) {
    errors.message = "Add a little more detail so the project context is clear.";
  }
  return errors;
}

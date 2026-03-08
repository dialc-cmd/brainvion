# Security Policy

## 🛡️ Architecture & Threat Matrix

BrainVION is currently in its Minimal Viable Product (MVP) stage. By design, the application prioritizes security through minimal attack surfaces:

- **No Backend Server:** The application is statically generated via Next.js (SSG) and hosted on Vercel.
- **No Database / Authentication:** There are no user accounts, passwords, or session tokens stored on the platform.
- **No Payment Processors:** Financial transactions are not handled on the website.
- **Data Handling:** All sensitive data intake (Student House applications) is completely offloaded to external Google Forms.

Consequently, traditional vulnerabilities (SQL injection, XSS session hijacking, CSRF) pose minimal to zero risk initially.

---

## 📦 Supported Versions

Security updates and dependency audits will be applied exclusively to the `main` branch deployed to production. 

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability—such as an exposed API key in the source code, a supply chain vulnerability in a dependency (e.g., Next.js, Tailwind), or an issue with the Service Worker caching mechanism—please report it privately.

**Please DO NOT open a public GitHub issue for security problems.**

Instead, report it directly via email:
✉️ **brainvion.community@gmail.com**

Please include:
- Description of the vulnerability.
- Steps to reproduce.
- Potential impact on the static frontend.

---

## Response Process

The BrainVION maintainers will:
1. Acknowledge receipt of the report.
2. Investigate the supply-chain or frontend issue.
3. Apply a fix and redeploy the static bundle.

Thank you for helping keep BrainVION secure and reliable for students.

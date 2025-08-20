# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1   | :x:                |

## Reporting a Vulnerability

We take the security of The Wild Oasis seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to security@wildoasis.com.

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the requested information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:

- Type of issue (buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the vulnerability
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

This information will help us triage your report more quickly.

## Security Best Practices

### For Users
- Keep your dependencies updated
- Use strong, unique passwords
- Enable two-factor authentication when available
- Report security issues promptly

### For Developers
- Follow secure coding practices
- Implement proper input validation
- Use environment variables for sensitive data
- Regular security audits
- Keep dependencies updated

## Security Features

The Wild Oasis implements several security measures:

- **Authentication**: NextAuth.js for secure user sessions
- **Database Security**: Row Level Security (RLS) policies
- **Input Validation**: Server-side validation for all forms
- **Environment Variables**: Secure configuration management
- **HTTPS**: Enforced in production
- **CORS**: Properly configured
- **XSS Protection**: Content Security Policy headers

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the problem and determine the affected versions
2. Audit code to find any similar problems
3. Prepare fixes for all supported versions
4. Release new versions with the fixes
5. Publicly announce the vulnerability

## Credits

We would like to thank all security researchers and users who have responsibly disclosed vulnerabilities to us.

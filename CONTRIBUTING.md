# Contributing to BrainVION

Thank you for your interest in contributing to BrainVION! We welcome contributions from university students, interns, and developers looking to build real-world engineering skills.

Before you submit a Pull Request, you **MUST** ensure your code adheres to our strict architectural guidelines designed by our Lead Architect.

---

## 🏛️ Strict Engineering Standards

BrainVION enforces international engineering standards to train junior developers correctly. Any PR failing these checks will be rejected.

### 1. Mandatory File Header
EVERY substantive proprietary logic file (`.ts`, `.tsx`, `.js`) **MUST** begin exactly with the following header:

```typescript
/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * -----------------------------------------------------------------------------
 * © 2026 Brainvion. All Rights Reserved.
 *
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * STANDARD: International Students and Young Professional Engineering 
 * NOTICE: This software and its associated logic are the sole intellectual 
 * property of Brainvion. Unauthorized copying, modification, or 
 * distribution is strictly prohibited.
 *
 * =============================================================================
 */
```

### 2. The 'Rationale-First' Commenting Standard
All logical blocks, complex components, or standalone functions must use the **3-Line Context Rule**:

```typescript
// Community REQUIREMENT [Brainvion]: [Why does the community/user need this feature?]
// TECHNICAL IMPLEMENTATION: [Why did we use this specific pattern/technology?]
// QA/QC ADVISORY: [What should testers or reviewers look for?]
```

### 3. Engineering Rigor
- **ZERO Magic Numbers:** Do not hardcode layout dimensions in your `className` or CSS. You must export and utilize sizing variables from `src/lib/constants.ts`.
- **Golden Ratio:** Typography and layout scaling must leverage the standard golden ratio ($\Phi \approx 1.618$) for premium visual balance.
- **Strict Typing:** We require **100% TypeScript coverage**. The use of the `any` type is strictly forbidden.

---

## 🚀 How to Contribute

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your feature or fix (e.g., `git checkout -b feature/new-card-layout`).
3. **Make your changes** adhering to the standards above.
4. **Test your changes** locally (`npm run build`). Ensure zero TypeScript errors and maintain the sub-2-second load time rule.
5. **Submit a Pull Request** with a descriptive name and summary of your implementation.

---

## 🤝 Community Culture

BrainVION is a student-first community. Respectful collaboration, eager learning, and positive communication are expected at all times. By contributing, you agree to abide by our `CODE_OF_CONDUCT.md`.

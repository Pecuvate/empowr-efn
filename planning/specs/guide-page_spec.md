# Freelancer Guide Page — Spec

`efn.empowrcic.org/guide` — the full EFN freelancer guide.

**Status:** Ready to build
**Route:** `/guide`
**Content source:** `Freelancer-Workflow/docs/guidebooks/efn-public-page.md`

> **Purpose:** This is the permanent home for the detailed EFN guide — replacing the interim Notion page. It is linked from the onboarding form at `dashboard.empowrcic.org/onboard` as "Learn more about EFN". Prospective freelancers read this before or during onboarding.

---

## Purpose

A long-form guide page for prospective and active freelancers. Covers what the EFN is, how to join, how payment works, and FAQs. Content-first — clean and readable, not a marketing page.

---

## Page Sections

### 1. Page Header

| Element | Content |
|---|---|
| Eyebrow | `Freelancer Guide` |
| Headline | `Everything you need to know about the EFN` |
| Body | `From joining the network to getting paid — this guide covers the full picture.` |
| CTA | `Join the Network` → `https://dashboard.empowrcic.org/onboard` |
| Background | `--card` (`#ffffff`) |

Simpler than the homepage hero — no secondary CTA. Headline: H1, weight 900. Body: weight 400. CTA: solid `--blue` button.

---

### 2. Anchor Navigation

Sticky horizontal nav bar with four pill links that jump to each section. Sticks below the page header as the user scrolls.

| Label | Anchor |
|---|---|
| About the EFN | `#about` |
| Joining the Network | `#joining` |
| Getting Paid | `#getting-paid` |
| FAQs | `#faqs` |

Background: `--card` with a `1px` bottom border using `--border`. Active pill: `--blue` bg, white text. Inactive: `--muted` text, `--card` bg.

---

### 3. About the EFN (`#about`)

Background: `--card`.

**What is the Empowr Freelancer Network?**

The Empowr Freelancer Network (EFN) is a community of coaches, facilitators, and operations professionals delivering Empowr's programmes across the UK. Members take on assignments on a flexible, shift-based basis — contributing to work that promotes life-long wellbeing through experiential learning activities.

We handle the admin — so you can focus on the work.

**Roles Available**

Table with two columns: Role and Rate.

| Role | Rate |
|---|---|
| Head Coach | £20.00 per hour |
| Assistant Coach (21 and over) | £13.00 per hour |
| Assistant Coach (18–20) | £11.00 per hour |
| Operations & Support Roles | £13.00 per hour |

Callout below table: *Rates are reviewed periodically. Your agreed rate will be confirmed in writing as part of your onboarding.*

**Who Can Join?**

Three criteria as a bulleted list:
- Self-employed (or willing to register as self-employed)
- Eligible to work in the UK
- Available for shift-based assignments

---

### 4. Joining the Network (`#joining`)

Background: `--blue-pale` (`#eef3fc`).

**How It Works**

Vertical four-step list.

| Step | Title | Body |
|---|---|---|
| 1 | Complete the onboarding form | Fill in your personal details, address, tax information, and bank details. This takes around 5 minutes. |
| 2 | Sign your Freelance Services Agreement | You will receive an email with your personalised agreement. Read it carefully and sign it electronically — this usually takes less than 2 minutes. The agreement covers your terms of engagement, consent to the self-billing arrangement, and confirmation that you are self-employed. |
| 3 | Your profile is set up | Once your agreement is signed, we will set up your profile on Sling — our scheduling platform. You will receive a welcome email with instructions on how to get started. |
| 4 | You're ready to work | Once your profile is active, your manager will be in touch to schedule your first assignment. |

**What Is the Self-Billing Arrangement?**

Under a self-billing arrangement, Empowr CIC generates invoices on your behalf once your timesheet is approved. You do not need to send us an invoice — we handle it for you.

This is agreed in your Freelance Services Agreement and is fully compliant with HMRC guidelines (VAT Notice 700/62).

Warning callout: *You must not submit your own invoice for work covered by this agreement. Doing so creates a duplicate and will delay your payment.*

**What You Will Need**

Four items as a bulleted list:
- National Insurance number
- Unique Taxpayer Reference (UTR) — if you have one
- UK bank account details (sort code and account number)
- UK address

Info callout: *Don't have a UTR yet? You can still join — UTR is optional at the onboarding stage. You will need to register for Self Assessment with HMRC once you begin earning as a freelancer.*

---

### 5. Getting Paid (`#getting-paid`)

Background: `--card`.

**How Payment Works**

Once your timesheet is approved by your manager, we generate your invoice and process your payment. You do not need to do anything.

Payments are made on the **last Friday of each calendar month**.

**The Payment Journey — Step by Step**

Vertical four-step list.

| Step | Title | Body |
|---|---|---|
| 1 | Log your hours | After completing an assignment, log your hours in Sling as soon as possible. Include the date(s) worked, role, and total hours. |
| 2 | Timesheet approval | Your manager reviews and approves your timesheet in Sling. Once approved, you will receive a confirmation email with a summary of hours, your agreed rate, and the total amount due. |
| 3 | Invoice generated | We generate a self-billed invoice on your behalf. You will receive a copy by email — keep this for your tax records. It is your record of income for HMRC self-assessment. |
| 4 | Payment sent | On the last Friday of the month, your payment is processed via bank transfer. Funds typically arrive within 1–2 working days. |

Warning callout after Step 2: *This is your chance to flag any discrepancies. Reply immediately if anything looks incorrect — once the invoice is raised it is harder to amend.*

Info callout after Step 3: *We will not re-issue invoice copies on request after 30 days.*

**Payment Cut-off Dates**

To be included in a given month's payment run, your timesheet must be approved by your manager before the monthly cut-off date. Timesheets approved after cut-off roll into the following month.

Info callout: *The cut-off is based on the approval date, not the submission date. Submit your timesheet with enough time for your manager to review it before cut-off.*

Empowr CIC will communicate cut-off dates at the start of each month.

---

### 6. FAQs (`#faqs`)

Background: `--blue-pale` (`#eef3fc`).

Accordion — each question expands to reveal the answer. One open at a time.

| Question | Answer |
|---|---|
| Do I need to send an invoice? | No. Under the self-billing arrangement in your Freelance Services Agreement, we generate invoices on your behalf. You must not submit your own invoice. |
| Where do I log my hours? | In Sling. Your manager will walk you through this when your profile is set up. |
| When will I be paid? | On the last Friday of each calendar month, provided your timesheet was approved before the cut-off date. |
| What if my hours look wrong on the approval email? | Reply immediately. Once the invoice is raised it is harder to amend. Do not wait. |
| I haven't received my payment — what do I do? | Wait at least 2 working days from the payment date. If it still hasn't arrived, reply to the payment confirmation email and we will investigate. |
| Do I need the invoice for my tax return? | Yes. The invoice emailed to you after your timesheet is approved is your record of income for HMRC self-assessment. Keep it — we will not re-issue copies after 30 days. |
| Do I need to register as self-employed? | Yes. If you are not already registered, you will need to register for Self Assessment with HMRC once you begin earning as a freelancer. You can register at gov.uk/register-for-self-assessment |
| What if I don't have a UTR? | You can still complete onboarding without one. Your UTR is issued when you register for Self Assessment — see gov.uk/register-for-self-assessment |

---

### 7. CTA Strip

Pre-footer join prompt.

| Element | Content |
|---|---|
| Heading | `Ready to join the network?` |
| Body | `Fill in the onboarding form and you'll be set up and ready to work in minutes.` |
| CTA | `Join the Network` → `https://dashboard.empowrcic.org/onboard` |

Background: `--blue`. Text: white. Button: white bg, `--blue` text.

---

### 8. Footer

Same as homepage — 3-column layout, collapsible on mobile.

| Column | Element | Value |
|---|---|---|
| Brand | Name | `Empowr Freelancer Network` |
| Brand | Tagline | `Promoting life-long wellbeing through experiential learning activities.` |
| Legal | Terms and Conditions | Link to Pecuvate LegalHub (confirm URL at build time) |
| Legal | Privacy Policy | Link to Pecuvate LegalHub (confirm URL at build time) |
| Links | Find Out More | This page (`/guide`) |
| Links | Contact | `efn@empowrcic.org` |
| Bottom | Copyright | `© Empowr CIC` |

Background: `--black` (`#1B1B1B`). Text: `--muted` / white. Links: `--blue-light` on hover.

---

## Navigation

Link back to homepage in the page header (e.g. `← Back to EFN` above the eyebrow). No full nav bar on this page at launch — consistent with homepage.

---

## Responsive Behaviour

| Section | Mobile | Desktop |
|---|---|---|
| Page Header | Stacked, centred | Centred, max-width 720px |
| Anchor Nav | Horizontally scrollable pill row | Sticky horizontal bar, centred |
| Content sections | Single column, full width | Single column, max-width 720px, centred |
| Roles table | Scrollable if needed | Full width within content column |
| Step lists | Vertical | Vertical |
| FAQ accordion | Full width | Full width within content column |
| CTA Strip | Stacked, centred | Centred |
| Footer | Stacked | 3-column |

---

## Brand Application

Same as homepage — inherits from `globals.css`:
- **Font:** Nunito (weights 400, 600, 800, 900)
- **Colours:** brand tokens via `@theme`
- **Callout blocks:** `--blue-pale` bg, `--blue` left border (`4px`), `14px` radius — two variants: info (blue border) and warning (amber border using a `--warning` token if defined, else `--blue`)
- **Accordion:** shadcn/ui `Accordion` component
- **Table:** plain `<table>` styled with brand border tokens

---

## Component List

| Component | File | Notes |
|---|---|---|
| GuideHeader | `src/components/guide/GuideHeader.tsx` | Eyebrow, headline, body, CTA, back link |
| AnchorNav | `src/components/guide/AnchorNav.tsx` | Sticky pill nav, active state on scroll |
| GuideSection | `src/components/guide/GuideSection.tsx` | Section wrapper with id, heading, bg |
| RolesTable | `src/components/guide/RolesTable.tsx` | Roles and rates table |
| StepList | `src/components/guide/StepList.tsx` | Numbered step list — reused for joining and payment |
| Callout | `src/components/guide/Callout.tsx` | Info and warning callout block |
| FAQAccordion | `src/components/guide/FAQAccordion.tsx` | Accordion — wraps shadcn/ui Accordion |
| CTAStrip | `src/components/guide/CTAStrip.tsx` | Pre-footer CTA band |
| Footer | `src/components/Footer.tsx` | Shared with homepage |

---

## Out of Scope

- Role descriptions or detailed programme content
- HMRC resources or external links beyond gov.uk/register-for-self-assessment
- Authentication or gating — this page is fully public
- Search or filtering within the guide

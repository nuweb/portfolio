# Portfolio Site Plan: veeracs.info

A step-by-step guide to building and deploying a portfolio/resume website at veeracs.info.

## Overview

**Goal**: Create a beautiful, responsive portfolio site that showcases your 2-page resume at veeracs.info

**Tech Stack** (keeping it simple for a static portfolio):
- **Framework**: React + Vite (fast, modern, simple)
- **Styling**: Tailwind CSS (rapid, responsive design)
- **Hosting**: AWS S3 + CloudFront (same pattern as ecommerce.veeracs.info)
- **Build Tool**: Nx (consistent with existing projects)

**Domain Structure**:
- `veeracs.info` → Portfolio site (this project)
- `ecommerce.veeracs.info` → E-commerce demo (already deployed)

---

## Resume Content Summary

### Page 1 - Professional Overview
- **Header**: Chandra Sekhar Veera | Contact Info
- **Professional Summary**: Senior Front-End Engineer, 15+ years
- **Technical Skills**: Languages, Libraries, Tools, Testing, Databases, Runtime
- **Work Experience** (Recent):
  - Senior Front End Engineer — WorkBoard AI (Jan 2022 – Jan 2026)
  - Lead Front End Engineer — Oracle (Aug 2017 – Jan 2022)

### Page 2 - Additional Experience
- **Work Experience** (Continued):
  - Senior Software Consultant — Northrop Grumman (Feb 2017 – Aug 2017)
  - Principal Architect — Fusion Media Group (Nov 2015 – Jan 2017)
  - Senior Software Engineer — Condé Nast (Mar 2012 – Nov 2015)
- **Early Career**: TD Ameritrade, Avenue A Razorfish, Ameritrade
- **Education**: MS & BS in Computer Science
- **Awards**: People's Choice Award, Toshiba Scholarship

---

## Step-by-Step Implementation Plan

### Phase 1: Project Setup

- [ ] **1.1 Create New Nx Workspace**
  ```bash
  cd ~/Sites
  npx create-nx-workspace@latest portfolio --preset=react-standalone
  ```

- [ ] **1.2 Configure Project Structure**
  ```
  portfolio/
  ├── src/
  │   ├── app/
  │   │   ├── components/
  │   │   │   ├── Header.tsx
  │   │   │   ├── Hero.tsx
  │   │   │   ├── Skills.tsx
  │   │   │   ├── Experience.tsx
  │   │   │   ├── Education.tsx
  │   │   │   ├── Awards.tsx
  │   │   │   └── Contact.tsx
  │   │   ├── App.tsx
  │   │   └── App.css
  │   ├── main.tsx
  │   └── index.html
  ├── public/
  │   ├── favicon.ico
  │   └── resume.pdf (downloadable version)
  ├── docs/
  │   └── PORTFOLIO_PLAN.md
  ├── infra/
  │   ├── main.tf
  │   └── variables.tf
  └── .github/
      └── workflows/
          └── deploy.yml
  ```

- [ ] **1.3 Install Dependencies**
  ```bash
  npm install
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

---

### Phase 2: Design & Development

- [ ] **2.1 Design System**
  - Color palette: Professional blues/grays with accent color
  - Typography: Clean, readable fonts (Inter, Source Sans Pro)
  - Layout: Single-page scrolling or multi-section with navigation
  - Responsive: Mobile-first, looks great on all devices

- [ ] **2.2 Component Development**

  | Component | Description |
  |-----------|-------------|
  | `Header` | Navigation + Name + Download Resume button |
  | `Hero` | Large intro with title, summary, contact icons |
  | `Skills` | Visual skill tags/badges grouped by category |
  | `Experience` | Timeline or card-based job history |
  | `Education` | Academic background |
  | `Awards` | Achievements and recognition |
  | `Contact` | Footer with links (email, LinkedIn, GitHub) |

- [ ] **2.3 Animations & Polish**
  - Smooth scroll navigation
  - Subtle entrance animations (Framer Motion or CSS)
  - Interactive skill badges
  - Dark/light mode toggle (optional)

- [ ] **2.4 SEO & Meta Tags**
  - Open Graph tags for social sharing
  - Structured data (JSON-LD) for search engines
  - Proper meta description and title

---

### Phase 3: Infrastructure Setup (AWS)

- [ ] **3.1 Terraform Configuration**
  
  Create `infra/main.tf`:
  ```hcl
  # Provider
  provider "aws" {
    region = "us-east-1"
  }

  # S3 Bucket for static site
  resource "aws_s3_bucket" "portfolio" {
    bucket = "veeracs-portfolio-site"
  }

  # CloudFront Distribution
  resource "aws_cloudfront_distribution" "portfolio" {
    # Origin: S3 bucket
    # Default cache behavior
    # SSL certificate from ACM
    # Aliases: ["veeracs.info", "www.veeracs.info"]
  }

  # ACM Certificate (must be in us-east-1 for CloudFront)
  resource "aws_acm_certificate" "portfolio" {
    domain_name       = "veeracs.info"
    subject_alternative_names = ["www.veeracs.info"]
    validation_method = "DNS"
  }

  # Route 53 Records
  resource "aws_route53_record" "portfolio" {
    # A record pointing to CloudFront
  }
  ```

- [ ] **3.2 Terraform Variables**
  
  Create `infra/variables.tf`:
  ```hcl
  variable "domain_name" {
    default = "veeracs.info"
  }
  
  variable "project_name" {
    default = "veeracs-portfolio"
  }
  ```

- [ ] **3.3 Initialize Infrastructure**
  ```bash
  cd infra
  terraform init
  terraform plan
  terraform apply
  ```

---

### Phase 4: CI/CD Pipeline

- [ ] **4.1 GitHub Repository**
  ```bash
  git init
  git remote add origin https://github.com/veeracs/portfolio.git
  git push -u origin main
  ```

- [ ] **4.2 GitHub Secrets**
  Add to repository settings:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`

- [ ] **4.3 GitHub Actions Workflow**
  
  Create `.github/workflows/deploy.yml`:
  ```yaml
  name: Deploy Portfolio

  on:
    push:
      branches: [main]

  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        
        - uses: actions/setup-node@v4
          with:
            node-version: 20
            cache: 'npm'
        
        - name: Install dependencies
          run: npm ci
        
        - name: Build
          run: npm run build
        
        - name: Configure AWS credentials
          uses: aws-actions/configure-aws-credentials@v4
          with:
            aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
            aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
            aws-region: us-east-1
        
        - name: Deploy to S3
          run: aws s3 sync dist/portfolio s3://veeracs-portfolio-site --delete
        
        - name: Invalidate CloudFront
          run: |
            aws cloudfront create-invalidation \
              --distribution-id ${{ vars.CLOUDFRONT_DISTRIBUTION_ID }} \
              --paths "/*"
  ```

---

### Phase 5: Deployment & Verification

- [ ] **5.1 Initial Deployment**
  ```bash
  # Manual first deploy to verify
  npm run build
  aws s3 sync dist/portfolio s3://veeracs-portfolio-site --delete
  aws cloudfront create-invalidation --distribution-id DIST_ID --paths "/*"
  ```

- [ ] **5.2 Verify Site**
  - [ ] https://veeracs.info loads correctly
  - [ ] https://www.veeracs.info redirects properly
  - [ ] SSL certificate is valid
  - [ ] All sections render correctly
  - [ ] Mobile responsive
  - [ ] Download resume link works

- [ ] **5.3 Test CI/CD**
  - Make a small change
  - Push to main
  - Verify automatic deployment

---

## File Structure Summary

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── docs/
│   └── PORTFOLIO_PLAN.md       # This file
├── infra/
│   ├── main.tf                 # AWS infrastructure
│   ├── variables.tf            # Terraform variables
│   └── .gitignore              # Ignore .terraform, state files
├── public/
│   ├── favicon.ico
│   ├── og-image.png            # Social sharing image
│   └── Chandra_Resume.pdf      # Downloadable resume
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Awards.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx
│   │   └── styles/
│   │       └── index.css
│   ├── main.tsx
│   └── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Estimated Timeline

| Phase | Tasks | Duration |
|-------|-------|----------|
| **Phase 1** | Project Setup | 30 min |
| **Phase 2** | Design & Development | 2-4 hours |
| **Phase 3** | Infrastructure Setup | 1 hour |
| **Phase 4** | CI/CD Pipeline | 30 min |
| **Phase 5** | Deployment & Verification | 30 min |
| **Total** | | **4-6 hours** |

---

## Cost Estimation (Monthly)

| Service | Estimated Cost |
|---------|---------------|
| Route 53 Hosted Zone | $0.50 (already have it) |
| S3 Storage | ~$0.01 |
| CloudFront | ~$0-1 (low traffic) |
| ACM Certificate | Free |
| **Total** | **~$0.50-1.50/month** |

---

## Next Steps

1. [ ] Create the project directory and initialize Nx
2. [ ] Set up Tailwind CSS
3. [ ] Build the Hero and Header components first
4. [ ] Add remaining sections
5. [ ] Set up Terraform infrastructure
6. [ ] Deploy and verify

---

## Design Inspiration

Consider these portfolio patterns:
- **Single page scroll**: All content on one page with smooth navigation
- **Minimalist**: Clean, white-space focused, content-first
- **Interactive**: Subtle animations, skill visualizations
- **Print-friendly**: Can be printed as a clean resume

**Key differentiators to highlight**:
- 15+ years of experience
- Micro-frontend architecture expertise (showcase the ecommerce demo!)
- Major companies: Oracle, Condé Nast, TD Ameritrade
- AI/Gen AI experience (hackathon project)

---

*Document created: January 29, 2026*

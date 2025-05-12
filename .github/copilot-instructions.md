# masterplan

## App Overview and Objectives

A personal portfolio and blog site to showcase marketing strategy work and attract full-time or consulting opportunities from local companies in North Carolina. The site is built using Eleventy (11ty), Liquid templating, and Bootstrap for fast, responsive design.

## Target Audience

- Business owners and hiring managers at local companies in North Carolina
- Potential clients seeking marketing strategy support
- Recruiters evaluating candidates for marketing roles

## Core Features and Functionality

- Homepage with a personal intro and highlights
- Portfolio page with project summaries and outcomes
- Blog page listing all posts
- Individual blog post pages (Markdown-powered)
- About page with professional background
- Contact page with form (Netlify Forms) and visible email
- Downloadable resume (PDF)

## High-Level Technical Stack

- **Static Site Generator**: Eleventy (11ty)
- **Templating**: Liquid
- **Styling**: Bootstrap 5
- **Hosting**: Netlify
- **Forms**: Netlify Forms
- **CLI Tooling**: Netlify CLI
- **Content Management**: Markdown files (no CMS)

## Conceptual Data Model

- **Post**: title, date, author, summary, body (Markdown)
- **Project**: title, client, description, results, image (optional)

## User Interface Design Principles

- Clean, minimalist layout
- Bootstrap grid for responsiveness
- Clear CTAs (e.g., "View Resume", "Contact Me")
- Mobile-first design

## CSS & Design Principles

- Use Bootstrap 5 classes whenever possible.
- Prefer Liquid includes/shortcodes over custom CSS.
- Follow existing pattern files in /\_includes and /\_data.

- Avoid writing custom CSS unless absolutely necessary.
- Use Bootstrap’s utility classes and layout system as much as possible.
- Stick to Bootstrap's grid, spacing, and component patterns for layout and responsiveness.
- When styling is needed, prefer using Bootstrap’s utility classes (like `mb-3`, `text-center`, `bg-light`, etc.).
- Do not override Bootstrap styles with custom CSS unless there is no Bootstrap-native way to achieve the design.
- The goal is to have a consistent, professional look while minimizing long-term CSS maintenance.

## Visual Style Goals

- The design should feel custom and polished, but still be fully within the Bootstrap design system.
- If you’re tempted to write a new CSS class, first look for a Bootstrap utility class or component variation.

## Security Considerations

- Spam protection on Netlify Forms (honeypot/captcha)
- Obfuscate email address to prevent scraping
- Serve over HTTPS (enabled by Netlify)

## Development Phases or Milestones

1. Set up Eleventy project, Netlify CLI, and basic layout
2. Build homepage, about, and contact pages
3. Configure Netlify Forms
4. Add blog structure and Markdown support
5. Create portfolio page and project entries
6. Polish design and responsive layout with Bootstrap
7. Add downloadable resume
8. Deploy to Netlify and test

## Potential Challenges and Solutions

- **Form spam**: Use Netlify’s built-in spam protection
- **Email scraping**: Use JS or HTML encoding
- **Bootstrap clashes**: Keep custom styles scoped

## Future Expansion Possibilities

- Add client testimonials
- Integrate analytics (e.g., Plausible, Fathom)
- Add RSS feed for blog
- Enable search functionality
- Set up Netlify CMS if non-dev content editing is needed

# implementation-plan

## Step-by-Step Action Plan

### Phase 1 – Project Setup

- Initialize Eleventy project using cli
- Configure Liquid as the templating engine
- Install Bootstrap via CDN or npm
- Install Netlify CLI
- Authenticate Netlify CLI
- Set up folder structure (includes, layouts, content)

### Phase 2 – Static Pages

- Create homepage layout and content
- Build about page with biography and background
- Design contact page with Netlify Forms integration
- Add PDF resume to static assets folder

### Phase 3 – Blog System

- Configure blog collection in Eleventy
- Create Markdown template for blog posts
- Build blog listing page and pagination (if needed)
- Add sample blog posts

### Phase 4 – Portfolio Section

- Create project data (Markdown or JSON)
- Build portfolio listing page
- Design individual project detail pages (optional)

### Phase 5 – Design and Polish

- Apply Bootstrap styles for layout, spacing, typography
- Ensure mobile responsiveness across all pages
- Optimize images and assets

### Phase 6 – Deployment

- Connect to GitHub repo (if using)
- Deploy to Netlify
- Test form submission and email
- Check site performance and SEO basics

## Timeline/Phases

- **Week 1**: Setup, static pages, resume, basic styling
- **Week 2**: Blog and portfolio system
- **Week 3**: Final polish, testing, deployment

## Team Setup

Solo developer — no external roles required

## Optional Enhancements (Post-MVP)

- Add client testimonials section
- Integrate basic analytics (e.g., Plausible)
- Include a blog RSS feed
- Add light/dark mode toggle
- Configure Netlify CMS (if needed later)

# design-guidelines

## Visual Style

- **Framework**: Bootstrap 5
- **Colors**: Clean and professional palette — consider blues, grays, and soft neutrals
- **Fonts**: Use a readable sans-serif (e.g., Inter, Roboto, or Bootstrap default)
- **Spacing**: Generous padding/margins to reduce clutter

## Page Layout Principles

- Consistent header and footer on all pages
- Mobile-first grid layout using Bootstrap
- Portfolio and blog cards with hover states
- Clear visual hierarchy: headlines, subheads, body text

## Accessibility

- Ensure good contrast between text and background
- Use semantic HTML tags (header, main, article, etc.)
- Add alt tags for all images
- Make form elements keyboard-navigable

## Mobile-First Notes

- Prioritize responsive design from the start
- Use Bootstrap’s grid and utility classes for adaptability
- Avoid fixed-width elements — let layout flex naturally

## Brand Tone and Voice

- **Tone**: Friendly, competent, and focused
- **Voice**: Confident and conversational (but not too casual)
- Include local touches (e.g., references to North Carolina) to build regional connection

# app-flow-pages-and-roles

## Core Pages

### 1. Homepage

- Intro headline and brief about section
- Featured blog posts and portfolio highlights
- Clear call-to-actions (view portfolio, download resume, contact)

### 2. Portfolio Page

- List of marketing strategy projects (card layout)
- Each card links to a detailed project view or expanded modal

### 3. Blog Page

- Reverse chronological list of blog posts
- Each links to its individual Markdown post

### 4. Individual Blog Post Page

- Title, date, content rendered from Markdown
- Optional tags or categories

### 5. About Page

- Short biography, professional background, and headshot (if desired)
- Link to resume download

### 6. Contact Page

- Contact form (Netlify Forms)
- Visible email address
- Optionally include social/contact links (LinkedIn, etc.)

## User Roles

- **Site Owner** (you): Full control over content via markdown
- **Visitors**: Public, read-only access to all pages

## User Flow

1. Visitor lands on Homepage
2. Can explore Portfolio or Blog
3. May view detailed blog post or project
4. Goes to About to learn more
5. Proceeds to Contact to get in touch or download resume

# Copilot Instructions for Eleventy Portfolio Site

## Debugging and Q&A Process

### Inspecting Generated HTML Output

When troubleshooting template rendering issues or verifying content display:

1. **Build the site**: Run `npx @11ty/eleventy` to generate the static output
2. **Locate output files**: Navigate to the `_site` directory
3. **Inspect HTML files**: Open the generated HTML files to check:
   - Whether all expected content is being rendered
   - If collections are populating correctly
   - How templates are processing data
   - If components are displaying as expected

This approach bypasses the need to rely solely on browser inspection and helps identify issues in the template logic or data processing before the browser renders the content.

Example commands:
```bash
# Build site
npx @11ty/eleventy

# View generated HTML (Linux/macOS)
cat _site/blog/index.html | grep -A10 "post-card"

# Check collection size
grep -r "post-count" _site/
```

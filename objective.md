# **Modern Logistics Website Plan (React + Tailwind CSS + Framer Motion)**

This document outlines the design system and component architecture for a modern, single-page logistics and moving company website. The goal is to create a clean, trustworthy, and user-friendly interface with cutting-edge animations, glassmorphism effects, and a professional aesthetic that rivals modern platforms like Framer and Vercel.

---

## **1. Color Palette & Theme**

The theme is **"Efficient & Trustworthy"**. The color palette is designed to be professional and modern, using a deep blue as the primary color to inspire confidence and a vibrant orange as an accent for calls-to-action.

### **Light Mode Colors**

| Role | Color Name | Hex Code | Tailwind Class | Usage |
| :---- | :---- | :---- | :---- | :---- |
| **Primary** | Midnight Blue | #0D2B4E | bg-[#0D2B4E] | Main headings, backgrounds for key sections, primary brand color |
| **Secondary** | Sky Blue | #5490F1 | bg-[#5490F1] | Secondary buttons, icon highlights, subtle background elements |
| **Accent** | Bright Orange | #F7941D | bg-[#F7941D] | Call-to-action buttons (Get a Quote), important links, highlights |
| **Background** | Off-White | #F8F9FA | bg-[#F8F9FA] | Main background color for a clean, spacious feel |
| **Text (Dark)** | Charcoal | #333333 | text-[#333333] | Body text, paragraphs, subheadings for high readability |
| **Text (Light)** | White | #FFFFFF | text-white | Text on dark backgrounds (Midnight Blue) |
| **Borders/Lines** | Light Gray | #E0E0E0 | border-[#E0E0E0] | Card borders, dividers, subtle UI lines |
| **Success** | Green | #10B981 | bg-green-500 | Success messages, completed states |
| **Error** | Red | #EF4444 | bg-red-500 | Error messages, validation errors |

### **Dark Mode Colors**

| Role | Color Name | Hex Code | Tailwind Class | Usage |
| :---- | :---- | :---- | :---- | :---- |
| **Primary** | Light Blue | #60A5FA | dark:bg-blue-400 | Headings in dark mode |
| **Background** | Dark Navy | #0F172A | dark:bg-slate-900 | Main background for dark mode |
| **Surface** | Slate | #1E293B | dark:bg-slate-800 | Card backgrounds, elevated surfaces |
| **Text (Light)** | Off-White | #F1F5F9 | dark:text-slate-100 | Body text in dark mode |
| **Text (Muted)** | Gray | #94A3B8 | dark:text-slate-400 | Secondary text, captions |
| **Borders** | Dark Gray | #334155 | dark:border-slate-700 | Borders and dividers in dark mode |

### **Gradient Palette**

| Name | Gradient Classes | Usage |
| :---- | :---- | :---- |
| **Hero Gradient** | bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 | Hero section background |
| **Card Gradient** | bg-gradient-to-r from-blue-500 to-sky-400 | Hover effects on cards |
| **CTA Gradient** | bg-gradient-to-r from-orange-500 to-orange-600 | Call-to-action buttons |
| **Accent Glow** | bg-gradient-to-r from-orange-400/20 to-blue-400/20 | Background mesh effects |

### **Glassmorphism Styles**

```css
/* Glass Card */
bg-white/10 backdrop-blur-lg border border-white/20

/* Glass Header (on scroll) */
bg-white/80 backdrop-blur-md dark:bg-slate-900/80

/* Glass Button */
bg-white/5 backdrop-blur-sm hover:bg-white/10
```

---

## **2. Typography**

We will use **Inter** as the primary font and **Space Grotesk** for display headings. Both are modern, highly readable fonts used by leading tech companies.

### **Font Import**

Add the following to your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### **Tailwind CSS Configuration (tailwind.config.js)**

```javascript
module.exports = {
  darkMode: 'class',
  theme: {  
    extend: {  
      fontFamily: {  
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(247, 148, 29, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(247, 148, 29, 0.8)' },
        },
      },  
    },  
  },  
  plugins: [],
}
```

### **Typography Hierarchy**

| Element | Font Family | Weight | Size (Tailwind) | Color | Usage |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Display Heading** | Space Grotesk | Bold (700) | text-5xl / md:text-7xl | Midnight Blue | Hero main title |
| **Heading 1** | Space Grotesk | Semi-Bold (600) | text-4xl / md:text-5xl | Midnight Blue | Main headings |
| **Heading 2** | Space Grotesk | Semi-Bold (600) | text-3xl / md:text-4xl | Midnight Blue | Section titles |
| **Heading 3** | Inter | Medium (500) | text-xl / md:text-2xl | Charcoal | Card titles, sub-sections |
| **Body Text** | Inter | Regular (400) | text-base / md:text-lg | Charcoal | Paragraphs, descriptions |
| **Button/Link** | Inter | Medium (500) | text-base | White / Accent | Interactive elements |
| **Labels** | Inter | Regular (400) | text-sm | Charcoal | Form labels, captions |
| **Small Text** | Inter | Regular (400) | text-xs | Gray | Metadata, footnotes |

---

## **3. Animation Strategy (Framer Motion)**

Animation is critical for a modern feel. All animations should be smooth, purposeful, and enhance the user experience.

### **Animation Libraries**

- **Framer Motion** (Primary) - Page transitions, scroll animations, micro-interactions
- **Lottie** (Optional) - Complex icon animations
- **React Intersection Observer** - Trigger animations on scroll

### **Key Animation Patterns**

| Element | Animation Type | Trigger | Details |
| :---- | :---- | :---- | :---- |
| **Hero Text** | Staggered fade-in + slide-up | On page load | 0.1s delay between elements |
| **Hero Video** | Fade-in + scale | On page load | Smooth entrance |
| **Service Cards** | Fade-up + 3D tilt on hover | On scroll into view | Spring animation |
| **Process Steps** | Sequential reveal | On scroll | Connected line animates across |
| **Statistics** | Count-up animation | On scroll into view | Numbers animate from 0 to target |
| **Testimonials** | Smooth carousel | Auto-play + drag | Infinite loop with fade edges |
| **Buttons** | Scale + glow on hover | On hover | Magnetic cursor effect (desktop) |
| **Cards** | Lift + shadow on hover | On hover | 3D tilt effect |
| **Form Inputs** | Focus animation | On focus | Floating label effect |
| **Page Sections** | Parallax background | On scroll | Subtle depth effect |

### **Performance Considerations**

- Use `will-change` sparingly
- Prefer `transform` and `opacity` for animations
- Add `prefers-reduced-motion` support
- Lazy load animations for sections below the fold

---

## **4. Component Structure**

The website will be a single-page application (SPA). Components are listed in order of appearance.

---

### **1. Header.jsx**

A dynamic sticky navigation bar that adapts as you scroll.

#### **Content:**
- Company Logo (left-aligned) - clickable, returns to top
- Navigation Links (center-aligned): Home, Services, How It Works, About, Testimonials, Contact
  - Smooth scroll to sections
  - Active link indicator (underline animation)
- Dark Mode Toggle (icon button)
- "Get a Free Quote" CTA Button (right-aligned, accent color)
- Mobile: Hamburger menu with slide-in navigation

#### **Functionality:**
- **Transparent on hero**, then adds backdrop blur and background color on scroll
- **Shrinks slightly** on scroll (reduce padding)
- **Active section tracking** - highlights nav link based on viewport
- **Scroll progress indicator** - thin line at top showing page progress
- **Smooth transitions** - backdrop blur fades in, height transition
- **Magnetic button effect** on CTA (desktop only)

#### **Framer Motion Animations:**
```javascript
// Header background transition on scroll
animate={{ 
  backgroundColor: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
  backdropFilter: scrolled ? 'blur(12px)' : 'none'
}}

// Nav links stagger in on page load
variants={{
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
}}
```

---

### **2. HeroSection.jsx**

The hero section is the first impression and must be impactful with video background.

#### **Layout:**
Full-screen hero with centered content and video background.

#### **Content:**
- **Background:** 
  - **Video Background** - Use `/public/two.mp4` or `/public/three.mp4` as looping background video
  - Dark overlay (bg-black/40) for text readability
  - Animated gradient mesh overlay (subtle)
  
- **Foreground (Centered Content):**
  - Small badge/chip: "Trusted by 5000+ Customers" (subtle, animated)
  - **Display Heading (H1):** "Seamless Moving, Stress-Free Solutions"
    - Font: Space Grotesk, 700
    - Size: text-5xl md:text-7xl
    - Staggered character animation on load
  - **Sub-headline:** Short value proposition (2-3 lines)
    - Fade in after heading
  - **CTA Buttons (Horizontal):**
    - Primary: "Get a Free Quote" (gradient orange button, glow effect)
    - Secondary: "Watch How It Works" (glass button with play icon)
  - **Trust Indicators Below CTAs:**
    - Small logos of partners/certifications
    - "⭐ 4.9/5 from 1000+ reviews"

- **Floating Elements:**
  - Isometric 3D shapes (boxes, trucks) floating with parallax
  - Subtle particle effect or animated dots in background

#### **Video Implementation:**
```jsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/two.mp4" type="video/mp4" />
  <source src="/three.mp4" type="video/mp4" />
</video>
```

#### **Scroll Indicator:**
- Animated arrow or "Scroll to explore" at bottom
- Bouncing animation

#### **Framer Motion Animations:**
```javascript
// Hero content stagger
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.15 } }
  }}
>
  <motion.span variants={fadeInUp}>Badge</motion.span>
  <motion.h1 variants={fadeInUp}>Heading</motion.h1>
  <motion.p variants={fadeInUp}>Subheading</motion.p>
  <motion.div variants={fadeInUp}>Buttons</motion.div>
</motion.div>

// Floating elements
animate={{ 
  y: [0, -20, 0],
  transition: { duration: 4, repeat: Infinity }
}}
```

---

### **3. TrustBadgesSection.jsx**

A thin section showing logos of clients or certifications to build immediate trust.

#### **Content:**
- Heading (optional): "Trusted by leading companies" (text-sm, muted)
- Logo grid/marquee: 5-8 client logos in grayscale
- Infinite marquee animation (duplicate logos for seamless loop)

#### **Framer Motion:**
```javascript
// Infinite scroll marquee
animate={{ x: [0, -1000] }}
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
```

---

### **4. ServicesSection.jsx**

Showcases core services in an engaging Bento grid layout.

#### **Layout:**
Asymmetric Bento grid (different card sizes for visual interest).

#### **Content:**
- Section Tag: "What We Offer" (small, accent color)
- **Section Title (H2):** "Expert Logistics Services"
- **Section Description:** Brief paragraph about comprehensive services
- **Bento Grid of ServiceCard components** (4-6 cards):
  - Large featured card (2x size)
  - Regular cards

#### **ServiceCard.jsx (Child Component):**
- Glassmorphism card background
- Gradient border on hover
- Animated isometric icon (Lottie or SVG)
- Service Title (H3)
- Short description (2-3 lines)
- "Learn More →" link (appears on hover)
- Number badge (e.g., "01")

#### **Service Examples:**
1. Residential Moving (Featured - large card)
2. Commercial Relocation
3. Storage Solutions
4. International Shipping
5. Packing Services
6. Vehicle Transport

#### **Framer Motion Animations:**
```javascript
// Cards reveal on scroll
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>

// 3D tilt on hover
whileHover={{ 
  scale: 1.02,
  rotateX: 5,
  rotateY: 5,
  transition: { duration: 0.3 }
}}
```

---

### **5. HowItWorksSection.jsx**

Visual explanation of the customer journey with animated process flow.

#### **Layout:**
- Desktop: Horizontal timeline
- Mobile: Vertical timeline

#### **Content:**
- Section Tag: "Simple Process"
- **Section Title (H2):** "How It Works - In 3 Easy Steps"
- **ProcessStep components** connected by animated line/path
- Large CTA at the end: "Start Your Move Today"

#### **ProcessStep.jsx (Child Component):**
- Large step number (e.g., "01") - gradient text
- Isometric animated icon
- Step title (e.g., "Request a Quote")
- Description (2-3 lines)
- Checkmark animation when in view

#### **Steps Example:**
1. **Request a Quote** - Fill out our simple form or call us
2. **Schedule Your Move** - Choose your preferred date and time
3. **Relax & Move** - Our team handles everything professionally

#### **Framer Motion Animations:**
```javascript
// Line draws across as you scroll
<motion.path
  initial={{ pathLength: 0 }}
  whileInView={{ pathLength: 1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
/>

// Steps appear sequentially
variants={{
  hidden: { opacity: 0, scale: 0.8 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.3 }
  })
}}
```

---

### **6. StatsSection.jsx**

Eye-catching statistics with count-up animations.

#### **Layout:**
Full-width section with dark background (gradient) and 4 stat cards.

#### **Content:**
- 4 large statistics in a grid:
  - **5000+** Successful Moves
  - **10+** Years Experience
  - **98%** Customer Satisfaction
  - **50+** Professional Team Members

#### **StatCard.jsx:**
- Large animated number (count-up effect)
- Plus sign or percentage (animated)
- Label below number
- Icon above number

#### **Framer Motion Animations:**
```javascript
// Count-up animation using motion.div and custom hook
const [count, setCount] = useState(0);

useEffect(() => {
  if (inView) {
    // Animate from 0 to target number
  }
}, [inView]);
```

---

### **7. AboutUsSection.jsx**

Builds trust and tells the company's story with rich media.

#### **Layout:**
Split layout (50/50) with overlapping elements for depth.

#### **Content:**
- **Left Side:**
  - Image of team or trucks (rounded corners, shadow)
  - Floating badge: "Since 2014" or similar
  - Decorative shapes in background
  
- **Right Side:**
  - Section Tag: "About Us"
  - **Section Title (H2):** "Your Trusted Partner in Logistics"
  - Paragraphs about mission, values, experience (2-3 paragraphs)
  - Key differentiators as bullet points with icons
  - "Meet the Team" button (secondary style)

#### **Framer Motion Animations:**
```javascript
// Image parallax on scroll
<motion.div
  style={{ y: scrollYProgress }}
>

// Text slides in from right
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
```

---

### **8. TestimonialsSection.jsx**

Social proof from happy customers with modern carousel.

#### **Layout:**
Full-width section with infinite scroll marquee or swipeable carousel.

#### **Content:**
- Section Tag: "Testimonials"
- **Section Title (H2):** "What Our Clients Say"
- **Carousel of TestimonialCard components**
- Navigation dots or arrows
- Auto-play with pause on hover

#### **TestimonialCard.jsx (Child Component):**
- Glass card effect
- Star rating (5 stars, filled with animation)
- Customer quote (larger text, italic)
- Customer name and title
- Customer photo (rounded, small)
- Company logo (if B2B)

#### **Layout Options:**
1. **Marquee:** Infinite horizontal scroll (2 rows, opposite directions)
2. **Carousel:** Swipeable with Framer Motion drag

#### **Framer Motion Animations:**
```javascript
// Infinite marquee
<motion.div
  animate={{ x: [0, -1000] }}
  transition={{ 
    duration: 30, 
    repeat: Infinity, 
    ease: "linear" 
  }}
>

// Or carousel with drag
<motion.div
  drag="x"
  dragConstraints={{ left: -1000, right: 0 }}
>
```

---

### **9. FAQSection.jsx**

Frequently asked questions with smooth accordion animations.

#### **Content:**
- Section Tag: "FAQ"
- **Section Title (H2):** "Frequently Asked Questions"
- Search bar (optional) to filter questions
- **Accordion list of FAQItem components** (6-10 questions)
- CTA at bottom: "Still have questions? Contact us"

#### **FAQItem.jsx (Child Component):**
- Question (bold, clickable)
- Expand/collapse icon (animated rotation)
- Answer (expands smoothly with animation)

#### **Framer Motion Animations:**
```javascript
// Accordion expand/collapse
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ 
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0
  }}
  transition={{ duration: 0.3 }}
>
```

---

### **10. CTABannerSection.jsx**

A bold call-to-action section before the footer.

#### **Content:**
- Full-width banner with gradient background
- Animated background elements (floating shapes)
- **Heading:** "Ready to Make Your Move?"
- **Subheading:** "Get a free quote today and experience stress-free moving"
- Large CTA button: "Get Free Quote Now" (with glow animation)
- Phone number with click-to-call

#### **Framer Motion Animations:**
```javascript
// Background shapes float
animate={{ 
  y: [0, -30, 0],
  x: [0, 15, 0],
  rotate: [0, 5, 0]
}}
transition={{ duration: 8, repeat: Infinity }}
```

---

### **11. ContactSection.jsx**

Contact form and information with validation and success states.

#### **Layout:**
Split layout - Form on left, Info on right.

#### **Content:**

**Left Side - Contact Form:**
- Form heading: "Send Us a Message"
- Input fields with floating labels:
  - Full Name (required)
  - Email (required, validation)
  - Phone (required, format validation)
  - Service Interested In (dropdown)
  - Message (textarea)
- Submit button: "Send Message" (loading state)
- Success message with checkmark animation
- Error handling with inline messages

**Right Side - Contact Info:**
- Office address with map icon
- Phone number (click-to-call)
- Email address (click-to-email)
- Business hours
- Social media icons with hover effects

#### **Form Validation:**
Use React Hook Form + Zod for validation:
- Real-time validation
- Clear error messages
- Success animation on submit

#### **Framer Motion Animations:**
```javascript
// Input focus animation
<motion.input
  whileFocus={{ scale: 1.02 }}
/>

// Success checkmark animation
<motion.svg
  initial={{ pathLength: 0, opacity: 0 }}
  animate={{ pathLength: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
/>
```

---

### **12. Footer.jsx**

Comprehensive footer with all important links and information.

#### **Layout:**
Three sections: Main footer, bottom bar.

#### **Content:**

**Main Footer (Grid layout):**
- **Column 1:** Company info
  - Logo
  - Tagline
  - Social media icons
  
- **Column 2:** Quick Links
  - Services
  - About Us
  - FAQ
  - Contact
  
- **Column 3:** Services
  - List of all services
  
- **Column 4:** Contact
  - Address
  - Phone
  - Email
  - Newsletter signup

**Bottom Bar:**
- Copyright © 2025 [Company Name]
- Privacy Policy link
- Terms of Service link

#### **Framer Motion Animations:**
```javascript
// Social icons hover
whileHover={{ scale: 1.2, rotate: 5 }}

// Links hover
whileHover={{ x: 5 }}
```

---

## **5. Technical Implementation**

### **Required Packages**

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.50.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "lucide-react": "^0.330.0",
    "react-intersection-observer": "^9.5.0",
    "sonner": "^1.3.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "vite": "^5.0.0",
    "typescript": "^5.0.0"
  }
}
```

### **Dark Mode Implementation**

Use context or a simple state management:
```javascript
// Use class-based dark mode in Tailwind
// Add toggle button in header
// Save preference to localStorage
// Apply 'dark' class to <html> element
```

### **Performance Optimizations**

1. **Lazy Loading:**
   - Load below-the-fold components lazily
   - Use React.lazy() and Suspense
   
2. **Image Optimization:**
   - Use modern formats (WebP)
   - Lazy load images
   - Proper width/height attributes
   
3. **Video Optimization:**
   - Compress videos (use HandBrake or similar)
   - Use poster image for faster initial load
   - Consider using different videos for mobile (smaller file size)
   
4. **Code Splitting:**
   - Split by route/section
   - Dynamic imports for heavy components
   
5. **Animation Performance:**
   - Use transform and opacity only
   - Add will-change carefully
   - Respect prefers-reduced-motion

### **Accessibility (A11Y)**

1. **Semantic HTML:**
   - Use proper heading hierarchy
   - nav, main, section, footer tags
   
2. **Keyboard Navigation:**
   - All interactive elements focusable
   - Visible focus indicators
   - Skip to main content link
   
3. **Screen Readers:**
   - ARIA labels for icons
   - alt text for images
   - ARIA live regions for dynamic content
   
4. **Color Contrast:**
   - WCAG AA minimum (4.5:1 for text)
   - Test with contrast checker
   
5. **Reduced Motion:**
   ```javascript
   const prefersReducedMotion = window.matchMedia(
     '(prefers-reduced-motion: reduce)'
   ).matches;
   
   // Disable animations if user prefers
   ```

---

## **6. Responsive Design Breakpoints**

| Breakpoint | Tailwind | Width | Usage |
| :---- | :---- | :---- | :---- |
| Mobile | (default) | < 640px | Single column, stacked layout |
| Tablet | md: | 768px+ | 2-column grids, adjusted spacing |
| Desktop | lg: | 1024px+ | Multi-column, full layout |
| Large Desktop | xl: | 1280px+ | Max-width container, larger text |

### **Responsive Considerations:**

- **Hero:** Full-screen on all devices, adjust text size
- **Navigation:** Hamburger menu on mobile
- **Grids:** 1 column (mobile) → 2 columns (tablet) → 3-4 columns (desktop)
- **Process Steps:** Vertical timeline (mobile) → Horizontal (desktop)
- **Form:** Stack on mobile, side-by-side on desktop
- **Video:** Ensure proper aspect ratio on all screens

---

## **7. Custom Cursor (Desktop Only)**

Enhance desktop experience with custom cursor:

```javascript
// Custom cursor component
// Follows mouse position
// Changes on hover of interactive elements
// Shows "View" on cards, "Click" on buttons
// Magnetic effect near CTA buttons
```

---

## **8. Micro-Interactions Checklist**

- [ ] Button ripple effect on click
- [ ] Card lift and shadow on hover
- [ ] Form input floating labels
- [ ] Smooth page scroll with easing
- [ ] Loading spinner on form submit
- [ ] Toast notifications (success/error)
- [ ] Icon animations on hover
- [ ] Progress indicators
- [ ] Skeleton screens for loading states
- [ ] Checkbox/radio animations
- [ ] Dropdown smooth expand
- [ ] Modal fade-in with backdrop blur

---

## **9. SEO & Meta Tags**

Even though it's a SPA, optimize for search engines:

```html
<!-- Essential meta tags -->
<title>Company Name - Professional Logistics & Moving Services</title>
<meta name="description" content="...">
<meta name="keywords" content="...">

<!-- Open Graph for social sharing -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- Schema.org structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  ...
}
</script>
```

---

## **10. Future Enhancements (Post-Launch)**

- [ ] Blog section for SEO
- [ ] Live chat integration
- [ ] Real-time quote calculator
- [ ] Customer portal (login area)
- [ ] Tracking system for shipments
- [ ] Payment integration
- [ ] Multi-language support (i18n)
- [ ] Booking system with calendar
- [ ] Admin dashboard
- [ ] Email automation (confirmations, reminders)

---

## **11. Design Resources**

### **Icons:**
- Lucide React (lightweight, modern)
- Heroicons (if needed)

### **Illustrations:**
- Create custom isometric illustrations
- Or use: Blush, unDraw, Storyset

### **3D Assets (Optional):**
- Spline (for 3D elements)
- Three.js (if going advanced)

### **Animation Inspiration:**
- Framer.com
- Vercel.com
- Stripe.com
- Linear.app
- Resend.com

---

## **Summary of Modern Improvements**

✅ **Added Dark Mode** with complete color palette  
✅ **Video Background** for hero using two.mp4/three.mp4  
✅ **Framer Motion** as primary animation library (no GSAP)  
✅ **Glassmorphism** design patterns throughout  
✅ **Bento Grid** layout for services  
✅ **Micro-interactions** and hover effects everywhere  
✅ **Gradient system** for depth and visual interest  
✅ **Modern typography** with font pairing (Inter + Space Grotesk)  
✅ **Accessibility** considerations (A11Y)  
✅ **Performance** optimization guidelines  
✅ **Advanced animations** (parallax, marquee, count-up, 3D tilt)  
✅ **Custom cursor** for desktop  
✅ **FAQ section** with accordion  
✅ **Stats section** with count-up animations  
✅ **CTA banner** section for conversions  
✅ **Trust badges** section  
✅ **Form validation** with React Hook Form + Zod  
✅ **Responsive design** strategy  

---

**This comprehensive plan will create a modern, conversion-optimized website that rivals top-tier design agencies and SaaS products. Every section is thoughtfully designed with animations, accessibility, and user experience in mind.**

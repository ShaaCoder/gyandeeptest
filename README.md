# Bright Future School Website

A modern, clean, and fully responsive school website built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

### Pages
- **Home** - Hero section, highlights, academic program preview, and gallery preview
- **About** - School introduction, vision & mission, core values, and principal's message
- **Academics** - Three educational levels (Primary, Middle, Senior) with curriculum details
- **Gallery** - Responsive image grid with category filters and hover effects
- **Contact** - Contact form, contact information, office hours, and Google Maps embed

### Global Features
- **Sticky Header** - Responsive navigation with mobile menu
- **Sticky Footer** - Quick links, contact info, social media, and school hours
- **Floating Contact Button** - WhatsApp and Phone call popover (bottom-right corner)
  - Smooth animations
  - Click to expand/collapse
  - Direct links for WhatsApp chat and phone calls
  - Visible on all pages

### Design
- Modern school theme with emerald and sky color palette
- Soft colors and clean typography
- Rounded cards with subtle shadows
- Mobile-first responsive layout
- Smooth hover effects and transitions
- Accessible and user-friendly interface

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── page.tsx          # Home page
│   ├── about/page.tsx    # About page
│   ├── academics/page.tsx # Academics page
│   ├── gallery/page.tsx  # Gallery page
│   ├── contact/page.tsx  # Contact page
│   ├── layout.tsx        # Root layout with Header, Footer, FloatingContact
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer with links and info
│   ├── FloatingContact.tsx # Floating contact popover
│   └── ui/               # shadcn/ui components
└── lib/
    └── utils.ts          # Utility functions
```

## Customization

### Contact Information
Update contact details in:
- `components/Footer.tsx` - Footer contact section
- `components/FloatingContact.tsx` - WhatsApp and phone numbers
- `app/contact/page.tsx` - Contact page details

### Colors
The color scheme uses Tailwind CSS classes. Primary colors:
- Emerald (`emerald-50` to `emerald-600`)
- Sky (`sky-50` to `sky-600`)
- Slate (`slate-50` to `slate-800`)

Modify in individual page files or `tailwind.config.ts`.

### School Name
Search and replace "Bright Future School" throughout the codebase.

## Notes

- No backend integration (frontend only)
- Contact form shows success message but doesn't send data
- Gallery uses placeholder images with emoji icons
- Google Maps embed in contact page (update with actual location)
- WhatsApp and phone numbers are placeholders (update with real numbers)

## License

This project is open source and available for educational purposes.

# Nexus Digital Website

A modern, responsive website built with Next.js 15, React 19, and Tailwind CSS. This project showcases a professional digital agency website with beautiful UI components and smooth user experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with modern UI components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component-Based Architecture**: Modular components for easy maintenance
- **Dark/Light Theme Support**: Built-in theme switching capability
- **Performance Optimized**: Built with Next.js for optimal performance
- **TypeScript**: Full TypeScript support for better development experience
- **Accessibility**: WCAG compliant components with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nexus-digital-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Structure

```
nexus-digital-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation.tsx    # Navigation component
│   ├── hero-alternate.tsx # Hero section
│   ├── services-alternate.tsx # Services section
│   ├── testimonials-grid.tsx # Testimonials
│   ├── team-compact.tsx  # Team section
│   ├── contact-split.tsx # Contact form
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Components

The website includes the following main sections:

- **Navigation**: Responsive navigation bar with mobile menu
- **Hero Section**: Eye-catching hero with call-to-action
- **Stats**: Key statistics and metrics display
- **Services**: Showcase of digital services offered
- **Testimonials**: Customer testimonials and reviews
- **Team**: Team member profiles and information
- **Contact**: Contact form and information
- **Footer**: Site footer with links and information

All components are located in the `components/` directory and can be easily customized to match your brand.

## 🚀 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎯 Key Features

### UI Components

- **Accordion**: Collapsible content sections
- **Alert Dialog**: Confirmation dialogs
- **Avatar**: User profile images
- **Button**: Various button styles and states
- **Card**: Content containers
- **Carousel**: Image/content sliders
- **Dialog**: Modal dialogs
- **Form**: Form components with validation
- **Navigation Menu**: Dropdown navigation
- **Toast**: Notification system
- **Tooltip**: Hover information displays

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Animations**: Smooth transitions and animations
- **Responsive Design**: Mobile-first approach
- **Theme Support**: Dark and light mode

## 🔧 Configuration

### Next.js Config

The project uses a custom Next.js configuration with:

- ESLint and TypeScript errors ignored during builds
- Unoptimized images for development
- Custom build settings

### Tailwind CSS

- Custom color palette
- Responsive breakpoints
- Animation utilities
- Component variants

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors

The project uses a carefully selected color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#2563eb",  // Blue
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "#1e40af",  // Darker blue
    foreground: "hsl(var(--secondary-foreground))",
  },
  accent: {
    DEFAULT: "#f59e0b",  // Orange
    foreground: "hsl(var(--accent-foreground))",
  },
  blue: {
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
  },
  orange: {
    400: "#fb923c",
    500: "#f59e0b",
    600: "#d97706",
  },
  gray: {
    50: "#f9fafb",
    600: "#4b5563",
    700: "#374151",
    900: "#111827",
  }
}
```

To customize the color scheme, update these values in `tailwind.config.ts` to match your brand colors.

### Components

All components are located in the `components/` directory and can be easily customized to match your brand.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Create an issue in the repository
- Contact the development team

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Lucide](https://lucide.dev/) - Icons
- [Vercel](https://vercel.com/) - Deployment platform

---

Built with ❤️ using Next.js and Tailwind CSS

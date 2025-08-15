# Dubai Design State - Profile Management

A responsive employee profile management system for Dubai Design State, built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Form Validation**: Real-time validation with clear error messages
- **Image Upload**: Mocked profile photo upload with preview
- **Success Feedback**: Toast notification on successful profile update
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Professional UI**: Clean, government-appropriate design with Dubai branding

## Form Fields

- Full Name (required)
- Email Address (required, validated format)
- Country of Residence (required, dropdown)
- Preferred Language (required, dropdown)
- Short Bio (required, minimum 20 characters)
- Profile Photo (optional, mocked upload)

## Design Decisions

### Layout
- **Card-based layout** for better content organization
- **Two-column grid** on desktop, single column on mobile
- **Prominent header** with Dubai Design State branding
- **Centered profile image** for visual hierarchy

### Accessibility
- Semantic HTML structure with proper headings
- ARIA labels and descriptions
- High contrast colors (WCAG AA compliant)
- Keyboard navigation support
- Screen reader friendly form labels

### User Experience
- **Progressive disclosure** of errors (show only when relevant)
- **Real-time validation** with immediate feedback
- **Visual feedback** with color-coded form states
- **Success toast** for confirmation
- **Smooth animations** for better interaction feel

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/HussainImtiazAli85/Profile-Page.git
   cd profile-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Design-to-Code Decisions

### Mobile-First Approach
- Started with mobile layout using Tailwind's responsive prefixes
- Used CSS Grid with responsive breakpoints (`lg:grid-cols-2`)
- Optimized touch targets for mobile interactions

### Component Architecture
- Single main component for simplicity
- Clear separation of concerns (validation, state management, UI)
- Reusable patterns for form fields

### Styling Philosophy
- **Utility-first** with Tailwind CSS for rapid development
- **Consistent spacing** using Tailwind's spacing scale
- **Professional color palette** suitable for government entity
- **Subtle animations** for enhanced user experience

### Form Validation Strategy
- **Client-side validation** for immediate feedback
- **Field-level validation** on blur and change events
- **Form-level validation** on submission
- **Error state styling** with visual indicators

## Technical Stack

- **React 18** with TypeScript for type safety
- **Tailwind CSS** for styling and responsive design
- **Lucide React** for consistent iconography
- **Vite** for fast development and building

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast colors
- Screen reader friendly
- Focus management

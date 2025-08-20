# The Wild Oasis - Customer Booking System

A modern, responsive cabin booking application built with Next.js 14, featuring real-time availability checking, user authentication, and a seamless booking experience.

## 🌟 Features

### Core Functionality

- **Cabin Browsing**: Explore luxury cabins with detailed information and pricing
- **Real-time Availability**: Check cabin availability with an interactive date picker
- **User Authentication**: Secure login system with NextAuth.js
- **Booking Management**: Create, view, edit, and delete reservations
- **Profile Management**: Update guest information and preferences
- **Responsive Design**: Mobile-first design that works on all devices

### Technical Features

- **Server Actions**: Optimistic UI updates for better user experience
- **Image Optimization**: Next.js Image component for optimized loading
- **Database Integration**: Supabase for real-time data management
- **Modern UI**: Tailwind CSS with custom design system
- **Type Safety**: Full TypeScript support (optional)
- **Performance**: Optimized with Next.js 14 App Router

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Date Handling**: date-fns, react-day-picker
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/the-wild-oasis-customer.git
   cd the-wild-oasis-customer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_API_KEY=your_supabase_anon_key
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Set up the database**

   - Create a Supabase project
   - Set up the required tables (cabins, bookings, guests, settings)
   - Configure Row Level Security (RLS) policies

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

### Tables

- **cabins**: Cabin information (name, capacity, pricing, images)
- **bookings**: Reservation data (dates, guests, pricing)
- **guests**: User profiles and preferences
- **settings**: Application configuration

### Key Relationships

- Bookings are linked to both cabins and guests
- Guest authentication via email
- Real-time availability checking

## 📁 Project Structure

```
app/
├── _components/          # Reusable UI components
│   ├── CabinCard.jsx     # Individual cabin display
│   ├── ReservationForm.jsx # Booking form
│   ├── DateSelector.jsx  # Date picker component
│   └── ...
├── _lib/                 # Utility functions and services
│   ├── actions.js        # Server Actions
│   ├── data-service.js   # Database operations
│   ├── auth.js           # Authentication logic
│   └── supabase.js       # Supabase client
├── cabins/               # Cabin-related pages
├── account/              # User account pages
├── login/                # Authentication pages
└── api/                  # API routes
```

## 🎨 Design System

The application uses a custom color palette defined in Tailwind CSS:

- **Primary**: Dark theme with various shades
- **Accent**: Highlight colors for CTAs and interactions
- **Typography**: Josefin Sans font family
- **Components**: Consistent spacing and styling patterns

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prod` - Build and start production

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security Features

- **Authentication**: Secure user sessions with NextAuth.js
- **Database Security**: Row Level Security (RLS) policies
- **Input Validation**: Server-side validation for all forms
- **Environment Variables**: Secure configuration management

## 🧪 Testing

The application includes:

- Error boundaries for graceful error handling
- Loading states for better UX
- Form validation and error messages
- Responsive design testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js 14 and Supabase
- Icons from Heroicons
- Date handling with date-fns and react-day-picker
- Styling with Tailwind CSS

## 📞 Support

For support, email support@wildoasis.com or create an issue in this repository.

---

**The Wild Oasis** - Where luxury meets nature 🌲

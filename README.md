# My Portfolio Website

This is a personal portfolio website built with **React** and **Vite**. It showcases my skills, projects, and provides a way to contact me.

## Features

- Responsive design
- About, Experience, Services, Portfolio, Testimonials, and Contact sections
- Downloadable CV
- Contact form with EmailJS integration
- Social media links

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running Locally

Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To build the project:
```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
  Components/
    About/
    Contact/
    Experience/
    Footer/
    Header/
    Nav/
    Portfolio/
    Services/
    Testimonials/
  assets/
  App.jsx
  main.jsx
  index.css
```

## Customization

- Update your information and images in the `src/assets` and component files.
- Edit the contact details in [`Contact.jsx`](src/Components/Contact/Contact.jsx).
- Replace social links in [`HeaderSocials.jsx`](src/Components/Header/HeaderSocials.jsx).

## License

This project is for personal use. Feel free to customize it for your own portfolio.

---

Built with ❤️ using [React](https://react.dev/) and [Vite](https://vitejs.dev/).
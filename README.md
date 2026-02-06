# Portfolio Website

A modern, responsive portfolio website built with React and Vite, deployed on Google Cloud Run.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion
- **Dashboard Showcase**: Dedicated page to showcase 6 data visualization dashboards
- **Smooth Animations**: Engaging user experience with smooth scroll and animations
- **Cloud Deployment**: Containerized and deployed on Google Cloud Run
- **CI/CD**: Automated deployment from GitHub using Cloud Build

## 📋 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal background and bio
- **Skills**: Technologies and tools expertise
- **Experience**: Work history and achievements
- **Education**: Academic background and certifications
- **Dashboards**: Interactive data visualization projects
- **Contact**: Social links and email contact

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Containerization**: Docker, Nginx
- **Cloud**: Google Cloud Run, Cloud Build, Container Registry
- **CI/CD**: GitHub + Cloud Build triggers

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dentdoc-stack/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update content in `src/data/content.js` with your personal information

4. Add your CV/resume PDF to `public/cv/resume.pdf`

5. Run development server:
   ```bash
   npm run dev
   ```

6. Open `http://localhost:5173` in your browser

## 🏗️ Build

```bash
npm run build
```

The build output will be in the `dist` directory.

## 🐳 Docker

Build the Docker image:
```bash
docker build -t portfolio .
```

Run locally:
```bash
docker run -p 8080:8080 portfolio
```

## ☁️ Deployment to Cloud Run

### Prerequisites

1. Google Cloud Project with billing enabled
2. Cloud Run API, Cloud Build API, and Container Registry API enabled
3. GitHub repository connected to Cloud Build

### Setup Cloud Build Trigger

1. Go to Cloud Build > Triggers in GCP Console
2. Click "Create Trigger"
3. Connect your GitHub repository
4. Configure trigger:
   - **Name**: `portfolio-deploy`
   - **Event**: Push to branch
   - **Branch**: `^main$`
   - **Configuration**: Cloud Build configuration file
   - **Location**: `cloudbuild.yaml`

5. Grant Cloud Build service account permissions:
   - Cloud Run Admin
   - Service Account User

### Manual Deployment

```bash
# Build and push image
gcloud builds submit --config cloudbuild.yaml

# Or deploy directly
gcloud run deploy portfolio \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated
```

### Domain Mapping

1. Go to Cloud Run > portfolio service
2. Click "Manage Custom Domains"
3. Click "Add Mapping"
4. Enter your custom domain
5. Update DNS records as instructed
6. Wait for SSL certificate provisioning (automatic)

## 📝 Customization

### Update Personal Information

Edit `src/data/content.js`:
- `personalInfo`: Name, title, email, social links
- `skills`: Your technologies and tools
- `experience`: Work history
- `education`: Academic background
- `dashboards`: Your dashboard projects with URLs

### Update Colors

Edit `tailwind.config.js` to customize the color scheme.

### Add CV/Resume

Place your PDF file at `public/cv/resume.pdf`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback, reach out via the contact form on the website.

---

Built with ❤️ using React and deployed on Google Cloud Platform
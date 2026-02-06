# Deployment Guide for Google Cloud Run

This guide will walk you through deploying your portfolio website to Google Cloud Run with automated deployments from GitHub.

## Prerequisites

Before you begin, ensure you have:

1. ✅ A Google Cloud Platform account with billing enabled
2. ✅ [Google Cloud SDK (gcloud CLI)](https://cloud.google.com/sdk/docs/install) installed
3. ✅ A GitHub account with this repository
4. ✅ Your CV/resume PDF file ready
5. ✅ Dashboard URLs and information

## Step 1: Update Your Content

### 1.1 Update Personal Information

Edit `src/data/content.js` and update:

```javascript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  location: "Your City, Country",
  bio: "Your professional bio...",
};
```

### 1.2 Update Dashboard Information

Update the `dashboards` array with your actual dashboard URLs:

```javascript
export const dashboards = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    description: "Real-time sales metrics and trends visualization",
    techStack: ["React", "D3.js", "Node.js"],
    url: "https://your-dashboard-1.run.app",
    icon: "📊",
  },
  // ... add all 6 dashboards
];
```

### 1.3 Update Skills, Experience, and Education

Update the `skills`, `experience`, and `education` arrays with your information.

### 1.4 Add Your CV

Place your CV PDF file at: `public/cv/resume.pdf`

## Step 2: Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test in browser at http://localhost:5173
# Verify all sections, links, and CV download
```

## Step 3: Set Up Google Cloud Project

### 3.1 Create a New Project

```bash
# Login to Google Cloud
gcloud auth login

# Create a new project (or use existing)
gcloud projects create YOUR-PROJECT-ID --name="Portfolio"

# Set the project
gcloud config set project YOUR-PROJECT-ID
```

### 3.2 Enable Required APIs

```bash
# Enable Cloud Run API
gcloud services enable run.googleapis.com

# Enable Cloud Build API
gcloud services enable cloudbuild.googleapis.com

# Enable Container Registry API
gcloud services enable containerregistry.googleapis.com

# Enable Artifact Registry API (recommended over Container Registry)
gcloud services enable artifactregistry.googleapis.com
```

### 3.3 Set Default Region

```bash
gcloud config set run/region us-central1
```

Choose from: `us-central1`, `us-east1`, `europe-west1`, `asia-east1`, etc.

## Step 4: Update Cloud Build Configuration

Edit `cloudbuild.yaml` and update the region if needed (line 35):

```yaml
- '--region'
- 'us-central1'  # Change to your preferred region
```

## Step 5: Grant Cloud Build Permissions

```bash
# Get your project number
PROJECT_NUMBER=$(gcloud projects describe YOUR-PROJECT-ID --format="value(projectNumber)")

# Grant Cloud Run Admin role
gcloud projects add-iam-policy-binding YOUR-PROJECT-ID \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/run.admin"

# Grant Service Account User role
gcloud projects add-iam-policy-binding YOUR-PROJECT-ID \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
```

## Step 6: Connect GitHub to Cloud Build

### Option A: Using GCP Console (Recommended)

1. Go to [Cloud Build Triggers](https://console.cloud.google.com/cloud-build/triggers)
2. Click **"Connect Repository"**
3. Select **"GitHub"**
4. Authenticate with GitHub
5. Select your repository: `Dentdoc-stack/portfolio`
6. Click **"Create Trigger"**

Configure the trigger:
- **Name**: `portfolio-deploy`
- **Description**: `Deploy portfolio to Cloud Run on push to main`
- **Event**: Push to a branch
- **Source**: `^main$` (branch pattern)
- **Configuration**: Cloud Build configuration file (YAML or JSON)
- **Location**: `cloudbuild.yaml`
- Click **"Create"**

### Option B: Using gcloud CLI

```bash
# Install the alpha component for triggers
gcloud components install alpha

# Create the trigger (follow prompts to connect GitHub)
gcloud alpha builds triggers create github \
  --repo-name=portfolio \
  --repo-owner=Dentdoc-stack \
  --branch-pattern=^main$ \
  --build-config=cloudbuild.yaml \
  --description="Deploy portfolio to Cloud Run"
```

## Step 7: Deploy for the First Time

### Option A: Push to GitHub (Automated)

```bash
# Commit all changes
git add .
git commit -m "Initial portfolio setup"

# Push to GitHub
git push origin main

# Monitor the build in Cloud Build console
# https://console.cloud.google.com/cloud-build/builds
```

### Option B: Manual Deployment

```bash
# Submit build manually
gcloud builds submit --config cloudbuild.yaml

# Or deploy directly from source
gcloud run deploy portfolio \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --port 8080
```

## Step 8: Verify Deployment

After the build completes, you'll get a Cloud Run URL:

```
Service [portfolio] revision [portfolio-00001-xxx] has been deployed and is serving 100 percent of traffic.
Service URL: https://portfolio-xxxxx-uc.a.run.app
```

Visit the URL to test your portfolio!

## Step 9: Set Up Custom Domain

### 9.1 In Cloud Run Console

1. Go to [Cloud Run](https://console.cloud.google.com/run)
2. Click on your **"portfolio"** service
3. Click **"Manage Custom Domains"**
4. Click **"Add Mapping"**
5. Select your service: **portfolio**
6. Enter your domain: **yourdomain.com**
7. Click **"Continue"**

### 9.2 Verify Domain Ownership

You'll be prompted to verify domain ownership. Follow the instructions to add a TXT record to your DNS.

### 9.3 Update DNS Records

Cloud Run will provide DNS records to add:

**For root domain (yourdomain.com):**
```
Type: A
Name: @
Value: [IP addresses provided by Google]
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: ghs.googlehosted.com
```

### 9.4 Wait for SSL Certificate

Google will automatically provision an SSL certificate. This may take 15-60 minutes.

### 9.5 Update Sitemap

Update `public/sitemap.xml` with your actual domain:

```xml
<loc>https://yourdomain.com/</loc>
```

## Step 10: Monitoring and Logs

### View Logs

```bash
# View Cloud Run logs
gcloud run services logs read portfolio --limit 50

# Or use the console
# https://console.cloud.google.com/run
```

### Monitor Performance

1. Go to Cloud Run console
2. Click on your service
3. View **"Metrics"** tab for:
   - Request count
   - Request latency
   - Container instance count
   - Memory and CPU utilization

## Troubleshooting

### Build Fails

```bash
# Check Cloud Build logs
gcloud builds list --limit 5
gcloud builds log <BUILD_ID>
```

### Service Not Accessible

```bash
# Check service status
gcloud run services describe portfolio --region us-central1

# Ensure it's publicly accessible
gcloud run services add-iam-policy-binding portfolio \
  --region us-central1 \
  --member="allUsers" \
  --role="roles/run.invoker"
```

### Domain Mapping Issues

- Verify DNS records are correctly configured
- Wait 24-48 hours for DNS propagation
- Check SSL certificate status in Cloud Run console

## Cost Optimization

Cloud Run pricing:
- **Free tier**: 2 million requests/month, 360,000 GiB-seconds memory
- **After free tier**: $0.40 per million requests

Tips to minimize costs:
1. Use `min-instances: 0` (cold starts acceptable for portfolio)
2. Use 512Mi memory (sufficient for static site)
3. Set appropriate `max-instances` to prevent runaway costs
4. Use Cloud Scheduler to ping your site during important times

## Updating Your Portfolio

After the initial setup, updates are automatic:

```bash
# Make your changes
git add .
git commit -m "Update experience section"
git push origin main

# Cloud Build automatically deploys!
```

## Next Steps

- [ ] Update `index.html` meta tags with actual content
- [ ] Add Google Analytics tracking (optional)
- [ ] Set up Cloud Monitoring alerts (optional)
- [ ] Create a development branch for testing changes
- [ ] Add custom error pages
- [ ] Optimize images for faster loading

## Resources

- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Cloud Build Documentation](https://cloud.google.com/build/docs)
- [Domain Mapping Guide](https://cloud.google.com/run/docs/mapping-custom-domains)
- [Pricing Calculator](https://cloud.google.com/products/calculator)

---

Need help? Check the [troubleshooting section](#troubleshooting) or open an issue on GitHub.

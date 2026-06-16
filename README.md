# Sky46 Cloud - Huawei ModelArts Learning Simulator

A complete browser-based educational cloud platform that simulates the Huawei Cloud AI workflow for learning and training purposes.

## 🎯 Purpose

Teach users how Huawei Cloud services interact through the complete workflow:

**ECS → OBS → SWR → ModelArts → Model Registry → Deployment → Endpoint Testing**

Every service is logically connected. Actions performed in one service automatically become available in the next.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Shahram2004999/Sky46-Cloud.git
cd Sky46-Cloud

# Install dependencies
npm install

# Setup database
npm run prisma:migrate

# Seed demo data
npm run seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Features

### Dashboard
- Real-time resource overview
- Charts and analytics
- Recent activity feed

### ECS (Elastic Cloud Server)
- Create compute instances
- Multiple OS options (Ubuntu, CentOS, Windows)
- Instance management (start, stop, delete)

### OBS (Object Storage Service)
- Create storage buckets
- Upload and manage files
- Multiple storage types

### SWR (Software Repository for Containers)
- Create container repositories
- Manage container images
- Public/Private visibility

### ModelArts
- **Datasets**: Automatically import from OBS
- **Training Jobs**: Create and monitor training
- **Models**: Registry for trained models
- **Deployments**: Deploy models to endpoints
- **Endpoints**: Test deployed models with real-time predictions

### Monitoring
- Resource usage metrics
- Training activity charts
- Endpoint request tracking

## 🛠 Technology Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: Simple demo authentication
- **UI Components**: Lucide Icons, Recharts

## 📁 Project Structure

```
Sky46-Cloud/
├── app/
│   ├── api/
│   │   ├── ecs/
│   │   ├── obs/
│   │   ├── swr/
│   │   ├── modelarts/
│   │   ├── models/
│   │   ├── deployments/
│   │   ├── endpoints/
│   │   └── auth/
│   ├── (dashboard)/
│   │   ├── page.tsx
│   │   ├── ecs/
│   │   ├── obs/
│   │   ├── swr/
│   │   ├── modelarts/
│   │   ├── monitoring/
│   │   └── settings/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── sidebar/
│   ├── dashboard/
│   ├── ecs/
│   ├── obs/
│   ├── swr/
│   ├── modelarts/
│   └── monitoring/
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
└── public/
```

## 🎓 Educational Features

Every page includes a help panel explaining:
- What each cloud service does
- How services work together
- Real-world use cases
- Learning objectives

## 🔗 Service Integration

**Data Flow:**

1. **Upload to OBS** → Files become available as datasets
2. **Create Image in SWR** → Images available for training jobs
3. **Training Job** → Uses ECS, Dataset, Container Image
4. **Job Completion** → Model automatically registered
5. **Deploy Model** → Creates endpoint URL
6. **Test Endpoint** → Send predictions, get results

## 📊 Database Schema

See `prisma/schema.prisma` for complete data models including:
- User management
- ECS instances
- OBS buckets and files
- SWR repositories and images
- Training jobs and models
- Deployments and endpoints
- Activity logs

## 🚀 Deployment

### Deploy to Vercel

```bash
vercel
```

### Deploy to GitHub Pages

Update `next.config.js` for static export if needed.

## 📝 API Documentation

All API routes are located in `app/api/` and follow RESTful conventions.

### Example: Create ECS Instance

```bash
POST /api/ecs
Content-Type: application/json

{
  "name": "web-server-1",
  "os": "Ubuntu 22.04",
  "size": "Medium"
}
```

## 🔐 Authentication

Demo credentials (change in production):
- Email: `admin@example.com`
- Password: `password123`

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions welcome! Please feel free to submit pull requests.

## 📧 Support

For issues and questions, please open a GitHub issue.

---

**Made with ❤️ for cloud learning**

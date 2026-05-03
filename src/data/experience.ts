export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export const experience: Role[] = [
  {
    title: 'Cloud Engineer 2',
    company: 'FICO',
    location: 'Bengaluru',
    period: 'January 2025 – Present',
    bullets: [
      'Led design and delivery of cloud-native <a href="https://aws.amazon.com/blogs/storage/how-fico-modernizes-file-transfers-with-etl-automation-using-aws-transfer-family/" target="_blank" class="text-sky-600 hover:underline">Managed File Transfer (MFT) platform</a> serving 50+ enterprise clients, achieving 80% cost reduction, featured in official AWS Blog.',
      'Architected and deployed AWS CloudWAN network infrastructure connecting 15+ regions across 130+ AWS accounts with sub-50ms latency, enabling seamless multi-region workload and multi-account connectivity.',
      'Own and operate a multi-region Kubernetes platform on Amazon EKS, enabling secure workload isolation and standardized cluster provisioning across 130+ AWS accounts.',
      'Spearheaded migration from Terraform to Kubernetes-native Crossplane with Argo CD GitOps, eliminating 100% infrastructure drift and reducing provisioning time from 2 weeks to under 10 minutes.',
    ],
    stack: ['Crossplane', 'EKS', 'CloudWAN', 'Identity Center', 'GitHub Actions', 'Transfer Family', 'Lambda', 'Step Functions', 'Fargate'],
  },
  {
    title: 'Cloud Engineer 1',
    company: 'FICO',
    location: 'Bengaluru',
    period: 'July 2023 – December 2024',
    bullets: [
      'Managed lifecycle operations of 30+ production Kubernetes clusters, supporting 500+ microservices with standardized deployment governance and environment promotion workflows.',
      'Architected comprehensive observability framework integrating Splunk, CloudWatch metrics/traces, and custom alerting pipelines, enabling 99.9% platform uptime with proactive issue resolution.',
      'Engineered secure cross-account AWS S3 file transfer pipelines using IAM roles, bucket policies, and KMS encryption, collaborating with enterprise financial services clients.',
    ],
    stack: ['AWS', 'Kafka', 'Pulsar', 'ArgoCD', 'Helm', 'DAPR', 'DynamoDB'],
  },
  {
    title: 'Cloud Engineer Associate',
    company: 'FICO',
    location: 'Bengaluru',
    period: 'July 2021 – June 2023',
    bullets: [
      'Migrated federation service to AWS IAM Identity Center with just-in-time access using Lambda, Step Functions, DynamoDB, and IAM orchestration, enforcing security compliance for 4000+ employees.',
      'Developed Terraform modules and Jenkins jobs enforcing standardised service deployment, now used by 40+ services to deploy infrastructure consistently.',
      'Developed Python automation scripts for Docker image pipelines, PGP key monitoring, and health checks, reducing manual overhead by 60% and eliminating configuration errors.',
      'Implemented cloud cost optimisation strategies including reserved instances and right-sizing, reducing cloud spend by 30%.',
    ],
    stack: ['Lambda', 'Step Functions', 'DynamoDB', 'IAM', 'Terraform', 'Jenkins', 'Python', 'Docker'],
  },
];

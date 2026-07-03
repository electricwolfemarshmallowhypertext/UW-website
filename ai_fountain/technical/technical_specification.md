# AI Fountain: Technical Specification (v1.0)

## 🏗️ Core Infrastructure
To satisfy the "self-hosted" requirement with maximum stability, we will use a **Dockerized** approach on a high-performance VPS (e.g., DigitalOcean or Hetzner).

### 1. CMS & Publishing: Ghost
*   **Engine**: Ghost CMS (Docker Image: `ghost:latest`)
*   **Database**: MySQL 8.0 (Docker Image: `mysql:8.0`)
*   **Newsletter Delivery**: Mailgun (Native Ghost integration)
*   **Storage**: DigitalOcean Spaces (S3-compatible) for image/asset offloading.

### 2. Community: Discourse
*   **Engine**: Discourse (Standard Docker Install)
*   **Integration**: Ghost-to-Discourse SSO (Single Sign-On). Content published on Ghost automatically creates a "Discussion" thread on Discourse.

### 3. Media Hosting
*   **Video**: Primary distribution via **YouTube**. High-quality archival hosting on **Cloudflare Stream** (Headless embed).
*   **Audio**: **Libsyn** or **Spotify for Podcasters** for RSS syndication, with local backup on the VPS.

---

## 🔐 Security & Networking
*   **WAF/DNS**: Cloudflare Proxy (Always-on SSL, DDoS protection).
*   **Reverse Proxy**: Nginx Proxy Manager (Docker container) to handle SSL certificates and traffic routing to Ghost/Discourse containers.
*   **Backups**: Rclone automated daily backups to S3/Spaces.

---

## 🛠️ Phase 1 Technical Checklist
1.  [ ] Provision 4GB RAM / 2 vCPU Droplet.
2.  [ ] Configure Cloudflare DNS records.
3.  [ ] Deploy Nginx Proxy Manager.
4.  [ ] Setup Ghost + MySQL environment variables.
5.  [ ] Setup Discourse via `discourse-setup`.
6.  [ ] Enable SSL for all subdomains (`aifountain.com`, `forum.aifountain.com`).

---

## 📈 Scalability Plan
*   **Phase 1**: Single server (Vertical scaling).
*   **Phase 2**: Decouple DB to Managed MySQL; Move assets to CDN (Horizontal scaling).

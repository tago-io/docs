# Docker Image Configuration

Configure the Docker image settings and authentication credentials for your container deployment. This section allows you to specify which Docker image to deploy and how to authenticate with private registries.

## Docker Image Settings

### Image Configuration

The image configuration determines which Docker container will be deployed in your project:

- **Image**: The full Docker image name including registry and repository path (e.g., `docker.io/library/nginx`, `ghcr.io/company/app`)
- **Image Tag**: The specific version or tag of the image to deploy (e.g., `latest`, `v1.2.0`, `main`)

### Image Naming Examples

**Public Images (Docker Hub):**
- `nginx` (shorthand for `docker.io/library/nginx:latest`)
- `docker.io/library/postgres:13`
- `redis:alpine`

**Private Images:**
- `docker.io/mycompany/myapp:v1.0.0`
- `ghcr.io/organization/service:main`
- `myregistry.com/project/app:latest`

## Authentication

Authentication is required when deploying images from private Docker registries. TagoIO Deploy supports authentication with major registry providers.

### When Authentication is Needed

- **Private repositories** on Docker Hub, GitHub Container Registry, or other registries
- **Organization-owned images** that require access credentials
- **Custom private registries** with authentication requirements

Public images from Docker Hub do not require authentication credentials.

### Docker Hub Authentication

Docker Hub is the default Docker registry and hosts millions of public container images. For private repositories, you'll need to provide authentication credentials.

#### Setting Up Docker Hub Authentication

1. **Get Your Docker Hub Credentials**:
   - **Username**: Your Docker Hub username
   - **Access Token**: Create a personal access token (recommended) or use your account password

2. **Creating a Docker Hub Access Token**:
   1. Log in to [Docker Hub](https://hub.docker.com)
   2. Go to **Account Settings** → **Security**
   3. Click **New Access Token**
   4. Provide a description (e.g., "TagoIO Deploy")
   5. Select appropriate permissions (typically **Read** is sufficient for pulling images)
   6. Click **Generate** and copy the token

3. **Configure Authentication**:
   - **Username**: Enter your Docker Hub username
   - **Registry Access Password**: Paste your access token (not your account password)

#### Docker Hub Image Examples
```
# Public image (no authentication needed)
docker.io/library/nginx:latest

# Private image (authentication required)
docker.io/myusername/private-app:v1.0.0
```

### GitHub Container Registry Authentication

GitHub Container Registry (ghcr.io) allows you to store Docker images alongside your GitHub repositories with fine-grained access controls.

#### Setting Up GitHub Container Registry Authentication

1. **Get Your GitHub Credentials**:
   - **Username**: Your GitHub username
   - **Personal Access Token**: A GitHub personal access token with appropriate permissions

2. **Creating a GitHub Personal Access Token**:
   1. Go to [GitHub Settings](https://github.com/settings/tokens)
   2. Click **Generate new token** → **Generate new token (classic)**
   3. Provide a note (e.g., "TagoIO Deploy Container Access")
   4. Select expiration (choose based on your security requirements)
   5. Select scopes:
      - `read:packages` (required for pulling container images)
      - `repo` (if accessing private repository images)
   6. Click **Generate token** and copy it immediately

3. **Configure Authentication**:
   - **Username**: Enter your GitHub username
   - **Registry Access Password**: Paste your personal access token

### Other Private Registries

TagoIO Deploy supports authentication with other private Docker registries including:

- **AWS Elastic Container Registry (ECR)**
- **Google Container Registry (GCR)**
- **Azure Container Registry (ACR)**
- **Custom private registries**

For these registries:
- **Username**: Registry-specific username or access key
- **Registry Access Password**: Registry-specific password, token, or access key

## Best Practices

### Image Selection
- **Use specific tags** instead of `latest` for production deployments to ensure consistency
- **Choose minimal base images** (like Alpine Linux) to reduce attack surface and deployment time
- **Verify image sources** and use trusted, well-maintained images

### Authentication Security
- **Use access tokens** instead of passwords when available
- **Grant minimal permissions** - typically read-only access is sufficient for image pulling
- **Rotate credentials regularly** and update them in your container configuration
- **Keep credentials secure** - never share or commit authentication credentials

### Registry Performance
- **Choose geographically close registries** when possible to reduce image pull times
- **Consider registry mirrors** or caching for frequently deployed images
- **Monitor registry rate limits** to avoid deployment interruptions

## Troubleshooting

### Common Issues

**Authentication Failed:**
- Verify username and access token are correct
- Check that the access token has appropriate permissions
- Ensure the registry URL in the image name is correct

**Image Not Found:**
- Confirm the image name and tag are spelled correctly
- Verify the image exists in the specified registry
- Check if the image is public or requires authentication

**Pull Rate Limits:**
- Docker Hub has rate limits for anonymous pulls
- Authenticate even for public images to get higher rate limits
- Consider using alternative registries or mirrors

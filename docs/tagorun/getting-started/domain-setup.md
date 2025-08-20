# Domain Setup

Domain setup allows you to configure custom domains for your TagoRUN application, providing a professional, branded experience for your end-users. This feature enables you to host your IoT platform on your own domain instead of using the default TagoIO subdomain.

## Overview

By default, your TagoRUN application is accessible through a subdomain like `yourcompany.run.tago.io`. With custom domain setup, you can configure your application to be accessible through your own domain such as `iot.yourcompany.com` or `app.yourcompany.com`.

### Benefits of Custom Domains

- **Professional Branding**: Use your company's domain for consistent branding
- **White-Label Experience**: Complete removal of TagoIO branding from URLs
- **SSL/TLS Security**: Enhanced security with your own SSL certificates
- **SEO Advantages**: Better search engine optimization with your domain
- **User Trust**: Increased user confidence with familiar domain names

## Domain Configuration Options

### Subdomain Setup

#### Default TagoIO Subdomain
Every TagoRUN account automatically receives a subdomain:
```
Format: {your-company-name}.run.tago.io
Example: acmeiot.run.tago.io
```

**Features:**
- Automatic SSL certificate
- Instant setup
- No DNS configuration required
- Included in all plans

#### Custom Subdomain
You can customize the subdomain portion while keeping the TagoIO domain:
```
Format: {custom-name}.run.tago.io
Example: dashboard.run.tago.io
```

### Custom Domain Setup

#### Full Custom Domain
Configure your TagoRUN application to use your own domain:
```
Examples:
- iot.yourcompany.com
- app.yourcompany.com
- dashboard.yourcompany.com
- platform.yourcompany.com
```

**Requirements:**
- Custom Domain add-on (paid feature)
- Domain ownership verification
- DNS configuration access
- SSL certificate management

## DNS Configuration

### DNS Record Types

#### CNAME Record (Recommended)
```dns
Type: CNAME
Name: iot (or your preferred subdomain)
Value: your-company.run.tago.io
TTL: 300 (or your preference)
```

**Example DNS Configuration:**
```
Host: iot.yourcompany.com
Type: CNAME
Points to: acmeiot.run.tago.io
TTL: 300
```

#### A Record (Alternative)
```dns
Type: A
Name: iot (or your preferred subdomain)
Value: [TagoIO IP Address - provided by support]
TTL: 300
```

### DNS Provider Instructions

#### Common DNS Providers

**Cloudflare:**
1. Log in to Cloudflare dashboard
2. Select your domain
3. Go to DNS settings
4. Add CNAME record:
   - Name: `iot`
   - Content: `your-company.run.tago.io`
   - Proxy status: DNS only (grey cloud)
5. Save record

**GoDaddy:**
1. Log in to GoDaddy account
2. Go to DNS Management
3. Add CNAME record:
   - Host: `iot`
   - Points to: `your-company.run.tago.io`
   - TTL: 1 Hour
4. Save changes

**Route 53 (AWS):**
1. Open Route 53 console
2. Select hosted zone
3. Create record:
   - Record type: CNAME
   - Name: `iot.yourcompany.com`
   - Value: `your-company.run.tago.io`
   - TTL: 300
4. Create record

**Google Domains:**
1. Sign in to Google Domains
2. Select your domain
3. Go to DNS settings
4. Add custom record:
   - Host name: `iot`
   - Type: CNAME
   - Data: `your-company.run.tago.io`
   - TTL: 5 minutes
5. Save

### DNS Propagation

#### Propagation Timeline
- **Local Changes**: 0-30 minutes
- **Regional Propagation**: 2-24 hours
- **Global Propagation**: 24-48 hours
- **Cache Clearing**: Up to 72 hours

#### Checking DNS Propagation
```bash
# Check DNS propagation with nslookup
nslookup iot.yourcompany.com

# Check with dig command
dig iot.yourcompany.com CNAME

# Online tools
# Use DNS checker tools like:
# - whatsmydns.net
# - dnschecker.org
# - dns-lookup.com
```

## SSL Certificate Management

### Automatic SSL (TagoIO Managed)

#### Let's Encrypt Integration
TagoIO automatically provides SSL certificates for custom domains:

**Features:**
- Automatic certificate generation
- Auto-renewal (90-day cycle)
- Multiple domain support
- Wildcard certificate support

**Configuration:**
1. Complete DNS setup
2. Verify domain ownership
3. TagoIO automatically provisions SSL
4. Certificate activation (5-10 minutes)

#### Certificate Validation
```bash
# Check SSL certificate
openssl s_client -connect iot.yourcompany.com:443

# Check certificate expiration
echo | openssl s_client -connect iot.yourcompany.com:443 2>/dev/null | openssl x509 -noout -dates
```

### Custom SSL Certificates

#### Upload Your Own Certificate
If you prefer to use your own SSL certificate:

**Requirements:**
- Valid SSL certificate (.crt file)
- Private key (.key file)
- Certificate chain/bundle (if applicable)
- Certificate must match your domain

**Upload Process:**
1. Access TagoRUN SSL settings
2. Choose "Custom Certificate"
3. Upload certificate files
4. Verify certificate validity
5. Activate custom certificate

#### Certificate Formats
```bash
# PEM format (preferred)
-----BEGIN CERTIFICATE-----
[Certificate content]
-----END CERTIFICATE-----

# Convert from other formats if needed
# Convert P12 to PEM
openssl pkcs12 -in certificate.p12 -out certificate.pem -nodes

# Convert DER to PEM
openssl x509 -inform DER -in certificate.der -out certificate.pem
```

### SSL Configuration Best Practices

#### Security Headers
```nginx
# Recommended security headers
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options DENY;
add_header X-XSS-Protection "1; mode=block";
```

#### TLS Configuration
```nginx
# Strong TLS configuration
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;
ssl_session_cache shared:SSL:10m;
```

## Domain Verification

### Verification Methods

#### DNS TXT Record Verification
```dns
Type: TXT
Name: _tagorun-verification.iot.yourcompany.com
Value: [Verification token provided by TagoIO]
TTL: 300
```

#### Meta Tag Verification
```html
<!-- Add to your domain's index.html -->
<meta name="tagorun-domain-verification" content="[verification-token]" />
```

#### File Upload Verification
```
# Upload verification file to your domain root
https://iot.yourcompany.com/.well-known/tagorun-verification.txt
Content: [verification-token]
```

### Verification Process
1. **Initiate Verification**: Start domain verification in TagoRUN settings
2. **Choose Method**: Select DNS, meta tag, or file upload
3. **Complete Setup**: Add verification record/file
4. **Verify**: Click verify button in TagoRUN
5. **Confirmation**: Receive verification confirmation

## Advanced Configuration

### Multiple Domains

#### Multiple Subdomain Setup
```
Primary: app.yourcompany.com
Secondary: dashboard.yourcompany.com
API: api.yourcompany.com
Mobile: mobile.yourcompany.com
```

#### Configuration Example
```javascript
// Multiple domain configuration
{
  "domains": [
    {
      "domain": "app.yourcompany.com",
      "primary": true,
      "ssl": "auto",
      "redirect_www": true
    },
    {
      "domain": "dashboard.yourcompany.com", 
      "primary": false,
      "ssl": "auto",
      "redirect_to": "app.yourcompany.com"
    }
  ]
}
```

### Redirect Configuration

#### WWW to Non-WWW Redirect
```nginx
# Nginx redirect configuration
server {
    listen 80;
    server_name www.iot.yourcompany.com;
    return 301 https://iot.yourcompany.com$request_uri;
}

server {
    listen 443 ssl;
    server_name www.iot.yourcompany.com;
    return 301 https://iot.yourcompany.com$request_uri;
}
```

#### Old Domain Redirect
```nginx
# Redirect old domain to new domain
server {
    listen 80;
    listen 443 ssl;
    server_name old-domain.com;
    return 301 https://iot.yourcompany.com$request_uri;
}
```

### CDN Integration

#### Cloudflare Integration
```javascript
// Cloudflare configuration for TagoRUN
{
  "cloudflare": {
    "proxy": false,  // Important: Use DNS only mode
    "ssl": "flexible",
    "cache_level": "standard",
    "security_level": "medium",
    "browser_cache_ttl": 4320000
  }
}
```

#### Other CDN Providers
- **AWS CloudFront**: Configure origin to point to TagoRUN
- **Azure CDN**: Set up custom domain with TagoRUN as origin
- **Google Cloud CDN**: Configure load balancer with TagoRUN backend

## Troubleshooting

### Common Issues

#### DNS Not Resolving
```bash
# Troubleshooting steps
1. Check DNS configuration
   nslookup iot.yourcompany.com
   
2. Verify DNS propagation
   dig iot.yourcompany.com @8.8.8.8
   
3. Check TTL values
   dig iot.yourcompany.com +noall +answer
   
4. Clear local DNS cache
   # Windows
   ipconfig /flushdns
   
   # Mac
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemctl restart systemd-resolved
```

#### SSL Certificate Issues
```bash
# Check SSL certificate
openssl s_client -connect iot.yourcompany.com:443 -servername iot.yourcompany.com

# Common SSL issues:
1. Certificate not matching domain
2. Incomplete certificate chain
3. Expired certificate
4. Mixed content warnings
```

#### Domain Verification Failures
1. **DNS TXT Record**: Ensure record is added correctly
2. **Propagation Time**: Wait for DNS propagation
3. **Record Format**: Verify exact token value
4. **Multiple Records**: Remove old verification records

### Diagnostic Tools

#### DNS Diagnostic Commands
```bash
# Check all DNS records
dig iot.yourcompany.com ANY

# Trace DNS resolution
dig +trace iot.yourcompany.com

# Check specific DNS server
dig iot.yourcompany.com @8.8.8.8

# Check reverse DNS
dig -x [IP_ADDRESS]
```

#### SSL Diagnostic Tools
```bash
# SSL Labs test (online)
https://www.ssllabs.com/ssltest/

# OpenSSL certificate check
echo | openssl s_client -connect iot.yourcompany.com:443 2>/dev/null | openssl x509 -noout -text

# Check certificate chain
openssl s_client -connect iot.yourcompany.com:443 -showcerts
```

## Security Considerations

### Domain Security

#### DNSSEC
```dns
# Enable DNSSEC for your domain
# This provides DNS security and prevents DNS spoofing
# Configure through your domain registrar
```

#### CAA Records
```dns
# Certificate Authority Authorization
Type: CAA
Name: iot.yourcompany.com
Value: 0 issue "letsencrypt.org"
```

#### HSTS Configuration
```nginx
# HTTP Strict Transport Security
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

### Access Control

#### IP Restrictions
```nginx
# Restrict access by IP (if needed)
location / {
    allow 192.168.1.0/24;
    allow 203.0.113.0/24;
    deny all;
    proxy_pass http://tagorun_backend;
}
```

#### Geographic Restrictions
```nginx
# Geographic blocking using GeoIP
if ($geoip_country_code = "CN") {
    return 403;
}
```

## Performance Optimization

### DNS Performance

#### DNS Optimization
```
# Use fast DNS providers
Primary: 1.1.1.1 (Cloudflare)
Secondary: 8.8.8.8 (Google)

# Optimize TTL values
Short TTL (300s): During DNS changes
Long TTL (3600s): For stable configurations
```

#### DNS Prefetching
```html
<!-- Add to your application -->
<link rel="dns-prefetch" href="//iot.yourcompany.com">
<link rel="preconnect" href="https://iot.yourcompany.com">
```

### CDN Configuration

#### Cache Optimization
```nginx
# Cache static assets
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Don't cache dynamic content
location ~* \.(html|json|xml)$ {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## Monitoring and Maintenance

### Domain Monitoring

#### Uptime Monitoring
```javascript
// Monitor domain availability
{
  "monitoring": {
    "endpoints": [
      "https://iot.yourcompany.com",
      "https://iot.yourcompany.com/health"
    ],
    "check_interval": 60, // seconds
    "timeout": 30,
    "alerts": {
      "email": ["admin@yourcompany.com"],
      "webhook": "https://your-webhook-url.com/alerts"
    }
  }
}
```

#### SSL Certificate Monitoring
```bash
# Monitor SSL certificate expiration
# Set up alerts 30 days before expiration
*/
30 days before expiration: Warning alert
7 days before expiration: Critical alert
1 day before expiration: Emergency alert
```

### Maintenance Tasks

#### Regular Maintenance
1. **SSL Certificate Renewal**: Monitor and renew certificates
2. **DNS Record Review**: Verify DNS configuration quarterly
3. **Performance Monitoring**: Track domain response times
4. **Security Audits**: Regular security assessments
5. **Backup DNS**: Maintain backup DNS configurations

#### Automation Scripts
```bash
#!/bin/bash
# Domain health check script

DOMAIN="iot.yourcompany.com"

# Check DNS resolution
if nslookup $DOMAIN > /dev/null 2>&1; then
    echo "DNS: OK"
else
    echo "DNS: FAILED"
    # Send alert
fi

# Check SSL certificate
CERT_EXPIRY=$(echo | openssl s_client -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -enddate | cut -d= -f2)
CERT_EXPIRY_EPOCH=$(date -d "$CERT_EXPIRY" +%s)
CURRENT_EPOCH=$(date +%s)
DAYS_TO_EXPIRY=$(( ($CERT_EXPIRY_EPOCH - $CURRENT_EPOCH) / 86400 ))

if [ $DAYS_TO_EXPIRY -gt 30 ]; then
    echo "SSL: OK ($DAYS_TO_EXPIRY days to expiry)"
elif [ $DAYS_TO_EXPIRY -gt 7 ]; then
    echo "SSL: WARNING ($DAYS_TO_EXPIRY days to expiry)"
else
    echo "SSL: CRITICAL ($DAYS_TO_EXPIRY days to expiry)"
    # Send critical alert
fi
```

## Best Practices

### Domain Selection

#### Choosing Domain Names
- **Keep it Short**: Shorter domains are easier to remember
- **Brand Consistency**: Use your brand name in the domain
- **Avoid Hyphens**: Hyphens can be confusing for users
- **Use Subdomains**: Organize different services with subdomains
- **Consider Internationalization**: Think about global audiences

#### Domain Structure Examples
```
Good Examples:
- app.company.com
- iot.company.com
- dashboard.company.com
- platform.company.com

Avoid:
- very-long-complicated-domain.com
- company-iot-dashboard-app.com
- numbers123.company.com
```

### Security Best Practices

#### Domain Security Checklist
- [ ] Enable DNSSEC
- [ ] Configure CAA records
- [ ] Implement HSTS
- [ ] Use strong SSL/TLS configuration
- [ ] Regular security audits
- [ ] Monitor for unauthorized changes
- [ ] Backup DNS configurations
- [ ] Implement access controls

### Performance Best Practices

#### Optimization Checklist
- [ ] Use CDN for static assets
- [ ] Optimize DNS TTL values
- [ ] Enable compression
- [ ] Implement caching strategies
- [ ] Monitor performance metrics
- [ ] Regular performance testing
- [ ] Optimize images and assets
- [ ] Minimize redirects

## Next Steps

After completing domain setup:

1. **SSL Configuration**: Set up [SSL certificates](./ssl-configuration)
2. **Performance Optimization**: Implement caching and CDN
3. **Monitoring Setup**: Configure uptime and performance monitoring
4. **Security Hardening**: Apply additional security measures
5. **Backup Strategy**: Implement [backup and recovery](./backup-recovery) procedures

For related topics, see:
- [SSL Configuration](./ssl-configuration)
- [Branding and Deployment](./branding-deployment)
- [Security and Protection](./security-protection)
- [Analytics Setup](./analytics-setup)

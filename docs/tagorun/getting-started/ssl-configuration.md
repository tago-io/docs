# SSL Configuration

SSL (Secure Sockets Layer) configuration ensures that all communication between your users and TagoRUN application is encrypted and secure. This guide covers SSL certificate setup, management, and best practices for maintaining a secure connection to your IoT platform.

## Overview

SSL/TLS certificates provide encryption for data transmitted between web browsers and your TagoRUN application. They ensure data integrity, authenticate your domain, and provide user confidence through the secure "https" protocol and padlock icon in browsers.

### Benefits of SSL Configuration

- **Data Encryption**: All data transmitted is encrypted and secure
- **Authentication**: Verifies your domain identity to users
- **Trust Indicators**: Browser shows security indicators (padlock, https)
- **SEO Benefits**: Search engines favor secure websites
- **Compliance**: Required for many industry standards and regulations

## SSL Certificate Types

### Automatic SSL (TagoIO Managed)

#### Let's Encrypt Integration
TagoIO automatically provides SSL certificates for all domains:

**Features:**
- **Free Certificates**: No additional cost
- **Automatic Renewal**: Certificates renew automatically every 90 days
- **Multiple Domains**: Support for multiple domain names
- **Wildcard Support**: Covers all subdomains with wildcard certificates
- **Instant Activation**: Certificates activate within minutes

**Default Configuration:**
```javascript
{
  "ssl_config": {
    "provider": "letsencrypt",
    "auto_renewal": true,
    "renewal_days_before": 30,
    "certificate_type": "domain_validated",
    "key_algorithm": "RSA-2048",
    "supported_protocols": ["TLSv1.2", "TLSv1.3"]
  }
}
```

### Custom SSL Certificates

#### Upload Your Own Certificate
For organizations that require specific SSL providers or extended validation certificates:

**Supported Formats:**
- **PEM Format** (preferred)
- **PKCS#12 (.p12, .pfx)**
- **DER Format**

**Required Files:**
1. **Certificate File** (.crt or .pem)
2. **Private Key** (.key)
3. **Certificate Chain** (intermediate certificates)

#### Certificate Requirements
```
Certificate Specifications:
- Key Size: 2048 bits minimum (4096 bits recommended)
- Hash Algorithm: SHA-256 or higher
- Valid Period: Up to 2 years
- Subject Alternative Names: Include all domain variations
```

#### Upload Process
```bash
# 1. Prepare certificate files
certificate.crt    # Your domain certificate
private.key       # Private key
ca-bundle.crt     # Certificate authority chain

# 2. Verify certificate validity
openssl x509 -in certificate.crt -text -noout
openssl rsa -in private.key -check
openssl verify -CAfile ca-bundle.crt certificate.crt

# 3. Check certificate and key match
openssl x509 -noout -modulus -in certificate.crt | openssl md5
openssl rsa -noout -modulus -in private.key | openssl md5
# Both commands should return the same hash
```

## SSL Configuration Process

### Automatic SSL Setup

#### For Default Subdomains
```
Domain: yourcompany.run.tago.io
SSL: Automatically configured
Certificate: Let's Encrypt
Renewal: Automatic
```

#### For Custom Domains
1. **Complete Domain Setup**: Configure DNS records first
2. **Domain Verification**: Verify domain ownership
3. **Certificate Request**: TagoIO requests certificate from Let's Encrypt
4. **Automatic Installation**: Certificate installs automatically
5. **Activation**: SSL becomes active within 5-10 minutes

### Manual SSL Configuration

#### Custom Certificate Upload
1. **Access SSL Settings**: Go to TagoRUN SSL configuration
2. **Choose Custom Certificate**: Select manual certificate option
3. **Upload Files**:
   - Certificate file
   - Private key file
   - Certificate chain (if applicable)
4. **Validation**: System validates certificate integrity
5. **Activation**: Certificate becomes active immediately

#### Certificate Conversion
```bash
# Convert PKCS#12 to PEM format
openssl pkcs12 -in certificate.p12 -out certificate.pem -nodes
openssl pkcs12 -in certificate.p12 -out private.key -nodes -nocerts

# Convert DER to PEM format
openssl x509 -inform DER -in certificate.der -out certificate.pem
openssl rsa -inform DER -in private.der -out private.key

# Create certificate bundle
cat certificate.pem intermediate.pem root.pem > fullchain.pem
```

## Advanced SSL Configuration

### TLS Protocol Configuration

#### Supported TLS Versions
```nginx
# Recommended TLS configuration
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;
```

#### Cipher Suites
```
Recommended Cipher Suites:
- ECDHE-ECDSA-AES128-GCM-SHA256
- ECDHE-RSA-AES128-GCM-SHA256  
- ECDHE-ECDSA-AES256-GCM-SHA384
- ECDHE-RSA-AES256-GCM-SHA384
- DHE-RSA-AES128-GCM-SHA256
- DHE-RSA-AES256-GCM-SHA384
```

### Security Headers

#### HSTS (HTTP Strict Transport Security)
```nginx
# Force HTTPS for all future requests
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

#### Additional Security Headers
```nginx
# Prevent content type sniffing
add_header X-Content-Type-Options nosniff;

# Prevent clickjacking
add_header X-Frame-Options DENY;

# Enable XSS protection
add_header X-XSS-Protection "1; mode=block";

# Content Security Policy
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';";
```

### Certificate Transparency

#### CT Log Monitoring
```javascript
// Monitor Certificate Transparency logs
{
  "ct_monitoring": {
    "enabled": true,
    "domains": ["iot.yourcompany.com", "*.yourcompany.com"],
    "notification_email": "security@yourcompany.com",
    "check_interval": "daily"
  }
}
```

## SSL Certificate Management

### Certificate Lifecycle

#### Automatic Renewal Process
```javascript
// Let's Encrypt automatic renewal
{
  "renewal_schedule": {
    "check_interval": "daily",
    "renew_threshold": "30_days",
    "retry_attempts": 3,
    "retry_interval": "6_hours",
    "notification_settings": {
      "success": false,
      "failure": true,
      "upcoming_expiry": true
    }
  }
}
```

#### Manual Renewal Process
```bash
# For custom certificates
1. Obtain new certificate from CA
2. Validate certificate integrity
3. Upload new certificate files
4. Verify installation
5. Test SSL configuration
```

### Certificate Monitoring

#### Expiration Monitoring
```bash
#!/bin/bash
# SSL certificate expiration checker

DOMAIN="iot.yourcompany.com"
WARNING_DAYS=30
CRITICAL_DAYS=7

# Get certificate expiration date
EXPIRY_DATE=$(echo | openssl s_client -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -enddate | cut -d= -f2)
EXPIRY_EPOCH=$(date -d "$EXPIRY_DATE" +%s)
CURRENT_EPOCH=$(date +%s)
DAYS_TO_EXPIRY=$(( ($EXPIRY_EPOCH - $CURRENT_EPOCH) / 86400 ))

# Check expiration status
if [ $DAYS_TO_EXPIRY -le $CRITICAL_DAYS ]; then
    echo "CRITICAL: SSL certificate expires in $DAYS_TO_EXPIRY days"
    # Send critical alert
elif [ $DAYS_TO_EXPIRY -le $WARNING_DAYS ]; then
    echo "WARNING: SSL certificate expires in $DAYS_TO_EXPIRY days"
    # Send warning alert
else
    echo "OK: SSL certificate expires in $DAYS_TO_EXPIRY days"
fi
```

#### Automated Monitoring Setup
```javascript
// SSL monitoring configuration
{
  "ssl_monitoring": {
    "check_frequency": "daily",
    "alerts": {
      "30_days": {
        "level": "info",
        "channels": ["email"]
      },
      "14_days": {
        "level": "warning", 
        "channels": ["email", "slack"]
      },
      "7_days": {
        "level": "critical",
        "channels": ["email", "slack", "sms"]
      }
    },
    "health_checks": {
      "certificate_validity": true,
      "chain_verification": true,
      "revocation_status": true,
      "protocol_support": true
    }
  }
}
```

## Multi-Domain SSL Configuration

### Wildcard Certificates

#### Wildcard Certificate Setup
```
Certificate Type: Wildcard
Domain: *.yourcompany.com
Covers:
- app.yourcompany.com
- iot.yourcompany.com
- dashboard.yourcompany.com
- api.yourcompany.com
```

#### SAN (Subject Alternative Names) Certificates
```
Primary Domain: iot.yourcompany.com
Alternative Names:
- app.yourcompany.com
- dashboard.yourcompany.com
- mobile.yourcompany.com
- www.iot.yourcompany.com
```

### Multi-Domain Configuration
```javascript
// Multiple domain SSL configuration
{
  "ssl_domains": [
    {
      "domain": "iot.yourcompany.com",
      "certificate_type": "auto",
      "primary": true
    },
    {
      "domain": "app.yourcompany.com", 
      "certificate_type": "auto",
      "redirect_to": "iot.yourcompany.com"
    },
    {
      "domain": "dashboard.yourcompany.com",
      "certificate_type": "custom",
      "certificate_file": "custom-cert.pem"
    }
  ]
}
```

## SSL Performance Optimization

### Performance Configuration

#### SSL Session Management
```nginx
# SSL session optimization
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
ssl_session_tickets off;
```

#### OCSP Stapling
```nginx
# Enable OCSP stapling for faster certificate validation
ssl_stapling on;
ssl_stapling_verify on;
ssl_trusted_certificate /path/to/ca-bundle.pem;
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;
```

#### HTTP/2 Configuration
```nginx
# Enable HTTP/2 for better performance
listen 443 ssl http2;
```

### Certificate Optimization

#### Key Size vs Performance
```
RSA Key Sizes:
- 2048 bits: Good security, better performance
- 3072 bits: Higher security, moderate performance impact
- 4096 bits: Maximum security, higher performance impact

ECDSA Keys (recommended):
- P-256: Excellent security, best performance
- P-384: Higher security, good performance
```

#### Certificate Chain Optimization
```bash
# Optimize certificate chain order
1. Server certificate (your domain)
2. Intermediate certificate(s)
3. Root certificate (optional, usually not included)

# Verify chain order
openssl s_client -connect iot.yourcompany.com:443 -showcerts
```

## Security Best Practices

### SSL Security Hardening

#### Disable Weak Protocols
```nginx
# Disable weak SSL/TLS protocols
ssl_protocols TLSv1.2 TLSv1.3;

# Disable weak ciphers
ssl_ciphers HIGH:!aNULL:!MD5:!3DES:!CAMELLIA:!AES128;
```

#### Perfect Forward Secrecy
```nginx
# Enable Perfect Forward Secrecy
ssl_prefer_server_ciphers off;
ssl_ecdh_curve secp384r1;
ssl_dhparam /path/to/dhparam.pem;
```

#### Generate Strong DH Parameters
```bash
# Generate strong Diffie-Hellman parameters
openssl dhparam -out dhparam.pem 4096
```

### Certificate Security

#### Certificate Validation
```bash
# Validate certificate before installation
openssl x509 -in certificate.crt -text -noout

# Check certificate chain
openssl verify -CAfile ca-bundle.crt certificate.crt

# Verify certificate matches private key
openssl x509 -noout -modulus -in certificate.crt | openssl md5
openssl rsa -noout -modulus -in private.key | openssl md5
```

#### Key Security
```bash
# Generate secure private key
openssl genrsa -out private.key 4096

# Generate ECDSA key (recommended)
openssl ecparam -genkey -name secp384r1 -out private-ec.key

# Protect private key
chmod 600 private.key
chown root:root private.key
```

## Troubleshooting SSL Issues

### Common SSL Problems

#### Certificate Chain Issues
```bash
# Check certificate chain completeness
openssl s_client -connect iot.yourcompany.com:443 -showcerts

# Verify chain order
curl -I https://iot.yourcompany.com

# Test with SSL Labs
# https://www.ssllabs.com/ssltest/
```

#### Mixed Content Warnings
```javascript
// Fix mixed content issues
// Change all HTTP resources to HTTPS
http://example.com/resource.js  // Bad
https://example.com/resource.js // Good
//example.com/resource.js       // Protocol relative (acceptable)
```

#### Certificate Mismatch
```bash
# Check certificate domain names
openssl x509 -in certificate.crt -text -noout | grep -A1 "Subject Alternative Name"

# Verify certificate matches domain
curl -I https://iot.yourcompany.com
```

### Diagnostic Tools

#### SSL Testing Commands
```bash
# Test SSL connection
openssl s_client -connect iot.yourcompany.com:443

# Check certificate details
echo | openssl s_client -connect iot.yourcompany.com:443 2>/dev/null | openssl x509 -noout -text

# Check certificate expiration
echo | openssl s_client -connect iot.yourcompany.com:443 2>/dev/null | openssl x509 -noout -dates

# Test specific TLS version
openssl s_client -connect iot.yourcompany.com:443 -tls1_2
```

#### Online SSL Testing Tools
```
Recommended SSL Testing Services:
- SSL Labs SSL Test: https://www.ssllabs.com/ssltest/
- SSL Checker: https://www.sslchecker.com/
- GeoCerts SSL Checker: https://www.geocerts.com/ssl-checker
- DigiCert SSL Installation Checker: https://www.digicert.com/help/
```

### Error Resolution

#### Common Error Messages
```bash
# Certificate not trusted
curl: (60) SSL certificate problem: unable to get local issuer certificate
# Solution: Install complete certificate chain

# Certificate expired
curl: (60) SSL certificate problem: certificate has expired
# Solution: Renew certificate

# Hostname mismatch
curl: (51) SSL: certificate subject name does not match target host name
# Solution: Update certificate with correct domain names

# Self-signed certificate
curl: (60) SSL certificate problem: self signed certificate
# Solution: Use certificate from trusted CA
```

#### Browser-Specific Issues
```javascript
// Handle browser-specific SSL issues
{
  "browser_compatibility": {
    "chrome": {
      "min_tls": "1.2",
      "security_level": "medium"
    },
    "firefox": {
      "min_tls": "1.2", 
      "security_tls_insecure_fallback_hosts": []
    },
    "safari": {
      "min_tls": "1.2",
      "require_sni": true
    },
    "mobile": {
      "android": "support_legacy_cipher_suites",
      "ios": "require_perfect_forward_secrecy"
    }
  }
}
```

## Compliance and Standards

### Industry Standards

#### PCI DSS Compliance
```
PCI DSS SSL Requirements:
- Use only strong cryptography and security protocols
- TLS 1.2 minimum (TLS 1.3 preferred)
- Disable weak cipher suites
- Implement proper key management
- Regular security testing
```

#### HIPAA Compliance
```
HIPAA SSL Requirements:
- Encrypt all data in transit
- Use strong encryption methods
- Implement access controls
- Maintain audit logs
- Regular security assessments
```

#### SOC 2 Compliance
```
SOC 2 SSL Requirements:
- Implement encryption controls
- Monitor certificate lifecycle
- Maintain security documentation
- Regular penetration testing
- Incident response procedures
```

### Certificate Authority Requirements

#### Extended Validation (EV) Certificates
```
EV Certificate Benefits:
- Green address bar (legacy browsers)
- Company name in certificate
- Highest level of validation
- Enhanced user trust
- Suitable for e-commerce
```

#### Organization Validated (OV) Certificates
```
OV Certificate Features:
- Organization identity verification
- Company name in certificate
- Intermediate trust level
- Suitable for business websites
```

#### Domain Validated (DV) Certificates
```
DV Certificate Features:
- Domain ownership verification only
- Quick issuance (minutes to hours)
- Basic encryption protection
- Suitable for personal websites
```

## Automation and Monitoring

### Automated SSL Management

#### Certificate Lifecycle Automation
```bash
#!/bin/bash
# Automated SSL certificate management script

DOMAIN="iot.yourcompany.com"
CERT_PATH="/etc/ssl/certs"
LOG_FILE="/var/log/ssl-management.log"

# Function to log messages
log_message() {
    echo "$(date): $1" >> $LOG_FILE
}

# Check certificate expiration
check_expiration() {
    EXPIRY_DATE=$(echo | openssl s_client -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -enddate | cut -d= -f2)
    EXPIRY_EPOCH=$(date -d "$EXPIRY_DATE" +%s)
    CURRENT_EPOCH=$(date +%s)
    DAYS_TO_EXPIRY=$(( ($EXPIRY_EPOCH - $CURRENT_EPOCH) / 86400 ))
    
    echo $DAYS_TO_EXPIRY
}

# Renew certificate if needed
renew_certificate() {
    DAYS=$(check_expiration)
    
    if [ $DAYS -le 30 ]; then
        log_message "Certificate expires in $DAYS days, renewing..."
        # Add renewal logic here
        log_message "Certificate renewal initiated"
    else
        log_message "Certificate valid for $DAYS days, no renewal needed"
    fi
}

# Run the check
renew_certificate
```

#### Monitoring Integration
```javascript
// SSL monitoring with alerting
{
  "ssl_monitoring": {
    "enabled": true,
    "domains": ["iot.yourcompany.com"],
    "checks": {
      "certificate_expiry": {
        "interval": "daily",
        "thresholds": {
          "warning": 30,
          "critical": 7
        }
      },
      "certificate_validity": {
        "interval": "hourly",
        "validate_chain": true,
        "check_revocation": true
      },
      "protocol_security": {
        "interval": "weekly",
        "min_tls_version": "1.2",
        "require_strong_ciphers": true
      }
    },
    "notifications": {
      "email": ["admin@yourcompany.com"],
      "webhook": "https://monitoring.yourcompany.com/ssl-alerts"
    }
  }
}
```

## Next Steps

After configuring SSL:

1. **Security Testing**: Perform comprehensive SSL security testing
2. **Performance Monitoring**: Monitor SSL performance impact
3. **Compliance Verification**: Ensure compliance with industry standards
4. **Backup Procedures**: Implement [backup and recovery](./backup-recovery) for certificates
5. **Regular Audits**: Schedule regular SSL security audits

For related topics, see:
- [Domain Setup](./domain-setup) for domain configuration
- [Security and Protection](./security-protection) for additional security measures
- [Performance Optimization](./analytics-setup) for monitoring SSL performance
- [Backup and Recovery](./backup-recovery) for certificate backup procedures

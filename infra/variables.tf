variable "aws_region" {
  description = "AWS region for resources (except ACM which is always us-east-1)"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Domain name for the portfolio site"
  type        = string
  default     = "veeracs.info"
}

variable "route53_zone_id" {
  description = "Route53 hosted zone ID for the domain"
  type        = string
  default     = "Z05706281FAK5KTGTYUDT"  # Same zone as cloud-native-ecommerce
}

variable "project_name" {
  description = "Project name for tagging"
  type        = string
  default     = "veeracs-portfolio"
}

variable "s3_bucket_name" {
  description = "S3 bucket name for static site"
  type        = string
  default     = "veeracs-portfolio-site"
}

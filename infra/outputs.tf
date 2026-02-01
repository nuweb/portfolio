output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.portfolio.id
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.portfolio.arn
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (needed for cache invalidation)"
  value       = aws_cloudfront_distribution.portfolio.id
}

output "cloudfront_distribution_domain" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.portfolio.domain_name
}

output "website_url" {
  description = "URL of the portfolio website"
  value       = "https://${var.domain_name}"
}

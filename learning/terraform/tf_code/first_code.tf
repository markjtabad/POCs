provider "aws" {
    profile = "default"
    region  = "ap-southeast-1"
}

resource "aws_s3_bucket" "tf_learning" {
    bucket  = "tf-learning-markjtabad"
    acl     = "private"
}
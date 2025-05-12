provider "aws" {
  region = "us-west-2"
}

resource "aws_dynamodb_table" "patient_data" {
  name         = "PatientRecords"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "patientId"

  attribute {
    name = "patientId"
    type = "S"
  }

  ttl {
    attribute_name = "timestamp"
    enabled        = true
  }
}

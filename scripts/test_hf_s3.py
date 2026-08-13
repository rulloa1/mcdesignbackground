import boto3
import os

TOKEN = "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"
ENDPOINT = "https://s3.huggingface.co"
BUCKET_NAME = "roryulloa88-bucket1"

s3 = boto3.client(
    "s3",
    endpoint_url=ENDPOINT,
    aws_access_key_id=TOKEN,
    aws_secret_access_key=TOKEN,
    region_name="us-east-1"
)

try:
    print(f"Listing objects in {BUCKET_NAME}...")
    response = s3.list_objects_v2(Bucket=BUCKET_NAME, MaxKeys=10)
    if "Contents" in response:
        for obj in response["Contents"]:
            print(f"- {obj['Key']}")
    else:
        print("No objects found or bucket empty.")
except Exception as e:
    print(f"Error: {e}")

# just update the two buckets.
aws s3 cp src s3://www.dhetti.us/ --recursive
aws s3 cp src s3://dhetti.us/ --recursive
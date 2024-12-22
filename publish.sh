# update the dist folder
npm run build

# just update the two buckets.
aws s3 cp dist s3://www.dhetti.us/ --recursive
aws s3 cp dist s3://dhetti.us/ --recursive
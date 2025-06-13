# update the dist folder
npm run build

# just update the two buckets.
aws s3 cp dist s3://www.dhetti.us/ --recursive
aws s3 cp dist s3://dhetti.us/ --recursive

# need to invalidate the cache. 
aws cloudfront create-invalidation --distribution-id E1SJI4KQNK8TNC --paths "/*"
aws cloudfront create-invalidation --distribution-id E17QJ8EWJYCDDT --paths "/*"
import os 
import re
import json

def get_base(file_name):
    pattern = r"(.*)\..*"
    return re.search(pattern, file_name).group(1)

# This gives us the absolute path to the directory containing all images. 
gallery_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'public', 'gallery')

# images are named according to a pattern.
# every image has two copies saved: a thumbnail image and the full image.
# for an image, with name NAME, the thumbnail is `<NAME>.<ext>` and the full image is `<NAME>_full.<ext>`. 
file_names = [f for f in os.listdir(gallery_path) if os.path.isfile(os.path.join(gallery_path, f))]

thumbnails = []
full_images = []
for file_name in file_names:
    if '_full.' in file_name:
        full_images.append(file_name)
    else:
        thumbnails.append(file_name)

name_to_files = {}
while len(thumbnails) > 0:
    # Get thumbnail and basename. 
    thumbnail = thumbnails.pop()
    base_name = get_base(thumbnail)

    # Pattern to find the corresponding full filename. 
    pattern = re.compile(base_name + '_full\..+$')

    full_image = None
    for i in range(len(full_images)):
        if pattern.match(full_images[i]):
            full_image = full_images.pop(i)
            break
    
    if full_image is not None:
        name_to_files[base_name] = { 'thumb': thumbnail, 'full': full_image }
    else:
        print('ERROR: no full image for the thumbnail ' + thumbnail)

while len(full_images) > 0:
    full_image = full_images.pop()
    print('ERROR: no thumbnail for the full image ' + full_image)

print(json.dumps(name_to_files))






import os
curr_dir =  os.path.dirname(__file__)
files = [f for f in os.listdir(os.path.join(curr_dir,'gallery')) if os.path.isfile(os.path.join(curr_dir, 'gallery',f))]

final_str = 'const images = ['
for file in files:
    final_str += "'" + file + "',"

final_str += '];'

print(final_str)




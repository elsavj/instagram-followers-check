import json

# Load the JSON files
with open('following.json', 'r') as f:
    following = json.load(f)

with open('followers_1.json', 'r') as f:
    followers = json.load(f)

# Extract usernames (adjust keys if needed based on your JSON structure)
following_names = {user['title'] for user in following['relationships_following']}

followers_names = set()
count = 0
for user in followers:
    # string_list_data = json.loads(user['string_list_data'])
    string_list_data = user['string_list_data']
    followers_names.update({user['value'] for user in string_list_data})
    # print(f"/////////////followers_names: {followers_names}")


print(f"Following loaded: {len(following_names)}")
print(f"Followers loaded: {len(followers_names)}")

# Find accounts you follow but don't follow back
not_following_back = following_names - followers_names

# Write to file
with open('not_following_back.txt', 'w') as f:
    for username in sorted(not_following_back):
        f.write(username + '\n')

print(f"Found {len(not_following_back)} accounts not following back")
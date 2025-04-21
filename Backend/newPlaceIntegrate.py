import pandas as pd

# Load existing and new data
original_df = pd.read_csv("tourist_places.csv")
new_df = pd.read_csv("new_places.csv")

# Combine them
combined_df = pd.concat([original_df, new_df], ignore_index=True)

# Drop duplicates (just in case)
combined_df = combined_df.drop_duplicates()

# Save it back
combined_df.to_csv("tourist_places.csv", index=False)

print("Successfully appended new places. Total entries:", len(combined_df))

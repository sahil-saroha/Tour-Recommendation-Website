import pandas as pd

# Load the combined CSV
df = pd.read_csv("tourist_places.csv")

# Check for missing values
print("Missing Values:\n", df.isnull().sum())

# Remove duplicates (if any)
df = df.drop_duplicates()

# Convert categorical text columns to lowercase
df["Category"] = df["Category"].str.lower()
df["Location"] = df["Location"].str.lower()
df["Activities"] = df["Activities"].str.lower()
df["Average Cost"] = df["Average Cost"].str.lower()

# Save cleaned data
df.to_csv("tourist_places_cleaned.csv", index=False)

print("Data cleaned and saved as 'tourist_places_cleaned.csv'. Total entries:", len(df))

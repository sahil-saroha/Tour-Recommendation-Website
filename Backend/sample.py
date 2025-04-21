import pandas as pd  

# Define data
data = [
    ["Taj Mahal", "Historical", "Agra", "October-March", "Sightseeing", "Mid-range", 4.8],
    ["Manali", "Hill Station", "Himachal Pradesh", "March-June", "Trekking", "Budget", 4.5],
    ["Goa Beach", "Beach", "Goa", "November-February", "Boating", "Luxury", 4.7]
]

# Create DataFrame
df = pd.DataFrame(data, columns=["Name", "Category", "Location", "Best Time to Visit", "Activities", "Average Cost", "Ratings"])

# Save as CSV
df.to_csv("tourist_places.csv", index=False)

print("CSV file created successfully!")

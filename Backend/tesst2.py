import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load the cleaned data
df = pd.read_csv("tourist_places_cleaned.csv")

# Combine relevant text features for recommendation
df["combined_features"] = df["Category"] + " " + df["Activities"] + " " + df["Location"]

# Convert text into numerical vectors
vectorizer = TfidfVectorizer(stop_words="english")
feature_vectors = vectorizer.fit_transform(df["combined_features"])

# Compute similarity scores
similarity_matrix = cosine_similarity(feature_vectors)

# Function to recommend places
def recommend_places(place_name, top_n=5):
    if place_name not in df["Name"].values:
        return "Place not found in dataset."
    
    # Get the index of the place
    place_index = df[df["Name"] == place_name].index[0]
    
    # Get similarity scores for the place
    scores = list(enumerate(similarity_matrix[place_index]))
    
    # Sort by highest similarity score
    sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)[1:top_n+1]
    
    # Get recommended place names
    recommendations = [df.iloc[i[0]]["Name"] for i in sorted_scores]
    
    return recommendations

# Example usage
print("Recommended places similar to Manali:", recommend_places("Manali"))

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# Load the cleaned data
df = pd.read_csv("tourist_places_cleaned.csv")

# Strip whitespace from names (important for matching)
df["Name"] = df["Name"].str.strip()

# Combine relevant text features
df["combined_features"] = df["Category"] + " " + df["Activities"] + " " + df["Location"]

# Convert text into numerical vectors
vectorizer = TfidfVectorizer(stop_words="english")
feature_vectors = vectorizer.fit_transform(df["combined_features"])

# Compute similarity scores
similarity_matrix = cosine_similarity(feature_vectors)

# Function to recommend places
def recommend_places(place_name, top_n=5):
    place_name = place_name.lower().strip()

    # Check if place exists (case-insensitive)
    if place_name not in df["Name"].str.lower().values:
        return []

    # Get index of the place (case-insensitive match)
    place_index = df[df["Name"].str.lower() == place_name].index[0]
    scores = list(enumerate(similarity_matrix[place_index]))
    sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)[1:top_n+1]

    recommendations = [df.iloc[i[0]]["Name"] for i in sorted_scores]
    return recommendations

# API route
@app.route('/recommend', methods=['GET'])
def recommend():
    place_name = request.args.get('place')
    if not place_name:
        return jsonify({"error": "Please provide a place name"}), 400

    recommendations = recommend_places(place_name)
    return jsonify({"place": place_name, "recommendations": recommendations})

# Run the server
if __name__ == '__main__':
    app.run(debug=True)

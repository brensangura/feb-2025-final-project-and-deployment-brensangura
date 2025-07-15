from flask import Flask, render_template
import random
import pandas as pd
from datetime import datetime

app = Flask(__name__)

# Fake AI Health Data Generator
def generate_health_data():
    heart_rate = random.randint(60, 100)
    if random.random() < 0.1:  # 10% chance of anomaly
        heart_rate = random.randint(110, 150)
    
    return {
        "heart_rate": heart_rate,
        "timestamp": datetime.now().strftime("%H:%M:%S"),
        "is_anomaly": heart_rate > 100,
    }

# Routes
@app.route("/")
def dashboard():
    return render_template("dashboard.html")

@app.route("/api/health")
def health_api():
    data = generate_health_data()
    return data

if __name__ == "__main__":
    app.run(debug=True)
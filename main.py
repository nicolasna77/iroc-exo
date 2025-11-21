from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel


uri = "mongodb+srv://nicolasabreu:CanoniquE@cluster0.ijil4on.mongodb.net/exo?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri)

database = client["exo"]
collection = database["exo"]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
   name: str

@app.post("/")
def create_item(item: Item):
  item_id = collection.insert_one({"name": item.name})
  return {"status": "ok", "id": str(item_id.inserted_id)}
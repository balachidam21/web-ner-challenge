from collections import defaultdict
from crypt import methods
from urllib import response
from flask import Flask, request
from flask_cors import CORS, cross_origin
import spacy
import json

app = Flask(__name__)
cors = CORS(app,resources={r"/*" : {"origins":"*"}})
app.config["CORS_HEADERS"] = "Content-Type"

nlp = spacy.load('en_core_web_sm')

def get_named_entity(text):
    res = []
    try:
        corpus = nlp(text)    
        res = [ {"entity":ent.label_, "text":ent.text} for ent in corpus.ents if ent.label_ in ['PERSON','GPE','LOC', 'ORG']]
    except:
        print("Error Occured! Could not perform Entity Recognition")
    return res
    



@app.route("/get_entity", methods=['POST'])
@cross_origin(origins='*')
def get_entity():
    request_data = request.get_json()
    text = request_data['text']
    response = get_named_entity(text)
    print(response)
    return json.dumps(response)



@app.route("/")
def hello_world():
    return "Hello World!"

if __name__ =="__main__":
    app.run(debug=True)
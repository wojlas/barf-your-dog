import datetime
import json
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

meatBase = [
    {
      'Id': 1,
      'Name': 'Filet z kurczaka',
      'Weight': 100,
      'Kcal': 284,
      'Protein': 53.4,
      'Fats': 6.2,
    },
    {
      'Id': 2,
      'Name': 'Filet z indyka',
      'Weight': 100,
      'Kcal': 102,
      'Protein': 24,
      'Fats': 1,
    },
    {
      'Id': 3,
      'Name': 'Serca z kurczaka',
      'Weight': 100,
      'Kcal': 153,
      'Protein': 16,
      'Fats': 9.3,
    },
    {
      'Id': 4,
      'Name': 'Wątroba z kurczaka',
      'Weight': 100,
      'Kcal': 136,
      'Protein': 19.1,
      'Fats': 6.3,
    },
  ]

vegeBase = [
    {
      'Id': 1,
      'Name': 'Marchewka',
      'Weight': 100,
      'Kcal': 41,
      'Protein': 0.9,
      'Fats': 0.2,
    },
    {
      'Id': 2,
      'Name': 'Brokuł',
      'Weight': 100,
      'Kcal': 34,
      'Protein': 2.8,
      'Fats': 0.3,
    },
    {
      'Id': 3,
      'Name': 'Truskawka',
      'Weight': 100,
      'Kcal': 32,
      'Protein': 0.7,
      'Fats': 0.3,
    },
    {
      'Id': 4,
      'Name': 'Burak',
      'Weight': 100,
      'Kcal': 43,
      'Protein': 1.61,
      'Fats': 0.17,
    },
  ]

dogWeightBase = [
    {
      'Id': 1,
      'WeightId': 1,
      'Name': 'Luna',
      'FullName': '',
      'Sex': 'F',
      'Weight': 11,
      'DailyMeal': 4,
      'Target': 13,
    },
  ]


#-- Meat service routes --#

@app.route('/meat/all/', methods=['GET'])
def getAllMeats():
  return jsonify(meatBase)

#-- Vegetables and fruit service routes --#

@app.route('/vege/all/', methods=['GET'])
def getAllVeges():
    return jsonify(vegeBase)

#-- Weight service routes --#

@app.route('/weight/<int:id>/', methods=['GET'])
def getDogWeight(id):
    selectedDogWeightArr = []
    for dog in dogWeightBase:
        if dog['Id'] == int(id):
            selectedDogWeightArr.append(dog)

    for dog in selectedDogWeightArr:
        if dog['WeightId'] > selectedDogWeightArr[0]['WeightId']:
            selectedDogWeightArr[0] = dog

    return jsonify(selectedDogWeightArr[0])

@app.route('/weight/add/', methods=['POST'])
def setNewWeight():
  if request.method == 'POST':
    data = request.data

    dogWeightBase.append(data)

    return jsonify({'isSuccess': 'true', 'message': 'saved correctly'}), 200


  

        

    


#-- Service routes --#

@app.route('/', methods=['GET'])
def indexService():
    return 'service routes main page'

@app.errorhandler(404) 
def invalid_route(e): 
    return jsonify({'errorCode' : 404, 'message' : 'Route not found'})


if __name__ == '__main__':
    app.run(debug =True)
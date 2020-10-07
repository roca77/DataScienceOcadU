# Ocad University Project
Coded with passion by: Youssouf Traore

This is the Machine Learning application for Decoding Origins project. The model uses Tensorflow JS and Express Node JS to make inferance on images, to determine the type of tribal scars found in Africa. The code includes a front-end piece located in the "static" folder, under predict-with-tfjs.html

When prediction is done on an image, we will receive the top candidate and the chance of being correct in percentage.

The actual models are located in static > tfjs-models > mobilenet, and all two json and .bin files are requires.

 
#Running the model
1. Make sure Node is initalised and the dependencies are downloaded: cors, cors-util-is, express
2. Run: npm start
3. In the browser, go to: localhost:81/predict-with-tfjs.html
  

 To do: 
 - show in perchantage, instead of decimal.
 - Add a feedback function, capture image, feedback, and probably send a notification to user.
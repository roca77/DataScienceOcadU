# Ocad University Project

This is the Machine Learning application for Decoding Origins project. The model uses Tensorflow JS and Express Node JS to run. It also include a front end piece located in the "static" folder, under predict-with-tfjs.html

When prediction is done on an image, we will receive the top candidate and the chance of being correct in percentage. 
 -To do: show in perchantage, instead of decimal.
 - Add a feedback function, capture image, feedback, and probably send a notification to user.

The actual models are located in static > tfjs-models > mobilenet, and all two json and .bin files are requires. Previously, the models were generated in the command line, however nowadays with teachablemachine.withgoogle.com/, a new model can be generated and used to replace any model in that folder. 

#Running the model
1. Make sure Node is initalised and the dependencies are downloaded: cors, cors-util-is, express
2. Run: npm start
3. In the browser, go to: localhost:81/predict-with-tfjs.html
  


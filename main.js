https://teachablemachine.withgoogle.com/models/MZKT0drn6/

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('Goat.jpg') 
    img1 = document.getElementById('Snake.jpg')
    img2 = document.getElementById('Tiger.jpg')
    img3 = document.getElementById('Tree.jpg')

    if (results[0].label == "Goat") {
      img.src = 'Goat.gif';
      img1.src = 'Snake.jpg';
      img2.src = 'Tiger.jpg';
      img3.src = 'Tree.jpg';
    } else if (results[0].label == "Bell") {
      img.src = 'Goat.jpg';
      img1.src = 'Snake.gif';
      img2.src = 'Tiger.jpg';
      img3.src = 'Tree.jpg';
    } else if (results[0].label == "Snapping") {
      img.src = 'Goat.jpg';
      img1.src = 'Snake.jpg';
      img2.src = 'Tiger.gif';
      img3.src = 'Tree.jpg';
    }else{
      img.src = 'Goat.jpg';
      img1.src = 'Snake.jpg';
      img2.src = 'Tiger.jpg';
      img3.src = 'Tree.gif';
    }
  }
}
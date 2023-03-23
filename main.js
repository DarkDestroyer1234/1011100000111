// con esto podemos ver la vista en vivo de la camara
Webcam.attach( '#camera' );


camera = document.getElementById("camera");
    //nos permite modificar las propiedades de la vista en vivo de la camara  
 Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:91
  });


function take_snapshot()
{
    // es una funcion predefinida y nos permite tomar foto
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


 
  // Inicializar el método de clasificación de imágenes con MobileNet
//clasificador = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8aKpS4kd3/model.json',modelLoaded);
// este enlace es el de nuestro modelo
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gr67XXeD9/model.json',modelLoaded);


  // Cuando el modelo está cargado.
  function modelLoaded() {
    console.log('¡Modelo cargado!');
  }
  function check()
  {
    img = document.getElementById("selfie_image");
    classifier.classify(img, gotResult);
  }




// Función que se ejecuta cuando obtenemos algún error en los resultados
function gotResult(error, results) {
  // Muestra el error en la consola
  if (error) {
    console.error(error);
  } else {
    // Los resultados están en un array ordenado por presición.
        document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}






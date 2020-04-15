// alert("Hello World!");\

#include json2.js

// Load from JSON

function loadJSON(relPath){
    var script = new File($.fileName);
    var jsonFile = new File(script.path + '/' + relPath);
    
    jsonFile.open('r');
    var str = jsonFile.read(); 
    jsonFile.close();

    return JSON.parse(str);

}


// Save as JPEG

function saveJPEG(name) {
  var doc = app.activeDocument;

  var file = new File(doc.path + "/" + name + ".jpeg");

  var opts = new JPEGSaveOptions();
  opts.quality = 10;

  doc.saveAs(file, opts, true);
}

function processName(name){

    // Change text
    var doc = app.activeDocument;

    var textGroup = doc.layerSets.getByName("p-text");
    var textLayer = textGroup.layers.getByName("p-name");
    textLayer.textItem.contents = name.title;

    saveJPEG(name.title);
};

(function main(){
    var names =  loadJSON('names.json');

    for(var i =0; i < names.length; i++){
        var name = names[i];
        processName(name);
    }
})();
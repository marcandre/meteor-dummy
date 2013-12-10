var dummyCompiler = function (compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";
  var compiled =  "console.log('compiled!');" + source;
  
  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: compiled
  });
};

Plugin.registerSourceHandler("dummy", dummyCompiler);

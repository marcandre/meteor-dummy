var both = ['client', 'server'];

Package.describe({
  summary: "Dummy meteor compiler"
});

Package._transitional_registerBuildPlugin({
  name: "compileDummy",
  sources: [
    'plugin/compile-dummy.js'
  ]
});

Package.on_test(function (api) {
  api.use(['dummy', 'tinytest']);
  api.add_files([
    'tests/dummy_tests.dummy',
    'dummy_tests.js'
  ], ['client', 'server']);
});

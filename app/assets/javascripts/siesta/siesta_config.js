Siesta.Harness.Browser.ExtJS.configure({
  title: 'ExtJS Application',
  loaderPath: { 'ExtJS' : 'assets/extjs4/app' },

  preload : [
    "assets/extjs4/resources/css/ext-all.css",
    "assets/extjs4/ext-all-debug.js"
  ],
  autoCheckGlobals: true,
  expectedGlobals: ['Ext']
});

var orig = $context.text
if (orig == undefined) {
  orig = "test"
}
//$ui.render("main")
var trans = require('scripts/translate')
trans.translateView(orig)

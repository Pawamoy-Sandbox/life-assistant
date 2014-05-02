
/*
 * GET install page.
 */

exports.install = function(req, res){
  res.render('install', { title: 'Installing LifeAssistant' })
};

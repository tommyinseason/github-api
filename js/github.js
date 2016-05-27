var apiKey = require('./../.env').apiKey;

exports.Github = function(){

};

exports.Github.prototype.getGithub = function(name, showRepo){
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response) {
    showRepo(response);
  }).fail(function(error){
    $('#showRepos').text(error.responseJSON.message);
  });
};

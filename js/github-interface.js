var apiKey = require('./../.env').apiKey;
var Github = require('./../js/github.js').Github;

var showRepo = function(listRepo) {
  listRepo.forEach(function(repo) {
    if (repo.description) {
      $("#showRepos").append("<li>" + repo.name + "</li><li>Description: " + repo.description + "</li><hr>");
    } else {
      $("#showRepos").append("<li>" + repo.name + "</li><hr>");
    };
  });
};


$(document).ready(function() {
  var currentGithubObject = new Github();
  $('#userSearch').click(function() {
    var name = $('#username').val();
    $('username').val("");
    currentGithubObject.getGithub(name, showRepo);
  });
});

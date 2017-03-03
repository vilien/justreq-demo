// 获取用户列表
function getUsersList() {
  $.get('http://127.0.0.1:8000/getUsersList.do', function(data){
    var list = data.list || [];
    $('#users-list').empty();
    for (var i = 0; i < list.length; i++) {
      $('#users-list').append('<li><a href="#" data-id="' + list[i].id + '">' + list[i].name + '</a></li>');
    }
  });
}

// 获取用户信息
function getUserInfo(e) {
  var userId = $(e.target).attr('data-id');
  $.get('http://127.0.0.1:8000/getUsersInfo.do?userId=' + userId, function(user){
    $('#userId').text(user.userId);
    $('#name').text(user.name);
    $('#age').text(user.age);
    $('#sex').text(user.sex);
    $('#weight').text(user.weight);
    $('#height').text(user.height);
    $('#bio').text(user.bio);
  });
  return false;
}

$(function(){
  getUsersList(); // 获取用户列表
  $('#users-list').on('click', 'li>a', getUserInfo); // 绑定链接点击事件处理函数
});
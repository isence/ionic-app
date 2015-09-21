angular.module('myApp.services', [])

.factory('chat', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    titles: '广工校园通',
    face: '../www/img/8.png',
    lastContent:'9月15日截至报名',
    date:'9月7日'
  },
    {
    id: 1,
    titles: '谷歌研发',
    face: '../www/img/4.jpg',
    lastContent:'9月15日截至报名',
    date:'9月5日'
  },
    {
    id: 2,
    titles: '创学团队',
    face: '../www/img/5.jpg',
    lastContent:'技术大牛',
    date:'9月3日'
  },
    {
    id: 3,
    titles: 'PHP团队',
    face: '../www/img/6.jpg',
    lastContent:'运营大咖等你来！',
    date:'9月2日'
  },
    {
    id: 4,
    titles: '创学团队',
    face: '../www/img/7.jpg', detail:'广工校园通与飘书APP秋季联合招聘，技术大牛，运营大咖等你来！9月15日截至报名',
    date:'9月1日'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      clubs.splice(chats.indexOf(club), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('team', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var teams = [{
    id: 0,
    titles: '项目比赛',
    date:'9月7日'
  },
    {
    id: 1,
    titles: '学习交流',
    date:'9月8日'
  },
    {
    id: 2,
    titles: '面试宣讲',
    date:'9月9日'
  },
    {
    id: 3,
    titles: '娱乐生活',
    date:'9月10日'
  }
    ];

  return {

    get: function(teamId) {
      for (var i = 0; i < teams.length; i++) {
        if (teams[i].id === parseInt(teamId)) {
          return teams[i];
        }
      }
      return null;
    }
  };
})

    .factory('Self', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var selfs = [{
        id: 0,
        titles: '个人信息',
        image:'../www/img/8.png',
        content:'Night Snack'
      },{
        id: 1,
        titles: '分享软件',
        image:'../www/img/8.png',
        content:'Educational Administration System'
      },{
        id: 2,
        titles: '检测更新',
        image:'../www/img/8.png',
        content:'Library'
      },{
        id: 3,
        titles: '建议反馈',
        image:'../www/img/8.png',
        content:'Lost & Found'
      },{
        id: 4,
        titles: '退出账号',
        image:'../www/img/8.png',
        content:'Part Time & Careers'
      }
      ];

      return {

        all: function() {
     return selfs;
        },
        get: function(selfId) {
          for (var i = 0; i < selfs.length; i++) {
            if (selfs[i].id === parseInt(selfId)) {
              return selfs[i];
            }
          }
          return null;
        }
      }
    })


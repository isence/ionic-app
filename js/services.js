angular.module('myApp.services', [])

.factory('chat', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    titles: '广工校园通',
    face: 'img/8.png',
    lastContent:'9月15日截至报名',
    date:'9月7日'
  },
    {
    id: 1,
    titles: '谷歌研发',
    face: 'img/4.png',
    lastContent:'9月15日截至报名',
    date:'9月5日'
  },
    {
    id: 2,
    titles: '创学团队',
    face: 'img/5.png',
    lastContent:'技术大牛',
    date:'9月3日'
  },
    {
    id: 3,
    titles: 'PHP团队',
    face: 'img/6.png',
    lastContent:'运营大咖等你来！',
    date:'9月2日'
  },
    {
    id: 4,
    titles: '创学团队',
    face: 'img/7.png', detail:'广工校园通与飘书APP秋季联合招聘，技术大牛，运营大咖等你来！9月15日截至报名',
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
    date:[{id:0,project:'C语言竞赛',people:5,detail:"组队开发一个软件"},{id:1,project:'ios软件',people:6,detail:"学习和使用swift"},{id:2,project:'PHP实战',people:7,detail:"开发一个小型校园论坛"}]
  },
    {
    id: 1,
    titles: '学习交流',
    date:[{id:0,project:'四六级',people:30,detail:"涨分秘籍"},{id:1,project:'考研资源',people:30,detail:"考研资源共享"},{id:2,project:'吉他社',people:25,detail:"吉他教学"}]

    },
    {
    id: 2,
    titles: '面试宣讲',
    date:[{id:0,project:'BAT',people:5,detail:"bat面经"},{id:1,project:'实时宣讲会',people:50,detail:"最新最全的宣讲会"},{id:2,project:'明天移动面试',people:10,detail:"一起奋斗！"}]

    },
    {
    id: 3,
    titles: '娱乐生活',
    date:[{id:0,project:'网球',people:5,detail:"周末约战"},{id:1,project:'联谊',people:6,detail:"联络联络吧"},{id:2,project:'出城',people:7,detail:"一起玩吧"}]

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


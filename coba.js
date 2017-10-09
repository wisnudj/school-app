var a = [{"id":1,"subject_name":"Fisika","createdAt":"2017-10-08T18:54:04.185Z","updatedAt":"2017-10-08T18:54:04.185Z","Teachers":[{"id":3,"first_name":"Butet","last_name":"Nairbohu","email":"butet@sekolah.id","createdAt":"2017-10-08T19:36:25.430Z","updatedAt":"2017-10-08T19:40:10.025Z","SubjectId":1},{"id":1,"first_name":"bambang","last_name":"Suprapto","email":"bambangsu@sekolah.id","createdAt":"2017-10-08T18:26:58.729Z","updatedAt":"2017-10-08T19:28:53.773Z","SubjectId":1}]},{"id":2,"subject_name":"Ekonomi","createdAt":"2017-10-08T18:55:21.415Z","updatedAt":"2017-10-08T18:55:21.415Z","Teachers":[{"id":2,"first_name":"Rukmana","last_name":"Fatmawati","email":"rukmanafatmawati@sekolah.id","createdAt":"2017-10-08T19:35:47.317Z","updatedAt":"2017-10-08T19:40:16.680Z","SubjectId":2},{"id":4,"first_name":"Yulius","last_name":"Prawiranegara","email":"yuliusp@sekolah.id","createdAt":"2017-10-08T19:37:06.751Z","updatedAt":"2017-10-08T19:37:13.881Z","SubjectId":2}]},{"id":3,"subject_name":"Matematika","createdAt":"2017-10-08T22:11:53.984Z","updatedAt":"2017-10-08T22:11:53.984Z","Teachers":[]}]

a.forEach((element) => {
  console.log(element.id);
  console.log(element.subject_name);
  for(var i = 0; i < element.Teachers.length; i++) {
    console.log(element.Teachers[i].first_name);
  }
})


[{"SubjectId":2,"StudentId":3,"score":null,"createdAt":"2017-10-09T00:34:43.128Z","updatedAt":"2017-10-09T00:34:43.128Z"}]


var a = [{"id":1,"username":"johndoe","password":"foobar","role":"teacher","createdAt":"2017-10-09T08:12:04.038Z","updatedAt":"2017-10-09T08:12:04.038Z"},{"id":2,"username":"pakdengklek","password":"gogetgold","role":"academic","createdAt":"2017-10-09T08:12:04.038Z","updatedAt":"2017-10-09T08:12:04.038Z"},{"id":3,"username":"charlesxavier","password":"magnetowhy","role":"headmaster","createdAt":"2017-10-09T08:12:04.038Z","updatedAt":"2017-10-09T08:12:04.038Z"}]

{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"username":"johndoe","role":"teacher"}

const name=["包斯敏","蔡孜烨","曹子涵","陈欣怡","陈娅芩","程心壕","戴瑞新","杜新宇","范诗雨","方熠惠","冯勇棋","何诗雯","贺子著","洪承翛","黄梓诚","黄梓昇","李柏毅","李鑫宇","李育泽","刘家怡","刘瑞丰","罗康豫","马世豪","邱蕴霓","童可芯","汪嘉俊","汪子坤","王瑽","王海珊","王梓津","吴博文","吴添愉","肖宇希","谢宏宇","谢佳颖","徐搏铠","徐子谦","杨宸萌","杨鸿钊","杨自成","易淳林","易煜轩","尹元","喻文杰","詹瑞豪","张灿","张文佳","张芸曦","张昕言","周佳怡","周金","朱静秋","朱伦钰","邹文睿","夏明俊","吴紫凡"];
const star=[3,3,3,5,4,4,3,5,4,4,5,3,5,5,3,3,3,3,3,3,3,5,3,3,3,3,3,4,3,3,3,5,3,3,3,3,3,3,3,3,5,4,3,5,3,3,3,4,3,5,3,4,5,3,3,3];
const version=2;
//配置文件编辑器：
// https://kdxhub.github.io/random_name_picker/comfig-spawn.html
// 根目录下config-spawn.html
function DisableStart(Reazon){document.getElementById('main-loadedList').innerHTML=Reazon;document.getElementById('start').disabled=true;document.getElementById('startButtonTips').innerHTML="引擎故障…";document.getElementById('startGuidancePrompt').innerHTML="请联系管理员/电教委以获取支持"};console.log("name长度="+name.length);console.log("star长度="+star.length);document.getElementById('main-loadedList').innerHTML="共计"+name.length+"名幸运儿，抽取概率均等";if(star.length!=name.length){DisableStart("E04.部署错误。数组「name」与「star」长度不等。")};if(star.length<=10){DisableStart("E05.部署错误。待选项太少（"+star.length+"项）<br>至少需要11项。")};configLoaded();
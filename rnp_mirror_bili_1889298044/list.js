const name=["尹华东","曲模小锋","敖成炀","罗欣悦","左冬梅","王佳伟","李欣雨","任禹时","张杉","何明泉","陈杰文","李嘉敏","孙玥","袁琪","谢青灵","王波","晋家鑫","杜天豪","赵美","李念","庹忠芹","胡馨月","侯丹","李阳","彭雨","刘鑫","谭黎","张琴","钟洪玉","阿力子曲","吉史阿牛","吉车尔各","邓琪圆","梁学敏","四郎曲西","向洪瑶","张雲静","杨燕","黄萍","杜凌瑞"];
const star=[4,3,3,3,3,3,3,3,3,4,3,3,4,3,5,3,3,3,4,3,3,3,3,3,5,3,3,3,4,3,5,3,3,3,3,4,3,3,3,3];
const maxHistory = 10;
const version = 3;
//配置文件编辑器：
// https://kdxhub.github.io/random_name_picker/comfig-spawn.html
// 根目录下config-spawn.html
function DisableStart(Reazon){document.getElementById('main-loadedList').innerHTML=Reazon;document.getElementById('start').disabled=true;document.getElementById('startButtonTips').innerHTML="引擎故障…";document.getElementById('startGuidancePrompt').innerHTML="请联系管理员/电教委以获取支持"};console.log("name长度="+name.length);console.log("star长度="+star.length);document.getElementById('main-loadedList').innerHTML="共计"+name.length+"名幸运儿，抽取概率均等";if(star.length!=name.length){DisableStart("E04.部署错误。数组「name」与「star」长度不等。")};if(star.length<=10){DisableStart("E05.部署错误。待选项太少（"+star.length+"项）<br>至少需要11项。")};configLoaded();
//超级终端中文输出
phantom.outputEncoding = 'gbk';

//当前日期格式化
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//数字格式化
function Numformat(i) { 
	return ('00'+i).slice(-2); 
}

var Formatdate = new Date().Format("yyyyMMdd");
var casper = require('casper').create({
	viewportSize: {  
          width: 1024,  
          height: 768  
    },  	 
	pageSettings: {
		loadImages: false,
		loadPlugins: false,
	},
	logLevel: 'debug'
});

/*
var fs = require('fs');
var content = fs.read("D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供门源县)新华每日舆情" + Formatdate + ".txt");
*/

var n = 1;

//邮箱地址更新
//中心
var zhongxin = ['1539497870@qq.com;394815241@qq.com;86237839@qq.com;51834948@qq.com; 316966024@qq.com;51834948@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"[专供]新华每日舆情" + Formatdate + ".doc", '[专供]新华每日舆情'];
//省直
var qinghai = ['wanlinpub@hotmail.com;283849490@qq.com;chenkai@xinhua.org', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供)新华每日舆情" + Formatdate + ".doc", '(专供)新华每日舆情'];
var jiaotong = ['95194014@qq.com;760509109@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供青海省交通运输厅)新华每日舆情" + Formatdate + ".doc", '(专供青海省交通运输厅)新华每日舆情'];
var minzong = ['40019559@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供青海省民族宗教事务委员会)新华每日舆情" + Formatdate + ".doc", '(专供青海省民族宗教事务委员会)新华每日舆情'];
var qingke = ['yinhuili@263.net;gsm@188.com;wpz8714@163.com;w333@vip.163.com;15297288600@163.com;hzwj200411@126.com;qhxnwh@126.com;yhq9812@163.com;qkjmtb@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供青海互助青稞酒业股份有限公司)新华每日舆情" + Formatdate + ".doc", '(专供青海互助青稞酒业股份有限公司)新华每日舆情'];
var xikuang = ['185150641@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供西部矿业)新华每日舆情" + Formatdate + ".doc", '(专供西部矿业)新华每日舆情'];
var nongxin = ['1607922014@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供青海省农村信用社联合社)新华每日舆情" + Formatdate + ".doc", '(专供青海省农村信用社联合社)新华每日舆情'];
var yihai = ['421981511@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供青海天峻义海能源煤炭经营有限公司)新华每日舆情" + Formatdate + ".doc", '(专供青海天峻义海能源煤炭经营有限公司)新华每日舆情'];
var guowang = ['liys777@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供国家电网青海省电力公司)新华每日舆情" + Formatdate + ".doc", '(专供国家电网青海省电力公司)新华每日舆情'];
//西宁
var chengxi = ['703887188@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供西宁市城西区)新华每日舆情" + Formatdate + ".doc", '(专供西宁市城西区)新华每日舆情'];
//海东
var huzhu = ['hzxwxcb2159@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供互助县)新华每日舆情" + Formatdate + ".doc", '(专供互助县)新华每日舆情'];
var pingan = ['paxwxcb@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供平安区)新华每日舆情" + Formatdate + ".doc", '(专供平安区)新华每日舆情'];
var ledu = ['ldlsx0328@163.com;18997022218@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供乐都区)新华每日舆情" + Formatdate + ".doc", '(专供乐都区)新华每日舆情'];
var hualong = ['1650825006@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供化隆县)新华每日舆情" + Formatdate + ".doc", '(专供化隆县)新华每日舆情'];
var xunhua = ['493005777@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供循化县)新华每日舆情" + Formatdate + ".doc", '(专供循化县)新华每日舆情'];
var minhe = ['mhxcb2092@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供民和县)新华每日舆情" + Formatdate + ".doc", '(专供民和县)新华每日舆情'];
//海西
var haixi = ['qhhxzmyp-7209@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供海西蒙古族藏族自治州)新华每日舆情" + Formatdate + ".doc", '(专供海西蒙古族藏族自治州)新华每日舆情'];
var delingha = ['kuangxiangqu_nan@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供德令哈市)新华每日舆情" + Formatdate + ".doc", '(专供德令哈市)新华每日舆情'];
var geermu = ['460224974@qq.com;2594161888@qq.com;1317104232@qq.com;393182964@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市)新华每日舆情'];
var dulan = ['jiyuan343@126.com;yongan7719@126.com;hongmei630@126.com;shun345@126.com;ning069@126.com;77246329@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供都兰县)新华每日舆情" + Formatdate + ".doc", '(专供都兰县)新华每日舆情'];
var wulan = ['wlxhyq@126.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供乌兰县)新华每日舆情" + Formatdate + ".doc", '(专供乌兰县)新华每日舆情'];
var tianjun = ['523671797@qq.com;zhangshaojun1963@163.com;275044283@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供天峻县)新华每日舆情" + Formatdate + ".doc", '(专供天峻县)新华每日舆情'];
var gewei = ['gemrmyy@126.com;673914178@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市卫生局)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市卫生局)新华每日舆情'];
var gejiao = ['739459929@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市教育局)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市教育局)新华每日舆情'];
var gejian = ['qhgemjsj@126.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市住房和城乡建设局)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市住房和城乡建设局)新华每日舆情'];
var geguang = ['gemwtgdj@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市文化体育广播电视局)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市文化体育广播电视局)新华每日舆情'];
var gexicheng = ['18897093375@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市西城区工行委)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市西城区工行委)新华每日舆情'];
var gedongcheng = ['294987892@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市东城区工行委)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市东城区工行委)新华每日舆情'];
var gechaerhan = ['574972905@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市察尔汗工行委)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市察尔汗工行委)新华每日舆情'];
var gekaifa = ['64746099@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供格尔木市昆仑经济技术开发区)新华每日舆情" + Formatdate + ".doc", '(专供格尔木市昆仑经济技术开发区)新华每日舆情'];
//海南
var hainan = ['hnzwyqbgs@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供海南藏族自治州)新华每日舆情" + Formatdate + ".doc", '(专供海南藏族自治州)新华每日舆情'];
var xinghai = ['305441264@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供兴海县)新华每日舆情" + Formatdate + ".doc", '(专供兴海县)新华每日舆情'];
var guinan = ['gnnews@126.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供贵南县)新华每日舆情" + Formatdate + ".doc", '(专供贵南县)新华每日舆情'];
var tongde = ['hntdxcb@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供同德县)新华每日舆情" + Formatdate + ".doc", '(专供同德县)新华每日舆情'];
var gonghe = ['ghxxcb@126.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供共和县)新华每日舆情" + Formatdate + ".doc", '(专供共和县)新华每日舆情'];
var guide = ['gdxwxcb@126.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供贵德县)新华每日舆情" + Formatdate + ".doc", '(专供贵德县)新华每日舆情'];
//海北
var haiyan = ['133691216@qq.com;502361552@qq.com;454216592@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供海晏县)新华每日舆情" + Formatdate + ".doc", '(专供海晏县)新华每日舆情'];
var menyuan = ['779716631@qq.com;1214947953@qq.com;1623436277@qq.com;2087973987@qq.com;2929535210@qq.com;2770257680@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供门源县)新华每日舆情" + Formatdate + ".doc", '(专供门源县)新华每日舆情'];
var qilian = ['hxh0444@163.com;lys0891@126.com;lhc303@163.com;2635756156@qq.com;497605231@qq.com;624898090@qq.com;908539583@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供祁连县)新华每日舆情" + Formatdate + ".doc", '(专供祁连县)新华每日舆情'];
var haibei = ['441450860@qq.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供海北州)新华每日舆情" + Formatdate + ".doc", '(专供海北州)新华每日舆情'];
//黄南
var huangnan = ['hnzwxcb@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供黄南藏族自治州)新华每日舆情" + Formatdate + ".doc", '(专供黄南藏族自治州)新华每日舆情'];
var henan = ['hnxcb_2008@163.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供河南县)新华每日舆情" + Formatdate + ".doc", '(专供河南县)新华每日舆情'];
//果洛
var guoluo = ['qhglzgxx@126.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供果洛藏族自治州)新华每日舆情" + Formatdate + ".doc", '(专供果洛藏族自治州)新华每日舆情'];
var dari = ['wuweiqinghai@126.com', "D:/" + Formatdate + "/" + "Thinking" + "/" +"(专供达日县)新华每日舆情" + Formatdate + ".doc", '(专供达日县)新华每日舆情'];
//玉树

//登陆
casper.start('http://email.163.com/');
casper.then(function() {
    this.evaluate(function(email, password) {
		document.querySelector('b[class="ico ico-logo ico-logo-126"]').click();
        document.querySelector('#userNameIpt').value = email;
        document.querySelector('#pwdInput').value = password;
		document.querySelector('button[class="btn btn-login"]').click();
    }, 'xingchenemail', 'qhfsyq2016');
	this.echo('*************************  已登陆新华智酷邮件分发系统  *************************' + '\n');
});

casper.then(function() {
	this.waitForSelector('#_mail_component_57_57');
});

//[专供中心]新华每日舆情
casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', zhongxin[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', zhongxin[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + zhongxin[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至[专供中心]……');
	n = n + 1;
});

//(专供)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', qinghai[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', qinghai[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + qinghai[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供)……');
	n = n + 1;
});

//(专供青海省交通运输厅)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', jiaotong[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', jiaotong[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + jiaotong[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供青海省交通运输厅)……');
	n = n + 1;
});

//(专供青海省民族宗教事务委员会)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', minzong[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', minzong[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + minzong[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供青海省民族宗教事务委员会)……');
	n = n + 1;
});

//(专供青海互助青稞酒业股份有限公司)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', qingke[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', qingke[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + qingke[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供青海互助青稞酒业股份有限公司)……');
	n = n + 1;
});

//(专供西部矿业)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', xikuang[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', xikuang[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + xikuang[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供西部矿业)……');
	n = n + 1;
});

//(专供青海省农村信用社联合社)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', nongxin[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', nongxin[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + nongxin[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供青海省农村信用社联合社)……');
	n = n + 1;
});

//(专供青海天峻义海能源煤炭经营有限公司)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', yihai[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', yihai[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + yihai[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供青海天峻义海能源煤炭经营有限公司)……');
	n = n + 1;
});

//(专供国家电网青海省电力公司)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', guowang[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', guowang[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + guowang[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供国家电网青海省电力公司)……');
	n = n + 1;
});

//(专供西宁市城西区)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', chengxi[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', chengxi[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + chengxi[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供西宁市城西区)……');
	n = n + 1;
});

//(专供互助县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', huzhu[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', huzhu[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + huzhu[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供互助县)……');
	n = n + 1;
});

//(专供平安区)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', pingan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', pingan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + pingan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供平安区)……');
	n = n + 1;
});

//(专供乐都区)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', ledu[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', ledu[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + ledu[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供乐都区)……');
	n = n + 1;
});

//(专供化隆县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', hualong[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', hualong[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + hualong[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供化隆县)……');
	n = n + 1;
});

//(专供循化县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', xunhua[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', xunhua[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + xunhua[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供循化县)……');
	n = n + 1;
});

//(专供民和县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', minhe[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', minhe[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + minhe[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供民和县)……');
	n = n + 1;
});

//(专供海西蒙古族藏族自治州)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', haixi[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', haixi[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + haixi[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供海西蒙古族藏族自治州)……');
	n = n + 1;
});

//(专供德令哈市)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', delingha[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', delingha[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + delingha[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供德令哈市)……');
	n = n + 1;
});

//(专供格尔木市)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', geermu[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', geermu[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + geermu[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市)……');
	n = n + 1;
});

//(专供都兰县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', dulan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', dulan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + dulan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供都兰县)……');
	n = n + 1;
});

//(专供乌兰县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', wulan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', wulan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + wulan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供乌兰县)……');
	n = n + 1;
});

//(专供天峻县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', tianjun[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', tianjun[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + tianjun[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供天峻县)……');
	n = n + 1;
});

//(专供格尔木市卫生局)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', gewei[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', gewei[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + gewei[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市卫生局)……');
	n = n + 1;
});

//(专供格尔木市教育局)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', gejiao[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', gejiao[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + gejiao[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市教育局)……');
	n = n + 1;
});

//(专供格尔木市住房和城乡建设局)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', gejian[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', gejian[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + gejian[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市住房和城乡建设局)……');
	n = n + 1;
});

//(专供格尔木市文化体育广播电视局)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', geguang[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', geguang[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + geguang[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市文化体育广播电视局)……');
	n = n + 1;
});

//(专供格尔木市西城区工行委)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', gexicheng[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', gexicheng[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + gexicheng[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市西城区工行委)……');
	n = n + 1;
});

//(专供格尔木市东城区工行委)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', gedongcheng[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', gedongcheng[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + gedongcheng[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市东城区工行委)……');
	n = n + 1;
});

//(专供格尔木市察尔汗工行委)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', gechaerhan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', gechaerhan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + gechaerhan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市察尔汗工行委)……');
	n = n + 1;
});

//(专供格尔木市昆仑经济技术开发区)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', gekaifa[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', gekaifa[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + gekaifa[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供格尔木市昆仑经济技术开发区)……');
	n = n + 1;
});

//(专供海南藏族自治州)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', hainan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', hainan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + hainan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供海南藏族自治州)……');
	n = n + 1;
});

//(专供兴海县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', xinghai[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', xinghai[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + xinghai[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供兴海县)……');
	n = n + 1;
});

//(专供贵南县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', guinan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', guinan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + guinan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供贵南县)……');
	n = n + 1;
});

//(专供同德县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', tongde[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', tongde[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + tongde[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供同德县)……');
	n = n + 1;
});

//(专供海北州)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', haibei[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', haibei[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + haibei[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供海北州)……');
	n = n + 1;
});

//(专供共和县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', gonghe[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', gonghe[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + gonghe[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供共和县)……');
	n = n + 1;
});

//(专供贵德县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', guide[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', guide[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + guide[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供贵德县)……');
	n = n + 1;
});

//(专供海晏县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', haiyan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', haiyan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + haiyan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供海晏县)……');
	n = n + 1;
});

//(专供门源县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', menyuan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', menyuan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

/*
casper.thenClick(".APP-editor-iframe", function() {
	this.sendKeys('.nui-scroll', content);
	this.wait(12000);
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});
*/

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + menyuan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供门源县)……');
	n = n + 1;
});

//(专供祁连县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', qilian[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', qilian[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + qilian[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供祁连县)……');
	n = n + 1;
});

//(专供黄南藏族自治州)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', huangnan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', huangnan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + huangnan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供黄南藏族自治州)……');
	n = n + 1;
});

//(专供河南县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', henan[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', henan[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + henan[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供河南县)……');
	n = n + 1;
});

//(专供果洛藏族自治州)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', guoluo[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', guoluo[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + guoluo[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供果洛藏族自治州)……');
	n = n + 1;
});

//(专供达日县)新华每日舆情
casper.thenOpen('http://mail.126.com/', function() {
	this.waitForSelector('#_mail_component_57_57');
});

casper.then(function() {
	this.clickLabel('写 信', 'span');
	this.waitForSelector('.nui-btn-text');
});

casper.wait(800, function() {
	this.sendKeys('.nui-editableAddr-ipt', dari[0]);
});

casper.then(function() {
	this.page.uploadFile('.O0', dari[1]);
	this.wait(12000);
	this.clickLabel('群发单显', 'a');
	this.click('.nui-mainBtn-hasIcon .nui-btn-text');
});

casper.wait(100, function() {
	this.capture('D:/Xinhuayq/' + '-' + Numformat(n) + '- ' + dari[2] + '.png');
	this.echo('-' + Numformat(n) + '- ' + '已发送至(专供达日县)……');
	n = n + 1;
});

casper.run(function() {
	this.echo('*************************  邮 件 已 全 部 发 送 完 毕  *************************').exit();
});

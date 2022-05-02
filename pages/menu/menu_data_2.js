
var jsonData =
{
  "title_f": '个人信用信息评价标准',
  "content1": 
    {
      "title_c1": '商务领域失信信息',
      "content": `
<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="8">商务领域失信信息</td>
	    <td rowspan="2">合同履约</td>
	    <td>在借贷、赊购、担保、租赁、保险等活动中未按照合同履行义务的</td>
      	<td>-20</td>
      	<td></td>
	</tr>
	<tr>
      	<td>因未履行合约， 被另一方提起诉讼并被判决违约的</td>
	    <td>-50</td>
	    <td></td>
	</tr>
  	<tr >
	    <td rowspan="2">银行信贷</td>
	    <td>有拖欠还贷记录的</td>
      	<td rowspan="2">-10</td>
      	<td rowspan="2">每月为一周期</td>
	</tr>
	<tr>
      	<td>信用卡有透支逾期未还记录的</td>
	</tr>
  	<tr>
	    <td>民间借贷</td>
	    <td>因非法集资、违法放贷被有关部门查处的</td>
      	<td>-40</td>
	    <td></td>
	</tr>
  	<tr>
	    <td>社会担保</td>
	    <td>有违约记录的</td>
      	<td>-20</td>
	    <td></td>
	</tr>  
  	<tr>
	    <td>债权债务</td>
	    <td>因未按时偿还债务， 被另一方提起诉讼并被判决承担责任的</td>
      	<td>-30</td>
	    <td></td>
	</tr>  
  	<tr>
	    <td>传销欺诈</td>
	    <td>有参与传销、商业欺诈记录的</td>
      	<td>-30</td>
	    <td></td>
	</tr>
  	<tr>
	    <td>制假售假</td>
	    <td>有制假售假记录的</td>
      	<td>-30</td>
	    <td></td>
	</tr>  
  	<tr>
	    <td>其他</td>
	    <td>其他在商务服务领域的失信行为， 视情节减分</td>
      	<td>-5至-50</td>
	    <td></td>
	</tr>  
</table>
`,
  },
  title_c2 :'社会管理领域失信信息',
  content2 : 
  [
      {
        "title_c2_c": '1、公共服务',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="10">社会管理领域失信信息</td>
	    <td rowspan="5">公共服务</td>
	    <td>拖欠公共服务费用的</td>
      	<td>-20</td>
	</tr>
	<tr>
      	<td>经法院或者仲裁机构认定拖欠公共服务费用的</td>
	    <td>-50</td>
	</tr>
  	<tr >
      	<td>私自安装水嘴、私放供热用水、私接管道泵、
私开暖气等供暖违规行为的</td>
	    <td>-50</td>
	</tr>
	<tr>
      	<td>盗用自来水、燃气、电力、供热等公共服务资源的</td>
	    <td>-60</td>
	</tr>
  	<tr>
	    <td>破坏水利、燃气、供暖、电力、通讯等公共
设施，造成不良影响的</td>
	    <td>-100</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '2、社会诚信',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="10">社会管理领域失信信息</td>
	    <td rowspan="6">社会诚信</td>
	    <td>在监督检查、调查取证时，不接受调查，拒绝提供有关材料、提供虚假材料、隐瞒真实情况，以及转移、隐匿相关证据的</td>
      	<td>-20</td>
	</tr>
	<tr>
      	<td>提供虚假证明材料、作假证、故意隐瞒真实情况等的</td>
	    <td>-30</td>
	</tr>
  	<tr >
      	<td>拒不履行作证义务的</td>
	    <td>-40</td>
	</tr>
	<tr>
      	<td>参加各级组织的统一考试作弊的</td>
	    <td>-20</td>
	</tr>
  	<tr>
	    <td>在学术研究、 职称评定等工作中弄虚作假的</td>
	    <td>-50</td>
	</tr>
  	<tr>
	    <td>违反行业标准、行规、行约等，受到警告惩戒措施的</td>
	    <td>-20</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '3、涉税事项',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="10">社会管理领域失信信息</td>
	    <td rowspan="7">涉税事项</td>
	    <td>有欠税记录的</td>
      	<td>-20</td>
	</tr>
	<tr>
      	<td>有欠税记录的</td>
	    <td>-30</td>
	</tr>
  	<tr >
      	<td>有抗税记录的</td>
	    <td>-50</td>
	</tr>
	<tr>
      	<td>有较重的偷税漏税行为的</td>
	    <td>-100</td>
	</tr>
  	<tr>
	    <td>未办理注销税务登记手续被转为非正常户的</td>
	    <td>-100</td>
	</tr>
  	<tr>
	    <td>未办理发票缴销手续被转为非正常户的</td>
	    <td>-100</td>
	</tr>
  	<tr>
	    <td>被税务机关采取税收强制执行或保全措施的</td>
	    <td>-100</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '4、行政许可',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="6">社会管理领域失信信息</td>
	    <td rowspan="6">行政许可</td>
	    <td>未通过依法进行的专项（定期）检验或抽查检查不合格、未通过的</td>
      	<td>-20</td>
	</tr>
	<tr>
      	<td>超越行政许可、 非行政许可审批及备案范围进行活动，涂改、倒卖、出租、出借、非法转让行政许可证件等的</td>
	    <td>-30</td>
	</tr>
  	<tr >
      	<td>未经行政许可、非行政许可审批及备案，擅自从事依法应当取得行政许可等活动的</td>
	    <td>-50</td>
	</tr>
	<tr>
      	<td>以欺骗、贿赂等不正当手段取得行政许可、非行政许可审批等的</td>
	    <td>-60</td>
	</tr>
  	<tr>
	    <td>不具备“告知承诺”条件，作出虚假承诺的</td>
	    <td>-40</td>
	</tr>
  	<tr>
	    <td>不具备“告知承诺”条件，被取消行政许可的</td>
	    <td>-100</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '5、社会保障',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >社会管理领域失信信息</td>
	    <td >社会保障</td>
	    <td>拖欠社会保险费的</td>
      	<td>-20</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '6、行政事业性收费',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >社会管理领域失信信息</td>
	    <td >行政事业性收费</td>
	    <td>年内不按规定缴纳的</td>
      	<td>-10</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '7、政府性基金',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >社会管理领域失信信息</td>
	    <td >政府性基金</td>
	    <td>年内不按规定缴纳的</td>
      	<td>-10</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '8、公安交通管理',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="7">社会管理领域失信信息</td>
	    <td rowspan="7">公安交通管理</td>
	    <td>处警告行政处罚的</td>
      	<td>-5</td>
	</tr>
	<tr>
      	<td>处 500 元及以下罚款行政处罚的</td>
	    <td>-10</td>
	</tr>
  	<tr >
      	<td>处 500 元以上 2000 元以下（不含本数）罚款行政处罚的</td>
	    <td>-20</td>
	</tr>
	<tr>
      	<td>处 2000 元以上 10000 元以下罚款的</td>
	    <td>-30</td>
	</tr>
  	<tr>
	    <td>处罚款 1 万元（不含本数）以上</td>
	    <td>-40</td>
	</tr>
  	<tr>
	    <td>处暂扣许可证、执照行政处罚的</td>
	    <td>-60</td>
	</tr>
   	<tr>
	    <td>道路交通安全违法行为，一次记 12 分的</td>
	    <td>-30</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '9、行政处罚',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="14">社会管理领域失信信息</td>
	    <td rowspan="14">行政处罚</td>
	    <td>处以警告行政处罚的</td>
      	<td>-5</td>
	</tr>
	<tr>
      	<td>处以低限罚款行政处罚的</td>
	    <td>-10</td>
	</tr>
  	<tr >
      	<td>处以较重罚款行政处罚的</td>
	    <td>-20</td>
	</tr>
	<tr>
      	<td>处以高限罚款行政处罚的</td>
	    <td>-40</td>
	</tr>
  	<tr>
	    <td>处以没收违法所得、没收非法财物 1000 元以下的</td>
	    <td>-20</td>
	</tr>
  	<tr>
	    <td>处以没收违法所得、没收非法财物 1001 元—5000 元的</td>
	    <td>-30</td>
	</tr>
   	<tr>
	    <td>处以没收违法所得、没收非法财物 5001 元—10000 元的</td>
	    <td>-40</td>
	</tr>
 	<tr>
      	<td>处以没收违法所得、没收非法财物 1 万元（不含）以上的</td>
	    <td>-60</td>
	</tr>
  	<tr >
      	<td>处暂扣许可证或执照行政处罚的</td>
	    <td>-100</td>
	</tr>
	<tr>
      	<td>受到其他行政处罚的</td>
	    <td>-20</td>
	</tr>
  	<tr>
	    <td>未履行发生效力的被处低限罚款行政处罚的</td>
	    <td>-40</td>
	</tr>
  	<tr>
	    <td>未履行发生效力的被处以较重罚款的行政处罚的</td>
	    <td>-80</td>
	</tr>
   	<tr>
	    <td>未履行发生效力的被处以高限罚款行政处罚的</td>
	    <td>-100</td>
	</tr>
    	<tr>
	    <td>未履行发生效力的其他行政处罚的</td>
	    <td>-40</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '10、行政执行',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="5">社会管理领域失信信息</td>
	    <td rowspan="5">行政执行</td>
	    <td>受到责令改正、责令停工、责令清除、限期清理、限期拆除、限期履行等的</td>
      	<td>-10</td>
	</tr>
	<tr>
      	<td>被实施限制公民人身自由、 查封场所设施或者财物、扣押财物、冻结存款汇款等行政强制措施的</td>
	    <td>-30</td>
	</tr>
  	<tr >
      	<td>被实施加处罚款或者滞纳金、划拨存款汇款、 拍卖或者依法处理查封扣押的场所设施或者财物、排除妨碍、恢复原状、代履行等行政强制执行方式的</td>
	    <td>-40</td>
	</tr>
	<tr>
      	<td>未履行行政强制措施、强制决定的</td>
	    <td>-80</td>
	</tr>
  	<tr>
	    <td>部分未履行发生效力的仲裁、裁决和行政复议决定的</td>
	    <td>-50</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '11、社会管理',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="12">社会管理领域失信信息</td>
	    <td rowspan="12">社会管理</td>
	    <td>骗取补贴、资金、项目，冒领补贴、冒用身份、冒签单据以及逃票等的</td>
      	<td>-50</td>
	</tr>
	<tr>
      	<td>在救灾、扶贫、助残等慈善公益活动中，存在虚假捐助的</td>
	    <td>-50</td>
	</tr>
  	<tr >
      	<td>在政府采购、招标投标、拍卖、农村产权交易等公共资源交易活动中， 有违法违规行为的</td>
	    <td>-50</td>
	</tr>
	<tr>
      	<td>违反行业信用承诺的</td>
	    <td>-10</td>
	</tr>
  	<tr>
	    <td>严重违反行业信用承诺的</td>
	    <td>-50</td>
	</tr>
 <tr>
      	<td>通过政务服务热线、区长信箱等虚假投诉、举报的</td>
	    <td>-50</td>
	</tr>
  	<tr >
      	<td>无理取闹、缠访缠诉、漫天要价或采取其他非法过激手段干扰阻挠拆迁、电力、水利、通讯、供暖等公共设施建设项目施工的</td>
	    <td>-100</td>
	</tr>
	<tr>
      	<td>扰乱机关团体、企事业单位及其他公共秩序，致使工作、生产、营业、医疗、教学、科研、交通等不能正常进行的</td>
	    <td>-50</td>
	</tr>
  	<tr>
	    <td>有霸座、抢方向盘等干扰公共交通秩序、危害公共交通安全行为的</td>
	    <td>-50</td>
	  </tr>
  <tr>
      	<td>不配合整治改造等的</td>
	    <td>-5</td>
	</tr>
  	<tr >
      	<td>违章占道经营、乱停乱放、乱涂乱画、违规养犬等违反城镇管理法律法规的</td>
	    <td>-5</td>
	</tr>
	<tr>
      	<td>放鞭炮、家庭装修、广场舞、使用高音广播喇叭等产生社会生活噪声或饲养动物干扰他人正常生活等的</td>
	    <td>-5</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '12、暴力抗法',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >社会管理领域失信信息</td>
	    <td >暴力抗法</td>
	    <td>以暴力、威胁或者其他方法阻碍行政、司法机关履行职务的</td>
      	<td>-100</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '13、计划生育',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="2">社会管理领域失信信息</td>
	    <td rowspan="2">计划生育</td>
	    <td>违反计划生育政策的</td>
      	<td>-40</td>
	</tr>
	<tr>
      	<td>违反计划生育政策， 不按规定缴纳社会抚养费的</td>
	    <td>-50</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '14、伪造证件',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >社会管理领域失信信息</td>
	    <td >伪造证件</td>
	    <td>伪造或买卖公文、证件、印章等的</td>
      	<td>-100</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '15、诬告诽谤',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >社会管理领域失信信息</td>
	    <td >诬告诽谤</td>
	    <td>捏造事实、诬告诽谤等的</td>
      	<td>-30</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '16、传播不良信息',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >社会管理领域失信信息</td>
	    <td >传播不良信息</td>
	    <td>利用微信、论坛、博客等互联网技术发布、传播不良信息的</td>
      	<td>-50</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '17、信访领域',
        "content": `
        <table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="17">社会管理领域失信信息</td>
	    <td rowspan="17">信访领域</td>
	    <td>未向区内国家机关、属地单位、职能部门提出信访诉求，直接去威海市走访的</td>
      	<td>-10</td>
	</tr>
	<tr>
      	<td>直接到省走访的</td>
	    <td>-20</td>
	</tr>
 	<tr>
      	<td>直接进京走访的</td>
	    <td>-50</td>
	</tr>
	<tr>
      	<td>集体走访时，拒不推选信访人代表，造成信访机关无法接待处理的参与者</td>
	    <td>-10</td>
	</tr>
 	<tr>
      	<td>利用网上信访系统恶意重复投诉的</td>
	    <td>-10</td>
	</tr>
 	<tr>
      	<td>向属地单位、职能部门提出信访诉求，在办理期内越级走访的</td>
	    <td>-10</td>
	</tr>
 	<tr>
      	<td>走访期间不听从公安机关指挥的</td>
	    <td>-20</td>
	</tr>
	<tr>
      	<td>在信访接待场所滞留、滋事，或者将年老、年幼、体弱、患有疾病、肢体残疾等生活不能自理的信访人遗留在信访场所， 信访人直系亲属对具备上述特征的信访人不按照信访机关要求接回的</td>
	    <td>-20</td>
	</tr>
 	<tr>
      	<td>信访人不接受负责处理信访事项的国家机关、单位出具的答复意见，不进入复查复核程序而越级走访的</td>
	    <td>-20</td>
	</tr>
 	<tr>
      	<td>将信访事项发布网络或其他媒体， 经负责处理信访事项的单位、部门出具办理意见后，不及时删除的</td>
	    <td>-20</td>
	</tr>
 	<tr>
      	<td>采用拉横幅、喊口号等方式上访，不听从劝阻的</td>
	    <td>-30</td>
	</tr>
	<tr>
      	<td>利用信访渠道捏造、诽谤他人的</td>
	    <td>-30</td>
	</tr>
 	<tr>
      	<td>煽动、串联、胁迫、诱使他人采取过激行为从事信访活动的</td>
	    <td>-50</td>
	</tr>
 	<tr>
      	<td>不按照规定到指定的信访部门表达诉求， 在国家机关办公场所周边聚集的组织者</td>
	    <td>-50</td>
	</tr>
 	<tr>
      	<td>不按照规定到指定的信访部门表达诉求， 在国家机关办公场所周边聚集的参与者</td>
	    <td>-20</td>
	</tr>
	<tr>
      	<td>未经公安机关批准， 在公共场所集会和游行示威的参与者</td>
	    <td>-50</td>
	</tr>
 	<tr>
      	<td>在中央和地方各级重大会议、活动期间，在会场周边上访的</td>
	    <td>-50</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '18、社区管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="22">社会管理领域失信信息</td>
	    <td rowspan="22">社区管理</td>
	    <td>不按规定停放车辆或阻碍他人正常通行屡教不改的（ 2 次以上）、在楼道给电动车充电不听劝阻的</td>
      	<td>-10</td>
	</tr>
	<tr>
      	<td>房屋或设施造成他人损失拒不维修赔偿的</td>
	    <td>-20</td>
	</tr>
 	<tr>
      	<td>占用公共部位乱堆乱放、乱搭乱建或侵占、私改、破坏公共空间、公共设施、公共绿地且不听劝阻的</td>
	    <td>-10</td>
	</tr>
	<tr>
      	<td>占用公共部位乱堆乱放、乱搭乱建或侵占、私改、破坏公共空间、公共设施、公共绿地且不听劝阻的</td>
	    <td>-10</td>
	</tr>
 	<tr>
      	<td>车库及地下室私改用途影响他人生活的</td>
	    <td>-10</td>
	</tr>
 	<tr>
      	<td>邻居失和拒不接受调解、造成恶劣影响的</td>
	    <td>-10</td>
	</tr>
 	<tr>
      	<td>不按照规定进行垃圾分类且不听劝阻的</td>
	    <td>-5</td>
	</tr>
	<tr>
      	<td>在社区公共场所寻衅滋事的</td>
	    <td>-20</td>
	</tr>
 	<tr>
      	<td>虐待家庭成员、不履行赡养义务的</td>
	    <td>-50</td>
	</tr>
 	<tr>
      	<td>到社区办理相关业务提供虚假信息的</td>
	    <td>-10</td>
	</tr>
 	<tr>
      	<td>在社区微信群或其他场合传播不实言论、 煽动闹事，情节一般的</td>
	    <td>-20</td>
	</tr>
	<tr>
      	<td>在社区微信群或其他场合传播不实言论、 煽动闹事，情节较重的</td>
	    <td>-30</td>
	</tr>
 	<tr>
      	<td>在社区微信群或其他场合传播不实言论、 煽
动闹事，情节严重的</td>
	    <td>-50</td>
	</tr>
 	<tr>
      	<td>社区居民信用信息采集员编造虚假信息的</td>
	    <td>-20</td>
	</tr>
 	<tr>
      	<td>在禁止燃放烟花爆竹的区域、 地点或者时间燃放烟花爆竹的</td>
	    <td>-20</td>
	</tr>
	<tr>
      	<td>社区党员无正当理由不参加组织生活会及社区党组织要求参加的其他活动的</td>
	    <td>-5</td>
	</tr>
 	<tr>
      	<td>社区党员不按时缴纳党费的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>编入民兵分队无故退出或训练期间违纪、 消极训练的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>其他违反居民公约造成不良影响的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>其他违反居民公约造成较重社会影响的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>其他违反居民公约造成严重社会影响的</td>
	    <td>-40</td>
	</tr>
  	<tr>
      	<td>其他违反居民公约造成影响恶劣社会影响的</td>
	    <td>-50</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '19、农村管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="51">社会管理领域失信信息</td>
	    <td rowspan="51">农村管理</td>
	    <td>乱堆乱倒垃圾、乱堆乱放杂草杂物的</td>
      	<td>-5</td>
	</tr>
  	<tr>
      	<td>违规占用广场、道路打场晒粮、停放车辆的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>扬撒各类广告及纸钱冥币的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>不按照规定进行垃圾分类且不听劝阻的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>占用公共部位乱摆乱卖、圈地种植的</td>
	    <td>-5</td>
	</tr>
   	<tr>
      	<td>乱贴乱挂或粉刷任何形式的广告、 宣传品的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>乱贴乱挂或粉刷任何形式的广告、宣传品的，造成不良社会影响的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>焚烧垃圾、枯草树叶或其他废弃物的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>破坏公共绿地和花草树木的</td>
	    <td>-10</td>
	</tr>
   	<tr>
      	<td>其他房前屋后环境卫生不达标的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>污损公益广告的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>在村居内诽谤他人、酗酒闹事、打架斗殴，造成不良影响的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>不按规定养犬的</td>
	    <td>-10</td>
	</tr>
   	<tr>
      	<td>不按规定养犬的，给他人人身造成伤害的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>破坏或偷盗农作物的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>在公共场所寻衅滋事的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>刁难、辱骂村居工作人员及其他工作人员，影响正常工作秩序的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>聚众赌博或为赌博提供赌具和场所的</td>
	    <td>-20</td>
	</tr>
   	<tr>
      	<td>私自砍伐林木的</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>擅自翻建房屋的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>乱挖乱改道路、排水沟、房屋围墙等的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>私改车库、地下室影响他人生活的</td>
	    <td>-10</td>
	</tr>
   	<tr>
      	<td>私养禽畜和生产加工过程中污染周边环境，以及从事经营活动存在环保污染或安全隐患的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>乱搭乱建以及损害四邻利益的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>烧荒、串地堰等违规用火的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>烧荒、串地堰等违规用火，造成火灾的</td>
	    <td>-50</td>
	</tr>
   	<tr>
      	<td>在村庄自来水、厕所、暖气、天然气等公共事业方面的改造或管路安装过程中， 阻挠正常施工的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>在村庄自来水、厕所、暖气、天然气等公共事业方面的改造或管路安装过程中， 阻挠正常施工的，造成无法施工的</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>在村庄自来水、厕所、暖气、天然气等公共事业方面的改造或管路安装过程中， 阻挠正常施工的，造成无法施工的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>在禁养区养殖不按要求进行整改的</td>
	    <td>-50</td>
	</tr>
   	<tr>
      	<td>邻居失和拒不接受调解、造成不良影响的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>组织广场舞等娱乐健身活动扰乱居民生活的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>出售封建迷信用品的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>搞封建迷信及其他不文明行为的</td>
	    <td>-10</td>
	</tr>
   	<tr>
      	<td>大操大办“红白喜事”的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>参与祭祀扫墓有烧香烧纸、 燃放鞭炮等行为的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>参与祭祀扫墓有烧香烧纸、燃放鞭炮等行为，造成火灾的</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>子女虐待老人、不履行赡养义务的</td>
	    <td>-50</td>
	</tr>
   	<tr>
      	<td>父母不履行抚养、教育子女义务，虐待、遗弃家庭成员的</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>不按规定时间、 不按标准拆除私建硬化超面积大墓的（配偶、子女或立碑人）</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>新建立碑安葬的墓穴面积和高度超过规定标准的，以及出现乱埋乱葬情况的（配偶、子女或立碑人）</td>
	    <td>-100</td>
	</tr>
  	<tr>
      	<td>农村居民信用信息采集员编造虚假信用信息的</td>
	    <td>-50</td>
	</tr>
   	<tr>
      	<td>拒不配合村居执行正常工作任务的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>拒不配合村居执行正常工作任务的， 给整体工作造成不良影响的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>人为造成他人房屋及其他财产损失， 拒不维修赔偿的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>个体经营者欺客宰客、强买强卖，造成不良影响的</td>
	    <td>-20</td>
	</tr>
   	<tr>
      	<td>侵占、买卖、出租或者以其他形式非转让和变更村集体或他人的土地使用权的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>不履行集体发包合同的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>无理取闹、干扰集体发包活动的</td>
	    <td>-50</td>
	</tr>
   	<tr>
      	<td>其他违反村规民约及公序良俗的</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>其他严重违反村规民约及公序良俗的</td>
	    <td>-10</td>
	</tr>
</table>`
      },
      {
        "title_c2_c": '20、企业负责人管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="5">社会管理领域失信信息</td>
	    <td rowspan="5">企业负责人管理</td>
	    <td>为本企业担保又未履行生效裁判确定的清偿责任的</td>
      	<td>-50</td>
	</tr>
  	<tr>
      	<td>企业负债、倒闭等原因走逃的</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>个人所负数额较大债务到期未清偿或依法被认定偷逃税费的</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>担任因经营不善破产清算的企业法定代表人或主要负责人， 并对该企业破产负有个人责任的</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>企业存在未执结的债务，人民法院作出限制其法定代表人或主要负责人、董事、监事及其他高级管理人员出境的</td>
	    <td>-50</td>
	</tr>  	
</table>`
      },
      {
        "title_c2_c": '21、企业职工管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="6">社会管理领域失信信息</td>
	    <td rowspan="6">企业职工管理</td>
	    <td>违反厂规厂纪一般情况的</td>
      	<td>-2</td>
	</tr>
  	<tr>
      	<td>违反厂规厂纪较重情况的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>严重违反厂规厂纪的</td>
	    <td>-50</td>
	</tr>
  	<tr>
      	<td>劳动者同时与其他用人单位建立劳动关系，对完成本单位的工作任务造成严重影响， 或者经用人单位提出，拒不改正的</td>
	    <td>-60</td>
	</tr>
  	<tr>
      	<td>泄露企业技术秘密、商业秘密的</td>
	    <td>-100</td>
	</tr>  	
    	<tr>
      	<td>严重失职，营私舞弊，给用人单位造成重大
损害的</td>
	    <td>-100</td>
	</tr>  	
</table>`
      },
      {
        "title_c2_c": '22、其他',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >社会管理领域失信信息</td>
	    <td >其他</td>
	    <td>其他在社会管理领域的失信行为， 视情节减分</td>
      	<td>-10至-50</td>
	</tr>
</table>`
      }, 
      {
        "title_c2_c": '23、党建领域（农村党组织书记、村委会主任）',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="28">社会管理领域失信信息</td>
	    <td rowspan="28">党建领域（农村党组织书记、村委会主任）</td>
	    <td>承诺的年度目标完不成的， 或者是触碰农村干部“负面清单”的</td>
      	<td>-10</td>
	</tr>
  	<tr>
      	<td>承诺的年度目标完不成的， 或者是触碰农村干部“负面清单”，情节较重的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>承诺的年度目标完不成的， 或者是触碰农村干部“负面清单”，情节严重的</td>
	    <td>-40</td>
	</tr>
  	<tr>
      	<td>承诺的年度目标完不成的， 或者是触碰农村
干部“负面清单”，情节特别严重的</td>
	    <td>-50</td>
	</tr>  	
    	<tr>
      	<td>不按照要求开展“三会一课”、组织生活会等党内生活，党费核算不准确，或不按规定管理使用党费，标准化建设连续 2 次被评为“不达标”的</td>
	    <td>-10</td>
	</tr>  	
  	<tr>
      	<td>“两委”干部之间不团结，甚至相互拆台、上访的，责任双方分别扣分</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>村“两委”干部出现违纪违法行为的,每有 1人，党组织书记扣分</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>村“两委”干部出现违纪违法行为的,每有 1人，村委会主任扣分</td>
	    <td>-3</td>
	</tr>  	
    	<tr>
      	<td>对上级党组织安排的工作， 不按要求落实或者说三道四的</td>
	    <td>-5</td>
	</tr>  
   	<tr>
      	<td>对上级党组织安排的工作， 不按要求落实或者说三道四，情节较重的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>对上级党组织安排的工作， 不按要求落实或者说三道四，情节严重的</td>
	    <td>-15</td>
	</tr>
  	<tr>
      	<td>对上级党组织安排的工作， 不按要求落实或者说三道四，情节特别严重的</td>
	    <td>-20</td>
	</tr>  	
    	<tr>
      	<td>严重失职，营私舞弊，给用人单位造成重大
损害的</td>
	    <td>-100</td>
	</tr>  	
  	<tr>
      	<td>违反厂规厂纪较重情况的</td>
	    <td>-20</td>
	</tr>
  	<tr>
      	<td>党支部星级评定中， 一星级党组织的党组织书记（村委会主任）</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>无正当理由不按时参加镇街组织的廉政教育活动的、 廉政教育专栏内容更新不及时的</td>
	    <td>-4</td>
	</tr>  	
    	<tr>
      	<td>不按要求签订廉政承诺书的</td>
	    <td>-2</td>
	</tr>  
   	<tr>
      	<td>无正当理由不按时参加涉及廉政教育内容的片务会议的</td>
	    <td>-2</td>
	</tr>
  	<tr>
      	<td>无正当理由不按时参加“四议两公开”专题议事会议的</td>
	    <td>-2</td>
	</tr>
  	<tr>
      	<td>无正当理由不按时参加述廉评议的</td>
	    <td>-2</td>
	</tr>  	
    	<tr>
      	<td>述廉评议结果群众满意度低于 85%的</td>
	    <td>-5</td>
	</tr>  	
  	<tr>
      	<td>环境卫生管护不到位，检查发现问题的，党组织书记、村委会主任分别扣分</td>
	    <td>-5</td>
	</tr>
  	<tr>
      	<td>村级党组织在议事决策、 资产处置等工作中不履行民主程序的</td>
	    <td>-10</td>
	</tr>
  	<tr>
      	<td>不作为、乱作为，导致问题久拖不决，或引起上访的</td>
	    <td>-5</td>
	</tr>  	
    	<tr>
      	<td>不作为、乱作为，导致问题久拖不决，或引起上访，情节较重的</td>
	    <td>-10</td>
	</tr>  
   	<tr>
      	<td>不作为、乱作为，导致问题久拖不决，或引起上访，情节严重的</td>
	    <td>-15</td>
	</tr>
  	<tr>
      	<td>不作为、乱作为，导致问题久拖不决，或引起上访，情节特别严重的</td>
	    <td>-20</td>
	</tr>  	
    	<tr>
      	<td>无正当理由不按时参加“三会一课”、主题党日、组织生活会等政治生活的</td>
	    <td>-5</td>
	</tr> 
</table>`
      },
      {
        "title_c2_c": '24、党建领域（农村党员）',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="10">社会管理领域失信信息</td>
	    <td rowspan="10">党建领域（农村党员）</td>
	    <td>不按时参加“三会一课”、主题党日、组织生活会等政治生活， 因正当理由请假但事后不参加补课的</td>
      	<td>-5</td>
	</tr>
  	 <tr>
      	<td>党建材料造假的</td>
	    <td>-5</td>
	</tr>  	
   	<tr>
      	<td>不如实申报个人收入， 不主动按月足额交纳
党费的</td>
	    <td>-5</td>
	</tr>  
   	 <tr>
      	<td>不履行党员义务，或者对支部安排的工作，不支持不配合的</td>
	    <td>-5</td>
	</tr>  	
   	<tr>
      	<td>拉帮结派、搞派性对立，影响工作正常开展的</td>
	    <td>-5</td>
	</tr>  
   	 <tr>
      	<td>参加各类会议，在会场大声喧哗、起哄或提及与会议无关话题等的</td>
	    <td>-10</td>
	</tr>  	
   	<tr>
      	<td>无正当理由不按时参加廉政党课的、 无正当理由不按时参加镇街组织的廉政教育活动的</td>
	    <td>-4</td>
	</tr>  
   	 <tr>
      	<td>无正当理由不按时参加“四议两公开”专题议事会议的</td>
	    <td>-2</td>
	</tr>  	
   	<tr>
      	<td>无正当理由不按时参加述廉评议的</td>
	    <td>-2</td>
	</tr>  
     	<tr>
      	<td>述廉评议结果群众满意度低于 85%的（村两
委成员）</td>
	    <td>-5</td>
	</tr>  
</table>`
      },
  ],
    
  title_c3: '政务管理领域失信信息',
  content3:
    [
      {
        "title_c3_c": '1、问责处理 ',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="13">政务管理领域失信信息</td>
	    <td rowspan="13">问责处理</td>
	    <td>受到谈话提醒的</td>
      	<td>-3</td>
	</tr>
  	 <tr>
      	<td>受到效能告诫、待岗学习等措施的</td>
	    <td>-3</td>
	</tr>  	
   	<tr>
      	<td>受到批评教育的</td>
	    <td>-3</td>
	</tr>  
   	 <tr>
      	<td>被责令作出书面检查的</td>
	    <td>-5</td>
	</tr>  	
   	<tr>
      	<td>被区级部门通报批评的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>区级通报批评的</td>
	    <td>-20</td>
	</tr>  	
   	<tr>
      	<td>威海市级通报批评的</td>
	    <td>-30</td>
	</tr>  
   	 <tr>
      	<td>省部级通报批评的</td>
	    <td>-50</td>
	</tr>  	
   	<tr>
      	<td>受到诫勉谈话的</td>
	    <td>-30</td>
	</tr>  
     	<tr>
      	<td>停职检查和调整职务的</td>
	    <td>-30</td>
	</tr>  
    	 <tr>
      	<td>受到责令辞职、降职、免职的</td>
	    <td>-40</td>
	</tr>  	
   	<tr>
      	<td>被取消当选资格或者担任相应职务资格的</td>
	    <td>-40</td>
	</tr>  
     	<tr>
      	<td>受到其他处理措施的</td>
	    <td>-5至-50</td>
	</tr>  
</table>`
      },
      {
        "title_c3_c": '2、党纪处分',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="5">政务管理领域失信信息</td>
	    <td rowspan="5">党纪处分</td>
	    <td>有违纪违规行为，情节轻微免予处分的</td>
      	<td>-10</td>
	</tr>
  	 <tr>
      	<td>受到警告处分的</td>
	    <td>-50</td>
	</tr>  	
   	<tr>
      	<td>受到严重警告处分的</td>
	    <td>-70</td>
	</tr>  
   	 <tr>
      	<td>受到党内撤职处分的</td>
	    <td>-100</td>
	</tr>  	
   	<tr>
      	<td>受到留党察看处分的</td>
	    <td>-150</td>
	</tr>  
</table>`
      },
      {
        "title_c3_c": '3、政务处分',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="4">政务管理领域失信信息</td>
	    <td rowspan="4">政务处分</td>
	    <td>受到警告处分的</td>
      	<td>-50</td>
	</tr>
  	 <tr>
      	<td>受到记过处分的</td>
	    <td>-60</td>
	</tr>  	
   	<tr>
      	<td>受到记大过处分的</td>
	    <td>-70</td>
	</tr>  
   	 <tr>
      	<td>受到降级处分的</td>
	    <td>-100</td>
	</tr>  	
</table>`
      },
      {
        "title_c3_c": '4、国家公职人员岗位管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="27">政务管理领域失信信息</td>
	    <td rowspan="27">国家公职人员岗位管理</td>
	    <td>拒绝执行各级作出的决定和命令的</td>
      	<td>-20</td>
	</tr>
  	 <tr>
      	<td>故意不完成任务给工作造成损失、 造成不良影响的</td>
	    <td>-20</td>
	</tr>  	
   	<tr>
      	<td>压制批评，打击报复，诬告陷害他人的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>弄虚作假，误导、欺骗领导和公众的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>侮辱服务对象， 殴打他人或者唆使他人打人等的</td>
	    <td>-10</td>
	</tr>  	
   	<tr>
      	<td>截留、克扣、挪用、贪污行政事业性收费、政府性资金和罚款等的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>私分、侵占、挪用、故意损毁收缴、扣押财物的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>无正当理由不服从工作安排或调整的</td>
	    <td>-10</td>
	</tr>  	
   	<tr>
      	<td>对群众合理诉求置之不理，门难进、脸难看、事难办，遇事推诿扯皮、敷衍塞责的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>虚报、瞒报、伪造、篡改或者拒报数据或信息的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>收缴罚款不出具罚款收据或者不如实填写罚款数额的</td>
	    <td>-10</td>
	</tr>  	
   	<tr>
      	<td>违反规定乱检查、乱收费、乱罚款、乱摊派等的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>不依法行使行政权力，存在“吃拿卡要报”“执法不力”“只罚不管”“管而不放”等的</td>
	    <td>-20</td>
	</tr>  	
   	 <tr>
      	<td>违反法定程序实施行政处罚、 行政许可等的</td>
	    <td>-20</td>
	</tr>  	
   	<tr>
      	<td>煽动、教唆当事人采取扰乱公共秩序、危害公共安全等非法手段解决争议的</td>
	    <td>-40</td>
	</tr>  
   	 <tr>
      	<td>违反行业、执业操作规范，造成责任事故的</td>
	    <td>-40</td>
	</tr>  
   	 <tr>
      	<td>违反机关管理、服务承诺等方面规定的</td>
	    <td>-5</td>
	</tr>  	
   	<tr>
      	<td>旷工或者因公外出、 请假期满无正当理由逾期不归的</td>
	    <td>-5</td>
	</tr>  
   	 <tr>
      	<td>擅自脱岗、离岗、串岗等违反工作纪律的</td>
	    <td>-5</td>
	</tr>  	
   	 <tr>
      	<td>月度迟到或早退超过 5 次的</td>
	    <td>-5</td>
	</tr>  	
   	<tr>
      	<td>上班时间上网聊天、打牌、下棋、打麻将、炒股、玩电脑游戏等做与工作无关事情的</td>
	    <td>-5</td>
	</tr>  
   	 <tr>
      	<td>违反禁酒令、 公车私用及其他违反车辆管理规定的</td>
	    <td>-20</td>
	</tr>  
   	 <tr>
      	<td>从事或参与经营性活动</td>
	    <td>-40</td>
	</tr>  	
   	<tr>
      	<td>违反在公共场所禁烟规定的</td>
	    <td>-5</td>
	</tr>  
   	 <tr>
      	<td>未按规定报送信用信息的</td>
	    <td>-5</td>
	</tr>  	
    	<tr>
      	<td>未按规定报送信用信息，造成不良影响的</td>
	    <td>-20</td>
	</tr>  
   	 <tr>
      	<td>年度考核被评定为基本称职（基本合格）等次的</td>
	    <td>-40</td>
	</tr>  	
</table>`
      },
      {
        "title_c3_c": '5、重点人群职业管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="6">政务管理领域失信信息</td>
	    <td rowspan="6">重点人群职业管理</td>
	    <td>取得各类资格、职务、荣誉过程中的失信行为</td>
      	<td>-20</td>
	</tr>
  	<tr>
      	<td>违反行业、执业操作规范，造成责任事故的</td>
	    <td>-50</td>
	</tr>  
   	 <tr>
      	<td>非法办班、违规办班、有偿家教等的</td>
	    <td>-40</td>
	</tr>  
  	<tr>
      	<td>违反行业自律承诺、行业管理规定、职业道德规范的</td>
	    <td>-10</td>
	</tr>  
   	 <tr>
      	<td>严重违反行业自律承诺、行业管理规定、职业道德规范的</td>
	    <td>-50</td>
	</tr>  
     <tr>
      	<td>玩忽职守、滥用职权、违反财经纪律等的</td>
	    <td>-50</td>
	</tr>  
</table>`
      },
      {
        "title_c3_c": '6、其他',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >政务管理领域失信信息</td>
	    <td >其他</td>
	    <td>其他在政务管理领域的失信行为， 视情节减分</td>
      	<td>-10至-50</td>
	</tr>
</table>`
      },
    ],
  title_c4: '司法领域失信信息',
  content4:
    [
      {
        "title_c4_c": '1、轻微犯罪',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="2">司法领域失信信息</td>
	    <td rowspan="2">轻微犯罪</td>
	    <td>犯罪情节轻微， 人民检察院依法作出不起诉决定的， 或者人民法院依法作出有罪判决并免予刑事处罚的</td>
      	<td>-40</td>
	</tr>
  	<tr>
      	<td>犯罪被单处罚金的</td>
	    <td>-50</td>
	</tr>  
</table>`
      },
      {
        "title_c4_c": '2、民事诉讼',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="3">司法领域失信信息</td>
	    <td rowspan="3">民事诉讼</td>
	    <td>判决、 裁定信息主体履行义务以及强制执行的</td>
      	<td>-20</td>
	</tr>
  	<tr>
      	<td>虚假诉讼侵犯他人合法权益的</td>
	    <td>-50</td>
	</tr>  
   	<tr>
      	<td>恶意拖欠工资、劳动报酬，不履行赡养、抚
养、扶养义务等逃避法定义务的</td>
	    <td>-50</td>
	</tr>  
</table>`
      },
      {
        "title_c4_c": '3、刑事诉讼',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >司法领域失信信息</td>
	    <td >刑事诉讼</td>
	    <td>因违法被生效法律文书认定为构成犯罪， 被判处缓刑的</td>
      	<td>-100</td>
	</tr>
</table>`
      },
      {
        "title_c4_c": '4、司法执行',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="2">司法领域失信信息</td>
	    <td rowspan="2">司法执行</td>
	    <td>不按规定申报财产的</td>
      	<td>-20</td>
	</tr>
  	<tr>
      	<td>通过转移、变卖、毁损、隐匿财产等手段规避执行的</td>
	    <td>-50</td>
	</tr>   
</table>`
      },
      {
        "title_c4_c": '5、信用修复',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="2">司法领域失信信息</td>
	    <td rowspan="2">信用修复</td>
	    <td>被法院列为失信被执行人、 限制高消费后履行相关义务或达成和解协议， 依法解除失信（限制高消费）措施，申请信用修复的</td>
      	<td>-50</td>
	</tr>
  	<tr>
      	<td>企业及其他组织被列入法院失信被执行人名单后主动履行的，其法定代表人、主要负责人或影响义务履行的相关责任人申请信用修复的</td>
	    <td>-60</td>
	</tr>   
</table>`
      },
      {
        "title_c4_c": '6、法律中介',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >司法领域失信信息</td>
	    <td >法律中介
材料的</td>
	    <td>违反规定向司法机关出具虚假报告或证明材料的</td>
      	<td>-100</td>
	</tr>
</table>`
      },
      {
        "title_c4_c": '7、司法协助',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="3">司法领域失信信息</td>
	    <td rowspan="3">司法协助</td>
	    <td>拒绝或者妨碍人民法院调查取证的</td>
      	<td>-50</td>
	</tr>
  	<tr>
      	<td>拒不协助查询、扣押、冻结、划拨、变价财产的</td>
	    <td>-50</td>
	</tr> 
    	<tr>
      	<td>拒不协助扣留被执行人的收入、 办理有关财产权证照转移手续、转交有关票证、证照或者其他财产的</td>
	    <td>-50</td>
	</tr>   
</table>`
      },
      {
        "title_c4_c": '8、诉讼秩序',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="5">司法领域失信信息</td>
	    <td rowspan="5">诉讼秩序</td>
	    <td>对必须到庭的被告，经法院两次传票传唤，无正当理由拒不到庭的</td>
      	<td>-20</td>
	</tr>
  	<tr>
      	<td>哄闹、冲击法庭，侮辱、诽谤、威胁、殴打或者打击报复司法工作人员、诉讼参加人、证人、翻译人员、鉴定人、勘验人、协助执行人的</td>
	    <td>-100</td>
	</tr> 
    	<tr>
      	<td>伪造、毁灭重要证据，妨碍人民法院审理案件的</td>
	    <td>-50</td>
	</tr>   
    	<tr>
      	<td>以暴力、威胁、贿买方法阻止证人作证或者指使、贿买、胁迫他人作伪证的</td>
	    <td>-100</td>
	</tr> 
    	<tr>
      	<td>隐藏、转移、变卖、毁损已被查封、扣押的财产，或者已被清点并责令其保管的财产，转移已被冻结的财产的</td>
	    <td>-100</td>
	</tr> 
</table>`
      },
      {
        "title_c4_c": '9、其他',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td >司法领域失信信息</td>
	    <td >其他</td>
	    <td>其他在司法领域的失信行为，视情节减分</td>
      	<td>-10至-100</td>
	</tr>
</table>`
      },
    ],
  title_c5: '守信信息',
  content5:
    [
      {
        "title_c5_c": '1、党建领域（农村党组织书记、村委会主任）',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="12">守信信息</td>
	    <td rowspan="12">党建领域（农村党组织书记、村委会主任）</td>
	    <td>在落实急难险重任务发展中成效突出的</td>
      	<td>+5</td>
	</tr>
  	<tr>
      	<td>在落实急难险重任务发展中成效特别突出的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>党建工作扎实，被评为党建示范点，党组织书记贡献突出的</td>
	    <td>+5</td>
	</tr>   
    	<tr>
      	<td>党建工作扎实， 被评为威海级及以上党建示范点，党组织书记贡献突出的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>党支部星级评定中， 五星级党支部的党组织书记（村委会主任）</td>
	    <td>+5</td>
	</tr> 
    <tr>
      	<td>在发展壮大集体经济中积极作为， 成效突出的</td>
	    <td>+5</td>
	</tr> 
      <tr>
      	<td>在发展壮大集体经济中积极作为，成效突出，做出重要贡献的</td>
	    <td>+10</td>
	</tr> 
      <tr>
      	<td>在新时代文明实践、信用建设、厕所改造、美在我家等工作中， 村居被确定为区级部门示范点（观摩点）的</td>
	    <td>+5</td>
	</tr> 
      <tr>
      	<td>在新时代文明实践、信用建设、厕所改造、美在我家等工作中， 村居被确定为威海市级部门示范点（观摩点）的</td>
	    <td>+10</td>
	</tr> 
      <tr>
      	<td>在新时代文明实践、信用建设、厕所改造、美在我家等工作中， 村居被确定为区级示范点（观摩点）的</td>
	    <td>+20</td>
	</tr> 
      <tr>
      	<td>在农村“三堂课”开展中打造廉政文化，并通过验收的</td>
	    <td>+10</td>
	</tr> 
      <tr>
      	<td>自主组织开展廉政教育活动的</td>
	    <td>+5</td>
	</tr> 
</table>`
      },
      {
        "title_c5_c": '2、党建领域（农村党员）',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="9">守信信息</td>
	    <td rowspan="9">党建领域（农村党员）</td>
	    <td>在完成急难险重任务中，表现突出的</td>
      	<td>+5</td>
	</tr>
  	<tr>
      	<td>在完成急难险重任务中，表现特别突出的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>带头推进乡村振兴， 帮助村集体引进产业项目并取得良好效益的</td>
	    <td>+5</td>
	</tr>   
    	<tr>
      	<td>带头推进乡村振兴， 帮助村集体引进产业项目 并 取 得 良 好 效 益 的 （ 农 业 项 目 投 资100—200（不含）万元的）</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>带头推进乡村振兴， 帮助村集体引进产业项目 并 取 得 良 好 效 益 的 （ 农 业 项 目 投 资200—500（不含）万元的）</td>
	    <td>+20</td>
	</tr> 
    <tr>
      	<td>带头推进乡村振兴， 帮助村集体引进产业项目并取得良好效益的（农业项目投资 500 万元以上的）</td>
	    <td>+50</td>
	</tr> 
      <tr>
      	<td>主动参加村居开展廉政教育活动的</td>
	    <td>+2</td>
	</tr> 
      <tr>
      	<td>在党员联四邻、设岗定责、传帮带等工作中，表现特别突出的</td>
	    <td>+5</td>
	</tr> 
      <tr>
      	<td>在党员联四邻、设岗定责、传帮带等工作中，表现特别突出，做出重要贡献的</td>
	    <td>+10</td>
	</tr> 

</table>`
      },
      {
        "title_c5_c": '3、党建领域',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="2">司法领域失信信息</td>
	    <td rowspan="2">党建领域</td>
	    <td>自主开展廉政文化宣传活动的组织者</td>
      	<td>+5</td>
	</tr>
    <tr>
      	<td>自主开展廉政文化宣传活动的参与者</td>
	    <td>+2</td>
	</tr> 
</table>`
      },
      {
        "title_c5_c": '4、志愿服务（社区服务、农村服务）',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="9">守信信息</td>
	    <td rowspan="9">志愿服务（社区服务、农村服务）</td>
	    <td>参加志愿服务时间累计达到 10 小时</td>
      	<td>+2</td>
	</tr>
  	<tr>
      	<td>参加志愿服务时间累计达到 20 小时</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>参加志愿服务时间累计达到 20 小时</td>
	    <td>+10</td>
	</tr>   
    	<tr>
      	<td>参加志愿服务时间累计达到 80 小时</td>
	    <td>+15</td>
	</tr> 
    	<tr>
      	<td>参加志愿服务时间累计达到 100 小时</td>
	    <td>+20</td>
	</tr> 
    <tr>
      	<td>参加志愿服务时间累计达到 150 小时</td>
	    <td>+25</td>
	</tr> 
      <tr>
      	<td>参加志愿服务时间累计达到 200 小时</td>
	    <td>+30</td>
	</tr> 
      <tr>
      	<td>参加志愿服务时间累计达到 250 小时</td>
	    <td>+40</td>
	</tr> 
      <tr>
      	<td>参加志愿服务时间累计达到 300 小时</td>
	    <td>+50</td>
	</tr> 

</table>`
      },
      {
        "title_c5_c": '5、拾金不昧',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="4">守信信息</td>
	    <td rowspan="4">拾金不昧</td>
	    <td>拾金不昧金额 100—1000 元的</td>
      	<td>+2</td>
	</tr>
  	<tr>
      	<td>拾金不昧金额 1001—5000 元的</td>
	    <td>+3</td>
	</tr> 
    	<tr>
      	<td>拾金不昧金额 5001—10000 元的</td>
	    <td>+5</td>
	</tr>   
    	<tr>
      	<td>拾金不昧金额 1 万元以上的</td>
	    <td>+10</td>
	</tr> 
</table>`
      },
      {
        "title_c5_c": '6、社会公德',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="5">守信信息</td>
	    <td rowspan="5">社会公德</td>
	    <td>年度内在好人好事、救死扶伤、助人为乐等方面有突出表现的</td>
      	<td>+5</td>
	</tr>
  	<tr>
      	<td>举报违法制售、生产假冒伪劣产品等，有重大贡献的</td>
	    <td>+30</td>
	</tr> 
    	<tr>
      	<td>举报制售假冒伪劣产品、封建迷信用品、违法建设、 污染环境以及参加邪教组织等违法行为的</td>
	    <td>+10</td>
	</tr>   
    	<tr>
      	<td>举报或提供非法集资线索，有重大贡献的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>举报可能造成较大社会影响的食品安全、 生产安全问题等的</td>
	    <td>+5</td>
	</tr> 

</table>`
      },
      {
        "title_c5_c": '7、社区管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="30">守信信息</td>
	    <td rowspan="30">社区管理</td>
	    <td>获评城市社区信用示范家庭、信用示范楼道、 信用示范楼及其他区级家庭荣誉称号的</td>
      	<td>+5</td>
	</tr>
  	<tr>
      	<td>注册成立社区公益组织且发挥良好作用的</td>
	    <td>+20</td>
	</tr> 
    	<tr>
      	<td>备案成立社区公益组织且发挥良好作用的</td>
	    <td>+10</td>
	</tr>   
    	<tr>
      	<td>备案成立社区公益组织且发挥良好作用的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>牵头组织社区公益项目且发挥良好作用的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>牵头组织社区公益项目且常年运作良好的</td>
	    <td>+20</td>
	</tr> 
    	<tr>
      	<td>积极参加社区公益组织活动的</td>
	    <td>+2</td>
	</tr>   
    	<tr>
      	<td>长期参加社区公益组织活动的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>长期参加社区公益组织活动且做出突出贡献的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>协助社区解决小区公共问题的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>协助社区化解邻里纠纷的</td>
	    <td>+1</td>
	</tr>   
    	<tr>
      	<td>协助社区化解邻里纠纷且成效良好的</td>
	    <td>+3</td>
	</tr> 
    	<tr>
      	<td>多次协助社区化解邻里纠纷且成效良好的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>协助社区化解重大邻里纠纷的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>帮助或照顾社区无血缘关系的老幼病弱</td>
	    <td>+5</td>
	</tr>   
    	<tr>
      	<td>帮助或照顾社区无血缘关系的老幼病弱且社会反响良好的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>义务维修改造社区公共设施的</td>
	    <td>+2</td>
	</tr> 
    	<tr>
      	<td>主动认领养护社区树木、 花草及维护公共设施的</td>
	    <td>+1</td>
	</tr> 
    	<tr>
      	<td>见义勇为避免他人人身或财产安全受到损失的</td>
	    <td>+10</td>
	</tr>   
    	<tr>
      	<td>向社区主动提供安全预警信息， 避免集体或他人人身财产受到损失的</td>
	    <td>+2</td>
	</tr> 
    	<tr>
      	<td>主动清理公共区域积雪的</td>
	    <td>+1</td>
	</tr> 
    	<tr>
      	<td>参加或配合社区进行环境整治的</td>
	    <td>+1</td>
	</tr> 
    	<tr>
      	<td>参加或配合社区进行环境整治效果较明显的</td>
	    <td>+3</td>
	</tr>   
    	<tr>
      	<td>参加或配合社区进行环境整治效果非常明显的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>向社区捐助资金及物资支持社区建设的</td>
	    <td>+1至20</td>
         <td>参照捐款计算</td>
	</tr> 
    	<tr>
      	<td>协助社区组织大型活动且全程参与的（100—200人规模）</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>协助社区组织大型活动且全程参与的（201—500人规模）</td>
	    <td>+10</td>
	</tr>   
    	<tr>
      	<td>其他积极配合社区工作的行为</td>
	    <td>+1</td>
	</tr> 
    	<tr>
      	<td>其他积极配合社区工作且做出突出贡献的行为</td>
	    <td>+3</td>
	</tr> 
  	<tr>
      	<td>其他积极配合社区工作且做出突出贡献较大的行为</td>
	    <td>+5</td>
	</tr> 
</table>`
      },
      {
        "title_c5_c": '8、村居管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="10">守信信息</td>
	    <td rowspan="10">村居管理</td>
	    <td>积极配合和支持村居、 镇街开展集中整治活动的</td>
      	<td>+5</td>
	</tr>
  	<tr>
      	<td>长期（6个月以上）坚持帮助无血缘亲缘关系的老幼病弱以及其他困难群众的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>年度内在好人好事、救死扶伤、助人为乐等方面有突出表现的</td>
	    <td>+5</td>
	</tr>   
    	<tr>
      	<td>有突出表现的帮助村集体增加收入、 帮助村民脱贫致富成效突出的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>组织居民协商解决农村公共问题或开展文明睦邻活动的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>组织成立农村公益组织且发挥作用良好的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>担任信息采集员并经镇街认定合格的</td>
	    <td>+5</td>
	</tr>   
      	<tr>
      	<td>镇街认定为“三星采集员”的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>镇街认定为“四星采集员”的</td>
	    <td>+20</td>
	</tr> 
    	<tr>
      	<td>镇街认定为“五星采集员”的</td>
	    <td>+30</td>
	</tr>   
</table>`
      },
      {
        "title_c5_c": '9、个人品德',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="4">守信信息</td>
	    <td rowspan="4">个人品德</td>
	    <td>义务协助追捕犯罪嫌疑人或提供重要线索，为侦破重特大案件作出贡献的</td>
      	<td>+20</td>
	</tr>
  	<tr>
      	<td>在抢险救灾中奋力排除险情，保护国家、集体和群众生命财产安全的</td>
	    <td>+20</td>
	</tr> 
    	<tr>
      	<td>见义勇为的</td>
	    <td>+5</td>
	</tr>    	
  	<tr>
      	<td>见义勇为表现特别突出的</td>
	    <td>+30</td>
	</tr>   
</table>`
      },
      {
        "title_c5_c": '10、社会公益（年度内累加或折算）',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="4">守信信息</td>
	    <td rowspan="4">社会公益（年度内累加或折算）</td>
	    <td>捐款100—1000元的，每100元加1分</td>
      	<td>+10</td>
      	<td rowspan="4">捐款每年最多加40分</td>
	</tr>
  	<tr>
      	<td>捐款1001—5000元的，每400元加1分</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>捐款5001—10000元的，每500元加1分</td>
	    <td>+10</td>
	</tr>    	
  	<tr>
      	<td>捐款1万元以上的，每1000元加1分</td>
	    <td>+10</td>
	</tr>   	
</table>`
      },
      {
        "title_c5_c": '11、社会公益',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="3">守信信息</td>
	    <td rowspan="3">社会公益</td>
	    <td>无偿献血的</td>
      	<td>+10</td>
      	<td>每次</td>
	</tr>
  	<tr>
      	<td>骨髓捐献等的</td>
	    <td>+50</td>
	</tr> 
    	<tr>
      	<td>无偿捐献遗体、器官的（父母或配偶作为加分对象）</td>
	    <td>+100</td>
	</tr>    	 	
</table>`
      },
      {
        "title_c5_c": '12、重点人群管理',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="4">守信信息</td>
	    <td rowspan="4">重点人群管理</td>
	    <td>“两代表一委员”年内提交的建议（提案）被评为“优秀建议（提案） ”的（主提案人）</td>
      	<td>+10</td>
	</tr>
  	<tr>
      	<td>“两代表一委员”年内提交的建议（提案）被评为“优秀建议（提案） ”的（主提案人）</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>“两代表一委员”向省级人大、政协、党组织报送社情民意信息，并被转发采纳的</td>
	    <td>+5</td>
	</tr>    
    	<tr>
      	<td>“两代表一委员”向市级人大、政协、党组织
报送社情民意信息，并被转发采纳的</td>
	    <td>+3</td>
	</tr> 
</table>`
      },
      {
        "title_c5_c": '13、表彰奖励',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="17">守信信息</td>
	    <td rowspan="17">表彰奖励</td>
	    <td>承担的工作被确定为区级部门示范点或作为经验做法推广的</td>
      	<td>+5</td>
	</tr>
  	<tr>
      	<td>承担的工作被确定为威海市级部门示范点或作为经验做法推广的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>承担的工作被确定为区级示范点或作为经验做法推广的</td>
	    <td>+20</td>
	</tr>    
    	<tr>
      	<td>承担的工作被确定为省部级部门示范点或作为经验做法推广的</td>
	    <td>+30</td>
	</tr> 
  <tr>
      	<td>承担的工作被确定为威海市级示范点或作为经验做法推广的</td>
	    <td>+40</td>
	</tr> 
    	<tr>
      	<td>承担的工作被确定为省部级示范点或作为经验做法推广的</td>
	    <td>+60</td>
	</tr>    
    	<tr>
      	<td>承担的工作被确定为国家级示范点或作为经验做法推广的</td>
	    <td>+100</td>
	</tr> 
  <tr>
      	<td>在完成中心工作、重点工作中做出贡献的</td>
	    <td>+5</td>
	</tr> 
    	<tr>
      	<td>在完成中心工作、 重点工作中做出突出贡献的</td>
	    <td>+10</td>
	</tr>    
    	<tr>
      	<td>受到国家级表彰奖励的</td>
	    <td>+100</td>
	</tr> 
  <tr>
      	<td>受到省部级表彰奖励的</td>
	    <td>+60</td>
	</tr> 
    	<tr>
      	<td>受到地市级表彰奖励的</td>
	    <td>+30</td>
	</tr>    
    	<tr>
      	<td>受到省部级部门表彰奖励的</td>
	    <td>+25</td>
	</tr> 
  <tr>
      	<td>受到地市级表彰奖励的</td>
	    <td>+20</td>
	</tr> 
    	<tr>
      	<td>受到区县级部门表彰奖励的</td>
	    <td>+10</td>
	</tr>    
    	<tr>
      	<td>受到区级部门表彰奖励的</td>
	    <td>+5</td>
	</tr> 
  	<tr>
      	<td>被列入行业红名单的</td>
	    <td>+10</td>
	</tr> 
</table>`
      },
      {
        "title_c5_c": '14、国防建设',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="6">守信信息</td>
	    <td rowspan="6">国防建设</td>
	    <td>子女参军入伍的</td>
      	<td>+5</td>
      	<td rowspan="6">奖励个人及父母</td>
	</tr>
  	<tr>
      	<td>服役期间被评为优秀士兵及相当表彰奖励的</td>
	    <td>+10</td>
	</tr> 
    	<tr>
      	<td>服役期间荣立三等功的</td>
	    <td>+20</td>
	</tr>    
    	<tr>
      	<td>服役期间荣立二等功的</td>
	    <td>+40</td>
	</tr> 
  <tr>
      	<td>服役期间荣立一等功的</td>
	    <td>+60</td>
	</tr> 
    	<tr>
      	<td>编入基干民兵队伍分队且训练成绩合格的</td>
	    <td>+2</td>
	</tr>    
</table>`
      },
      {
        "title_c5_c": '15、国家公职人员考核',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="4">守信信息</td>
	    <td rowspan="4">国家公职人员考核</td>
	    <td>公务员受到嘉奖、记三等功的</td>
      	<td>+20</td>
	</tr>
  	<tr>
      	<td>公务员记二等功的</td>
	    <td>+40</td>
	</tr> 
    	<tr>
      	<td>公务员记一等功的</td>
	    <td>+60</td>
	</tr>    
    	<tr>
      	<td>非参公事业单位工作人员考核为优秀的</td>
	    <td>+20</td>
	</tr> 
</table>`
      },
      {
        "title_c5_c": '16、招商引资',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="2">守信信息</td>
	    <td rowspan="2">招商引资</td>
	    <td>招商引资工商业投资达到 500—1000 万元、农业达到 200—500 万元的</td>
      	<td>+20</td>
	</tr>
  	<tr>
	    <td>招商引资工商业投资达到 1000 万元以上、农业达到 500 万元以上的</td>
      	<td>+50</td>
	</tr> 
</table>`
      },
      {
        "title_c5_c": '17、文体活动',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td rowspan="12">守信信息</td>
	    <td rowspan="12">文体活动</td>
	    <td rowspan="3">荣获区级组织的文体活动前三名的</td>
      	<td>+5</td>
	</tr>
  	<tr>
	    <td>+3</td>
	</tr> 
    <tr>
	    <td>+2</td>
	</tr>    
    <tr>
	    <td rowspan="3">荣获威海市级组织的文体活动前三名的</td>
      	<td>+10</td>
	</tr> 
	<tr>
	    <td>+6</td>
	</tr> 
    <tr>
	    <td>+4</td>
	</tr>  
      <tr>
	    <td rowspan="3">荣获省部级组织的文体活动前三名的</td>
      	<td>+20</td>
	</tr> 
	<tr>
	    <td>+12</td>
	</tr> 
    <tr>
	    <td>+8</td>
	</tr>  
      <tr>
	    <td rowspan="3">荣获国家级组织的文体活动前三名的</td>
      	<td>+40</td>
	</tr> 
	<tr>
	    <td>+30</td>
	</tr> 
    <tr>
	    <td>+20</td>
	</tr>  
  
</table>`
      },
      {
        "title_c5_c": '18、其他',
        "content": `<table border=1  cellpadding=0  cellspacing=0 
  　　style= "border-collapse:collapse " bordercolor= "#0 ">
	<tr>
	    <th>评价类别</th>
	    <th>分项</th>
	    <th>评价标准</th>  
      	<th>加减分</th>  
      	<th>备注</th>  
	</tr >
	<tr >
	    <td>守信信息</td>
	    <td>其他</td>
	    <td>其他应当予以奖励的，视情节加分</td>
      	<td>+10至50</td>
	</tr>
</table>`
      },
    ],
}


// ]
//定义数据出口
module.exports = {
  dataList_2: jsonData
}

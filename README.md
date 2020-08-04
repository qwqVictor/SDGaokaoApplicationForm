# 2020 山东高考志愿填充辅助

如果不规范使用出现问题导致志愿填报失败，作者不承担任何责任，后果自负。
仅在 Microsoft Edge Chromium 上和普通批 96 个志愿上进行过测试。

## 使用
需要 minifyjs 以生成最小化 JavaScript 文件，只需：
```shell
make
```

若要自动生成 JavaScript URL，还需要安装 Python 3：
```
make url
pbcopy < url # macOS 用户可如此复制到剪贴板中
```

也可以使用下方的 URL。

## 数据格式
`学校代码 专业代码`，中间用空格或制表符分隔  
实例：
```plain
A001 35
A004 06
```	
则第一志愿为北京大学-计算机类，第二志愿为北京交通大学-计算机类，依此类推。

## 方便的 URL
```url
javascript:function%20fillApplicationForm%28%29%7Bfunction%20pack%28element%29%7Breturn%20Object%28%7BsrcElement%3Aelement%2Ctarget%3Aelement%7D%29%7Dfunction%20work%28%29%7Balert%28%22Please%20check%20your%20form%20once%20finished%20to%20ensure%20its%20correctness.%5CnALERT%3A%20WE%20TAKE%20NO%20RESPONSIBILITY%20FOR%20ANY%20CONSEQUENCE%20IT%20CAUSES%21%20USE%20IT%20AT%20YOUR%20OWN%20RISK%21%22%29%3Bvar%20rawList%3Dprompt%28%22Input%20multi%20line%20data%20copied%20by%20other%20text%20editor%3A%22%29.split%28%22%5Cn%22%29%2Ccount%3DrawList.length%3Bif%28count%3E96%29return%20alert%28%22Too%20many%20applications%21%22%29%2C%211%3Bvar%20dataList%3D%5B%5D%2Ci%3D0%3Bfor%28i%3D0%3Bcount%3Ei%3Bi%2B%2B%29rawList%5Bi%5D%3DrawList%5Bi%5D.replace%28%22%09%22%2C%22%20%22%29%2CdataList%5Bi%5D%3DrawList%5Bi%5D.split%28%22%20%22%29%3Bfor%28rawList%3Dnull%2Ci%3D0%3Bcount%3Ei%3Bi%2B%2B%29%7Bvar%20schoolElement%3Ddocument.getElementById%28%22yxdh_%22%2Bi%29%2CmajorElement%3Ddocument.getElementById%28%22zydh_%22%2Bi%2B%22_0%22%29%3BschoolElement.value%3DdataList%5Bi%5D%5B0%5D%2CgetYxmc%28pack%28schoolElement%29%29%2CmajorElement.value%3DdataList%5Bi%5D%5B1%5D%2CgetZymc%28pack%28majorElement%29%29%2ConZydhBlur_pxzy%28pack%28majorElement%29%29%7D%7Dvar%20expandBtnElement%3Ddocument.getElementById%28%22zyMenu210%22%29%2CformParentElement%3Ddocument.getElementById%28%22zyEdit210%22%29%3B0%3D%3D%3DformParentElement.childElementCount%26%26expandBtnElement.click%28%29%2CsetTimeout%28work%2C500%29%7DfillApplicationForm%28%29%3B
```
注意，Chromium 系浏览器中，需要手动添加 `javascript:` 前缀。

## 关于
**Code with ❤️ by [Victor Huang](https://qwq.ren).**

Licensed under [WTFPL](LICENSE).

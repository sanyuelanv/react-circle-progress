# sanyuelanv-circle-progress  

## 安装  
```
  npm install --save sanyuelanv-circle
```
## 使用  
```javascript
  import Circle from 'sanyuelanv-circle'
```
```jsx
  <Circle
    current = {this.state.current}
    startPoint = {0}
    gradientDirection = {"horizontal"}
    gradient = {
      [
        {offset:0,color:"rgb(255,255,0)",opacity:1},
        {offset:50,color:"rgb(255,0,0)",opacity:1},
      ]
    }
  />
```
参见例子：```demo```文件夹

## 参数
所有参数使用props传递。  
|参数名字 | 值 | 说明  | 默认值  
| :--- | :----: | ----: |  
| size | int | 整个svg的宽高，因为是圆形所以只要一个值 | 200 |  
| strokeWidth | int | 进度条的宽度 | 10 |  
| radius | int | 进度条所在圆形的半径 | 95 |  
| progressColor | string | 进度条激活的颜色 | "#249fff" |  
| bottomColor | string | 进度条未激活的颜色 | "#cccccc" |  
| progressFillColor | string | 进度条所在圆形激活的颜色 | "transparent" |  
| bottomFillColor | string | 进度条所在圆形未激活的颜色 | "transparent" |  
| time | number | 进度条发生变化动画用时 | 0.5 |  
| startPoint | number | 进度条起始位置 | 0 |  
| gradientDirection | string | 进度条渐变方向[vertical,horizontal] | vertical |  
| gradient | object | 进度条渐变配置 | null |  
| current | number | 进度条当前进度（范围0-1） | 无 |  


## 启动例子
```
  npm install
  npm run demo
```

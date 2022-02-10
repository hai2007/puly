<p align='center'>
    <a href='https://hai2007.github.io/puly/' target='_blank'>
        <img src='./logo.png'>
    </a>
</p>

# puly
基于[ Image3D.js / core ](https://hai2007.gitee.io/image3d/index.html#/core)开发，底层依赖webgl实现，通过配置和简单的方法调用，可以快速实现三维数据可视化和VR效果等。

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=puly"><img src="https://img.shields.io/npm/dm/puly.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/puly"><img src="https://img.shields.io/npm/v/puly.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/puly/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/puly.svg" alt="License"></a>
  <a href="https://github.com/hai2007/puly" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/puly?style=social"></a>
</p>

## 问题或交流
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/puly/issues)！

## 如何使用？

```js
npm install --save puly
```

然后，准备好一个画布：

```html
<canvas width="500" height="500">非常抱歉，您的浏览器不支持canvas!</canvas>
```

最后，就可以直接绘制了，我们以绘制一个圆柱为例：

```js

// 创建一个三维对象
var puly = new Puly({

    // 画布
    el: document.getElementsByTagName('canvas')[0]

});

// 添加一个红色的圆柱体
var cylinder = puly.geometry({
    type: 'cylinder',
    x: 0, y: 0, z: 0,
    radius: 200, height: 200,
    color: "red"
});

// 后续还可以通过setValue修改一些值
cylinder.setValue({
    color: 'blue',
    y: -200
});

// 旋转一点点
puly.rotate(0.3, 1, 0, 0);

// 最后绘制
puly.draw();
```

可以创建的集合体有：

### 圆柱体(cylinder)

```js
{
    x,y,z,radius,height
}
```

### 棱柱体(prism)

```js
{
    x,y,z,radius,height,num
}
```

### 球体(sphere)

```js
{
    cx,cy,cz,radius
}
```

可以做的变换有：

### 移动

沿着向量(a, b, c)方向移动距离dis（其中c可以不传，默认0）：

```js
puly.move(dis, a, b, c);
```

### 缩放

以点(cx, cy, cz)为中心，分别在x、y和z方向上缩放xTimes、yTimes和zTimes倍（其中cx、cy和cz都可以不传递，默认0）：

```js
puly.scale(xTimes, yTimes, zTimes, cx, cy, cz);
```

### 旋转

围绕射线(a1, b1, c1) -> (a2, b2, c2)旋转deg度（方向由右手法则确定）：

```js
puly.rotate(deg, a1, b1, c1, a2, b2, c2);
```

a1、b1、c1、a2、b2和c2这6个值在设置的时候，不是一定需要全部设置，还有以下可选：

1.只设置了a1和b1，表示在xoy平面围绕（a1, b1）旋转。

2.设置三个点(设置不足六个点都认为只设置了三个点)，表示围绕从原点出发的射线旋转

更多细节请[点击文档](https://hai2007.github.io/puly/)了解更多~

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/puly/blob/master/LICENSE)

Copyright (c) 2021-2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。

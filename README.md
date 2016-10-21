#jquery.lens

## Description

Image partial enlargement

## Demo

[DemoPage](https://yanbaka.github.io/lens/)

## Usage

### Step 1: Required files
```html
<!-- jquery library -->
<script type="text/javascript" src="jquery-1.11.3.min.js"></script>
<!-- jquery.lens javascript file -->
<script type="text/javascript" src="jquery.lens.min.js"></script>
<!-- jquery.lens css file -->
<link rel="stylesheet" type="text/css" href="jquery.lens.min.css">
```

### Step 2: HTML markup
```html
<div class="demo_wrap"><img id="demo1_img" src="images/img_01.jpg"></div>
```

### Step 3: Excute
```javascript
$("#demo1_img").lens();
```

## Parameters
|Parameter|Type|Default|Description|
|:--|:--|:--|:--|
|lens_size|number|200|lens diameter size|

## Licence

[MIT](https://github.com/yanbaka/lens/blob/master/LICENSE)

## Author

[yanbaka](https://github.com/yanbaka)
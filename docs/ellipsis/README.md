# 单行及多行省略号

## 单行溢出

```css
  .text {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
```

## 多行文本溢出

```css
  .text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow:ellipsis;
  }
```

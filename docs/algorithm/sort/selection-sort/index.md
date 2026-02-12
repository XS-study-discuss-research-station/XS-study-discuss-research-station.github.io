---
comments: true
tags:
    - 算法
    - 排序
---

# 选择排序

/// success | 一句话解释

每轮从未排序序列中选最小值，与未排序首元素交换，将其纳入已排序序列尾部，直至完全有序。

///

## 一、算法图解

### 1.1 Manim 动画演示

![selection-sort](./selection-sort.webp)

/// details | Manim 动画演示源代码

```python { .limit .blur hl_lines="77 78 80 82 84 89" linenums="0" }
"""Manim Animation for Selection Sort."""

from __future__ import annotations as _

from math import sqrt
from os import remove
from subprocess import run
from typing import override

from manim import *

GOLDEN_RATIO: float = (sqrt(5) - 1) / 2
RADIUS: float = (1 - GOLDEN_RATIO) / 4
OPACITY: float = (sqrt(5) + 1) / 4

FONT_CHINESE: str = "LXGW WenKai"
FONT_ENGLISH: str = "Comic Mono"

MIDDLE_GRAY: ManimColor = ManimColor.from_rgb((0.5, 0.5, 0.5))


class Manim(Scene):
    """A Scene is the canvas of my animation."""

    @override
    def setup(self) -> None:
        title = Text("选择排序", font=FONT_CHINESE, weight=BOLD, color=MIDDLE_GRAY)
        title.to_edge(UP)
        mark = Text("xiaokang2022.github.io", font=FONT_ENGLISH, font_size=18, color=MIDDLE_GRAY)
        mark.to_corner(DR)
        self.add(title, mark)

    @override
    def tear_down(self) -> None:
        self.wait()

    @override
    def construct(self) -> None:
        data = [4, 6, 3, 2, 7, 1, 5]

        bars = {
            i: (
                Text(
                    f"{v}",
                    font=FONT_ENGLISH,
                    font_size=32,
                    color=MIDDLE_GRAY,
                ),
                RoundedRectangle(
                    RADIUS,
                    fill_opacity=OPACITY,
                    width=GOLDEN_RATIO,
                    height=GOLDEN_RATIO*v,
                    fill_color=BLUE,
                    stroke_color=MIDDLE_GRAY,
                ),

            ) for i, v in enumerate(data)
        }

        for i, (value, rectangle) in bars.items():
            rectangle.move_to(np.array([i-(len(data)/2)+0.5, 0, 0]))
            rectangle.align_to(np.array([0, -2.5, 0]), DOWN)
            value.next_to(rectangle, UP)

            index = Text(
                f"{i}",
                font=FONT_ENGLISH,
                font_size=32,
                color=MIDDLE_GRAY,
            ).next_to(rectangle, DOWN)

            self.add(index, rectangle, value)

        self.wait()

        for i in range(length := len(data)):
            min_index = i
            self.play(bars[i][1].animate.set_fill(RED), run_time=GOLDEN_RATIO)
            for j in range(i + 1, length):
                self.play(bars[j][1].animate.set_fill(YELLOW), run_time=GOLDEN_RATIO)
                if data[j] < data[min_index]:
                    self.play(bars[min_index][1].animate.set_fill(BLUE), run_time=GOLDEN_RATIO)
                    min_index = j
                    self.play(bars[j][1].animate.set_fill(RED), run_time=GOLDEN_RATIO)
                else:
                    self.play(bars[j][1].animate.set_fill(BLUE), run_time=GOLDEN_RATIO)

            data[i], data[min_index] = data[min_index], data[i]

            animations = [m.animate.shift(RIGHT*(min_index-i)) for m in bars[i]]
            animations += [m.animate.shift(LEFT*(min_index-i)) for m in bars[min_index]]
            self.play(*animations, run_time=GOLDEN_RATIO)
            self.play(bars[min_index][1].animate.set_fill(GREEN), run_time=GOLDEN_RATIO)

            bars[i], bars[min_index] = bars[min_index], bars[i]


if __name__ == "__main__":
    config.format = "png"
    config.transparent = True

    Manim().render()

    PATH: str = ".\\media\\images"

    run(
        "ffmpeg "
        "-framerate 60 "
        f"-i {PATH}\\Manim%04d.png "
        "-c:v libwebp_anim "
        "-q 85 "
        "-compression_level 6 "
        "-loop 0 "
        "-preset text "
        "output.webp",
        shell=True,
        check=True,
    )

    frame = 0

    while True:
        try:
            remove(f"{PATH}\\Manim{frame:04d}.png")
        except FileNotFoundError:
            break
        frame += 1
```

///

### 1.2 Mermaid 流程图示意

```mermaid
graph TD
    A(("开始")) --> B[/"初始化数组 arr<br>n = len(arr)"/]
    B --> C["i = 0"]
    C --> D{i < n-1?}
    D -- 是 --> E["min_index = i<br>j = i+1"]
    E --> F{j < n?}
    F -- 是 --> G{"arr[j] < arr[min_index]?"}
    G -- 是 --> H["min_index = j"]
    H --> I["j += 1"]
    G -- 否 --> I
    I --> F
    F -- 否 --> J["交换元素<br>arr[i], arr[min_index]"]
    J --> K["i += 1"]
    K --> D
    D -- 否 --> L(("结束"))

    style A fill:#0F07,stroke:#7777
    style L fill:#F007,stroke:#7777
```

## 二、算法性质

### 2.1 时间复杂度

时间复杂度为 $O(n^2)$。

### 2.2 空间复杂度

空间复杂度为 $O(1)$。

### 2.3 其它性质

- [X] 就地性，无额外空间开销
- [X] 稳定性，与具体实现有关
- [X] 自适应性
- [X] 基于比较

## 三、算法实现

### 3.1 多语言代码

下面提供了多种语言的版本，仅供参考。部分编程语言下方提供了可视化代码，但加载可能稍慢，请耐心等待。

/// tab | 🔵 Python

```python
def selection_sort(arr: list[int]) -> None:
    for i in range(len(arr)):
        min_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
```

{% set src_python = "https://pythontutor.com/iframe-embed.html#code=def%20selection_sort%28arr%3A%20list%5Bint%5D%29%20-%3E%20None%3A%0A%20%20%20%20for%20i%20in%20range%28len%28arr%29%29%3A%0A%20%20%20%20%20%20%20%20min_index%20%3D%20i%0A%20%20%20%20%20%20%20%20for%20j%20in%20range%28i%20%2B%201,%20len%28arr%29%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20arr%5Bj%5D%20%3C%20arr%5Bmin_index%5D%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20min_index%20%3D%20j%0A%20%20%20%20%20%20%20%20arr%5Bi%5D,%20arr%5Bmin_index%5D%20%3D%20arr%5Bmin_index%5D,%20arr%5Bi%5D%0A%0A%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20arr%3A%20list%5Bint%5D%20%3D%20%5B7,%200,%206,%201,%205,%202,%204,%203%5D%0A%20%20%20%20selection_sort%28arr%29%0A%20%20%20%20print%28arr%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_python }}){target="_black"}"

    <iframe src="{{ src_python }}"></iframe>

///

/// tab | 🔴 C++

```cpp
void selectionSort(std::vector<int> &arr) {
    for (int i = 0, minIndex; i < arr.size(); i++) {
        minIndex = i;
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        std::swap(arr[i], arr[minIndex]);
    }
}
```

{% set src_cpp = "https://pythontutor.com/iframe-embed.html#code=%23include%20%3Ciostream%3E%0A%23include%20%3Cutility%3E%0A%23include%20%3Cvector%3E%0A%0Avoid%20selectionSort%28std%3A%3Avector%3Cint%3E%20%26arr%29%20%7B%0A%20%20%20%20for%20%28int%20i%20%3D%200,%20minIndex%3B%20i%20%3C%20arr.size%28%29%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20minIndex%20%3D%20i%3B%0A%20%20%20%20%20%20%20%20for%20%28int%20j%20%3D%20i%20%2B%201%3B%20j%20%3C%20arr.size%28%29%3B%20j%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28arr%5Bj%5D%20%3C%20arr%5BminIndex%5D%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20minIndex%20%3D%20j%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20std%3A%3Aswap%28arr%5Bi%5D,%20arr%5BminIndex%5D%29%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aint%20main%28%29%20%7B%0A%20%20%20%20std%3A%3Avector%3Cint%3E%20arr%7B7,%200,%206,%201,%205,%202,%204,%203%7D%3B%0A%20%20%20%20selectionSort%28arr%29%3B%0A%20%20%20%20for%20%28int%20%26i%20%3A%20arr%29%20%7B%0A%20%20%20%20%20%20%20%20std%3A%3Acout%20%3C%3C%20i%20%3C%3C%20'%20'%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%200%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_cpp }}){target="_black"}"

    <iframe src="{{ src_cpp }}"></iframe>

///

/// tab | 🟠 Java

```java
void selectionSort(ArrayList<Integer> arr) {
    for (int i = 0, minIndex; i < arr.size(); i++) {
        minIndex = i;
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr.get(j) < arr.get(minIndex)) {
                minIndex = j;
            }
        }
        Collections.swap(arr, i, minIndex);
    }
}
```

{% set src_java = "https://pythontutor.com/iframe-embed.html#code=import%20java.util.ArrayList%3B%0Aimport%20java.util.Arrays%3B%0Aimport%20java.util.Collections%3B%0A%0Apublic%20class%20Main%20%7B%0A%0A%20%20%20%20void%20selectionSort%28ArrayList%3CInteger%3E%20arr%29%20%7B%0A%20%20%20%20%20%20%20%20for%20%28int%20i%20%3D%200,%20minIndex%3B%20i%20%3C%20arr.size%28%29%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20minIndex%20%3D%20i%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20%28int%20j%20%3D%20i%20%2B%201%3B%20j%20%3C%20arr.size%28%29%3B%20j%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28arr.get%28j%29%20%3C%20arr.get%28minIndex%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20minIndex%20%3D%20j%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20Collections.swap%28arr,%20i,%20minIndex%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20ArrayList%3CInteger%3E%20arr%20%3D%20new%20ArrayList%3C%3E%28Arrays.asList%284,%206,%203,%202,%207,%201,%205%29%29%3B%0A%20%20%20%20%20%20%20%20new%20Main%28%29.selectionSort%28arr%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28arr%29%3B%0A%20%20%20%20%7D%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_java }}){target="_black"}"

    <iframe src="{{ src_java }}"></iframe>

///

/// tab | 🟡 JavaScript

```javascript
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}
```

{% set src_javascript = "https://pythontutor.com/iframe-embed.html#code=function%20selectionSort%28arr%29%20%7B%0A%20%20%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20let%20minIndex%20%3D%20i%3B%0A%20%20%20%20%20%20%20%20for%20%28let%20j%20%3D%20i%20%2B%201%3B%20j%20%3C%20arr.length%3B%20j%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28arr%5Bj%5D%20%3C%20arr%5BminIndex%5D%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20minIndex%20%3D%20j%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5Barr%5Bi%5D,%20arr%5BminIndex%5D%5D%20%3D%20%5Barr%5BminIndex%5D,%20arr%5Bi%5D%5D%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aconst%20arr%20%3D%20%5B7,%200,%206,%201,%205,%202,%204,%203%5D%3B%0AselectionSort%28arr%29%3B%0Aconsole.log%28arr%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_javascript }}){target="_black"}"

    <iframe src="{{ src_javascript }}"></iframe>

///

/// tab | 🟣 C

```c
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);//(1)!
    }
}
```

1. 函数 `swap` 的定义如下：
```c
void swap(int arr[], int i, int j) {
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
```

{% set src_c = "https://pythontutor.com/iframe-embed.html#code=%23include%20%3Cstdio.h%3E%0A%0Avoid%20swap%28int%20arr%5B%5D,%20int%20i,%20int%20j%29%20%7B%0A%20%20%20%20int%20tmp%20%3D%20arr%5Bi%5D%3B%0A%20%20%20%20arr%5Bi%5D%20%3D%20arr%5Bj%5D%3B%0A%20%20%20%20arr%5Bj%5D%20%3D%20tmp%3B%0A%7D%0A%0Avoid%20selectionSort%28int%20arr%5B%5D,%20int%20n%29%20%7B%0A%20%20%20%20for%20%28int%20i%20%3D%200%3B%20i%20%3C%20n%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20int%20minIndex%20%3D%20i%3B%0A%20%20%20%20%20%20%20%20for%20%28int%20j%20%3D%20i%20%2B%201%3B%20j%20%3C%20n%3B%20j%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28arr%5Bj%5D%20%3C%20arr%5BminIndex%5D%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20minIndex%20%3D%20j%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20swap%28arr,%20i,%20minIndex%29%3B%0A%20%20%20%20%7D%0A%7D%0A%0Aint%20main%28%29%20%7B%0A%20%20%20%20int%20arr%5B%5D%20%3D%20%7B7,%200,%206,%201,%205,%202,%204,%203%7D%3B%0A%20%20%20%20int%20n%20%3D%20sizeof%28arr%29%20/%20sizeof%28int%29%3B%0A%20%20%20%20selectionSort%28arr,%20n%29%3B%0A%20%20%20%20for%20%28int%20i%20%3D%200%3B%20i%20%3C%20n%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20printf%28%22%25d%20%22,%20arr%5Bi%5D%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%200%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=c_gcc9.3.0&rawInputLstJSON=%5B%5D&textReferences=false" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_c }}){target="_black"}"

    <iframe src="{{ src_c }}"></iframe>

///

/// tab | 🟢 C#

```csharp
void SelectionSort(List<int> arr) {
    for (int i = 0, minIndex; i < arr.Count; i++) {
        minIndex = i;
        for (int j = i + 1; j < arr.Count; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        (arr[i], arr[minIndex]) = (arr[minIndex], arr[i]);
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 C# 的可视化！"

///

/// tab | 🔵 Go

```go
func selectionSort(arr []int) {
    for i := 0; i < len(arr); i++ {
        minIndex := i
        for j := i + 1; j < len(arr); j++ {
            if arr[j] < arr[minIndex] {
                minIndex = j
            }
        }
        arr[i], arr[minIndex] = arr[minIndex], arr[i]
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Go 的可视化！"

///

/// tab | 🟤 Rust

```rust
fn selection_sort(arr: &mut Vec<i32>) {
    for i in 0..arr.len() {
        let mut min_index = i;
        for j in i + 1..arr.len() {
            if arr[j] < arr[min_index] {
                min_index = j;
            }
        }
        arr.swap(i, min_index);//(1)!
    }
}
```

1. 你也可以使用解构赋值 `(arr[i], arr[min_index]) = (arr[min_index], arr[i]);` 来交换两个变量，但这种方式在性能和安全上不如直接调用方法 `swap`。

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Rust 的可视化！"

///

### 3.2 自我测试

下面是一个 Python 交互式环境，你可以在其中编写自己的代码进行一些测试。初次启动需要较长时间，请耐心等待！

/// tip | 交互式编程 [`🚀启动环境`](javascript:void(activate())) [<kbd style="float:right">⚡运行</kbd>](javascript:void(run()))

<div class="thebe-status"></div>

<pre data-executable>
%reset -f

def selection_sort(arr: list[int]) -> None:
    pass

if __name__ == "__main__":
    arr: list[int] = [7, 0, 6, 1, 5, 2, 4, 3]
    selection_sort(arr)
    print(arr)
</pre>

///

[^1]: [11.2   选择排序 - Hello 算法](https://www.hello-algo.com/chapter_sorting/selection_sort/){target=_blank}
[^2]: [选择排序 - OI Wiki](https://oiwiki.org/basic/selection-sort/){target=_blank}
[^3]: [算法讲解004【入门】选择、冒泡、插入排序_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV12P41147to/){target=_blank}

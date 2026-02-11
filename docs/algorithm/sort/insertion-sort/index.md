---
comments: true
tags:
    - 算法
    - 排序
    - 二分
---

# 插入排序

/// success | 一句话解释

逐个取出未排序元素，在已排序序列中找到正确位置插入，直至完全有序。

///

## 一、算法图解

### 1.1 Manim 动画演示

![insertion-sort](./insertion-sort.webp)

/// details | Manim 动画演示源代码

```python { .limit linenums="0" }
```

///

### 1.2 Mermaid 流程图示意

```mermaid
graph TD
```

## 二、算法性质

### 2.1 时间复杂度

时间复杂度为 $O(n^2)$。

### 2.2 空间复杂度

空间复杂度为 $O(1)$。

### 2.3 其它性质

稳定的，不会改变相邻且大小相同值之间的相对位置。

## 三、算法实现

### 3.1 多语言代码

下面提供了多种语言的版本，仅供参考。部分编程语言下方提供了可视化代码，但加载可能稍慢，请耐心等待。

/// tab | 🔵 Python

```python
def insertion_sort(arr: list[int]) -> None:
    for i in range(len(arr)):
        for j in range(i, 0, -1):
            if arr[j] < arr[j - 1]:
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
            else:
                break
```

{% assign src_python = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_python }}){target="_black"}"

    <iframe src="{{ src_python }}"></iframe>

///

/// tab | 🔴 C++

```cpp
void insertionSort(std::vector<int> &arr) {
    for (int i = 0; i < arr.size(); i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                std::swap(arr[j], arr[j - 1]);
            } else {
                break;
            }
        }
    }
}
```

{% assign src_cpp = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_cpp }}){target="_black"}"

    <iframe src="{{ src_cpp }}"></iframe>

///

/// tab | 🟠 Java

```java
void insertionSort(ArrayList<Integer> arr) {
    for (int i = 0; i < arr.size(); i++) {
        for (int j = i; j > 0; j--) {
            if (arr.get(j) < arr.get(j - 1)) {
                Collections.swap(arr, j, j - 1);
            } else {
                break;
            }
        }
    }
}
```

{% assign src_java = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_java }}){target="_black"}"

    <iframe src="{{ src_java }}"></iframe>

///

/// tab | 🟡 JavaScript

```javascript
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break;
            }
        }
    }
}
```

{% assign src_javascript = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_javascript }}){target="_black"}"

    <iframe src="{{ src_javascript }}"></iframe>

///

/// tab | 🟣 C

```c
void insertionSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);//(1)!
            } else {
                break;
            }
        }
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

{% assign src_c = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_c }}){target="_black"}"

    <iframe src="{{ src_c }}"></iframe>

///

/// tab | 🟢 C#

```csharp
void InsertionSort(List<int> arr) {
    for (int i = 0; i < arr.Count; i++) {
        for (int j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                (arr[j], arr[j - 1]) = (arr[j - 1], arr[j]);
            } else {
                break;
            }
        }
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 C# 的可视化！"

///

/// tab | 🔵 Go

```go
func insertionSort(arr []int) {
    for i := 0; i < len(arr); i++ {
        for j := i; j > 0; j-- {
            if arr[j] < arr[j-1] {
                arr[j], arr[j-1] = arr[j-1], arr[j]
            } else {
                break
            }
        }
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Go 的可视化！"

///

/// tab | 🟤 Rust

```rust
fn insertion_sort(arr: &mut Vec<i32>) {
    for i in 0..arr.len() {
        for j in (1..=i).rev() {
            if arr[j] < arr[j - 1] {
                arr.swap(j, j - 1);
            } else {
                break;
            }
        }
    }
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Rust 的可视化！"

///

### 3.2 改进代码

选择排序还可以通过二分的方式进行改进，下面是改进后的代码：

/// tab | 🔵 Python

```python
def binary_insertion_sort(arr: list[int]) -> None:
    for i, v in enumerate(arr):
        index = bisect.bisect_left(arr, v, 0, i)
        for j in range(i, index, -1):
            arr[j] = arr[j - 1]
        arr[index] = v
```

///

/// tab | 🔴 C++

```cpp
void binaryInsertionSort(std::vector<int> &arr) {
    for (int i = 1; i < arr.size(); ++i) {
        int key = arr[i];
        auto index = std::upper_bound(arr.begin(), arr.begin() + i, key) - arr.begin();
        for (int j = i; j > index; j--) {
            arr[j] = arr[j - 1];
        }
        arr[index] = key;
    }
}
```

///

/// tab | 🟠 Java

```java
void binaryInsertionSort(ArrayList<Integer> arr) {
    for (int i = 0; i < arr.size(); i++) {
        int key = arr.get(i);
        int index = Collections.binarySearch(arr.subList(0, i), key);
        if (index < 0) {
            index = -index - 1;
        }
        for (int j = i; j > index; j--) {
            arr.set(j, arr.get(j - 1));
        }
        arr.set(index, key);
    }
}
```

///

/// tab | 🟡 JavaScript

```javascript
function binaryInsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let low = 0, high = i - 1;
        while (low <= high) {
            let mid = (low + high) >> 1;
            if (arr[mid] <= key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        for (let j = i; j > low; j--) {
            arr[j] = arr[j - 1];
        }
        arr[low] = key;
    }
}
```

///

/// tab | 🟣 C

```c
void binaryInsertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int low = 0, high = i - 1;
        while (low <= high) {
            int mid = (low + high) >> 1;
            if (arr[mid] <= key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        for (int j = i; j > low; j--) {
            arr[j] = arr[j - 1];
        }
        arr[low] = key;
    }
}
```

///

/// tab | 🟢 C#

```csharp
void BinaryInsertionSort(List<int> arr) {
    for (int i = 1; i < arr.Count; i++) {
        int key = arr[i];
        int low = 0, high = i - 1;
        while (low <= high) {
            int mid = (low + high) >> 1;
            if (arr[mid] <= key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        for (int j = i; j > low; j--) {
            arr[j] = arr[j - 1];
        }
        arr[low] = key;
    }
}
```

///

/// tab | 🔵 Go

```go
func binaryInsertionSort(arr []int) {
    for i := 1; i < len(arr); i++ {
        key := arr[i]
        low, high := 0, i-1
        for low <= high {
            mid := (low + high) >> 1
            if arr[mid] <= key {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        for j := i; j > low; j-- {
            arr[j] = arr[j-1]
        }
        arr[low] = key
    }
}
```

///

/// tab | 🟤 Rust

```rust
fn binary_insertion_sort(arr: &mut Vec<i32>) {
    for i in 1..arr.len() {
        let key = arr[i];
        let (mut low, mut high) = (0, i as i32 - 1);
        while low <= high {
            let mid = (low + high) >> 1;
            if arr[mid as usize] <= key {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        let low = low as usize;
        for j in (low + 1..=i).rev() {
            arr[j] = arr[j - 1];
        }
        arr[low] = key;
    }
}
```

///

### 3.3 自我测试

下面是一个 Python 交互式环境，你可以在其中编写自己的代码进行一些测试。初次启动需要较长时间，请耐心等待！

/// tip | 交互式编程 [`🚀启动环境`](javascript:void(activate())) [<kbd style="float:right">⚡运行</kbd>](javascript:void(run()))

<div class="thebe-status"></div>

<pre data-executable>
%reset -f

def insertion_sort(arr: list[int]) -> None:
    pass

if __name__ == "__main__":
    arr: list[int] = [7, 0, 6, 1, 5, 2, 4, 3]
    insertion_sort(arr)
    print(arr)
</pre>

///

[^1]: [11.4   插入排序 - Hello 算法](https://www.hello-algo.com/chapter_sorting/insertion_sort/){target=_blank}
[^2]: [插入排序 - OI Wiki](https://oiwiki.org/basic/insertion-sort/){target=_blank}
[^3]: [算法讲解004【入门】选择、冒泡、插入排序_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV12P41147to/){target=_blank}

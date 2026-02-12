---
comments: true
tags:
    - 算法
    - 搜索
    - 二分
---

# 二分搜索

/// success | 一句话解释

每次比较中间元素，若未命中则排除一半无效区间，逐步缩小搜索范围。

///

## 一、算法图解

### 1.1 Manim 动画演示

![binary-search](./binary-search.webp)

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

时间复杂度为 $O(\log_{2} n)$。

### 2.2 空间复杂度

空间复杂度为 $O(1)$。

### 2.3 其它性质

## 三、算法实现

### 3.1 多语言代码

下面提供了多种语言的版本，仅供参考。部分编程语言下方提供了可视化代码，但加载可能稍慢，请耐心等待。

!!! warning "适用条件：序列升序且无重复元素"

/// tab | 🔵 Python

```python
def binary_search(arr: list[int], target: int) -> int:
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) >> 1
        if arr[mid] < target:
            left = mid + 1
        elif arr[mid] > target:
            right = mid - 1
        else:
            return mid
    return -1
```

{% set src_python = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_python }}){target="_black"}"

    <iframe src="{{ src_python }}"></iframe>

///

/// tab | 🔴 C++

```cpp
int binarySearch(const std::vector<int> &arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

{% set src_cpp = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_cpp }}){target="_black"}"

    <iframe src="{{ src_cpp }}"></iframe>

///

/// tab | 🟠 Java

```java
int binarySearch(ArrayList<Integer> arr, Integer target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr.get(mid) < target) {
            left = mid + 1;
        } else if (arr.get(mid) > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

{% set src_java = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_java }}){target="_black"}"

    <iframe src="{{ src_java }}"></iframe>

///

/// tab | 🟡 JavaScript

```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;;
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

{% set src_javascript = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_javascript }}){target="_black"}"

    <iframe src="{{ src_javascript }}"></iframe>

///

/// tab | 🟣 C

```c
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

{% set src_c = "" %}

??? example "可视化代码 [`🔍全屏查看`]({{ src_c }}){target="_black"}"

    <iframe src="{{ src_c }}"></iframe>

///

/// tab | 🟢 C#

```csharp
int BinarySearch(List<int> arr, int target) {
    int left = 0, right = arr.Count - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 C# 的可视化！"

///

/// tab | 🔵 Go

```go
func binarySearch(arr []int, target int) int {
    left, right := 0, len(arr)-1
    for left <= right {
        mid := (left + right) >> 1
        if arr[mid] < target {
            left = mid + 1
        } else if arr[mid] > target {
            right = mid - 1
        } else {
            return mid
        }
    }
    return -1
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Go 的可视化！"

///

/// tab | 🟤 Rust

```rust
fn binary_search(arr: &Vec<i32>, target: i32) -> i32 {
    let (mut left, mut right) = (0, arr.len() as i32 - 1);
    while left <= right {
        let mid = (left + right) >> 1;
        if arr[mid as usize] < target {
            left = mid + 1;
        } else if arr[mid as usize] > target {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

!!! failure "非常抱歉！[pythontutor](https://pythontutor.com/){target=_blank} 暂时还不支持 Rust 的可视化！"

///

### 3.2 自我测试

下面是一个 Python 交互式环境，你可以在其中编写自己的代码进行一些测试。初次启动需要较长时间，请耐心等待！

/// tip | 交互式编程 [`🚀启动环境`](javascript:void(activate())) [<kbd style="float:right">⚡运行</kbd>](javascript:void(run()))

<div class="thebe-status"></div>

<pre data-executable>
%reset -f

def binary_search(arr: list[int], target: int) -> int:
    pass

if __name__ == "__main__":
    arr: list[int] = [0, 1, 2, 3, 4, 5, 6, 7]
    print(binary_search(arr, 4))
</pre>

///

## 四、算法扩展

### 4.1 搜索左右边界

上面给出的代码只能获取不包含重复元素的顺序序列 `arr` 中目标值 `target` 的索引，并不能处理包含重复元素的情况。但如果变换思路，获取顺序序列中满足某个条件的左边界或者右边界，就很容易根据问题得到想要的结果。

- 左边界：满足 `>= target` 的最左元素
- 右边界：满足 `<= target` 的最右元素

对于包含重复元素的升序序列，左右边界可以准确地描述我们需要的内容。

!!! warning "适用条件：序列升序"

/// tab | 🔵 Python

```python
def binary_search_left(arr: list[int], target: int) -> int:
    left, right, index = 0, len(arr) - 1, -1
    while left <= right:
        mid = (left + right) >> 1
        if arr[mid] >= target:
            index = mid
            right = mid - 1
        else:
            left = mid + 1
    return index


def binary_search_right(arr: list[int], target: int) -> int:
    left, right, index = 0, len(arr) - 1, -1
    while left <= right:
        mid = (left + right) >> 1
        if arr[mid] <= target:
            index = mid
            left = mid + 1
        else:
            right = mid - 1
    return index
```

///

/// tab | 🔴 C++

```cpp
int binarySearchLeft(const std::vector<int> &arr, int target) {
    int left = 0, right = arr.size() - 1, index = -1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] >= target) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

int binarySearchRight(const std::vector<int> &arr, int target) {
    int left = 0, right = arr.size() - 1, index = -1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] <= target) {
            index = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return index;
}
```

///

/// tab | 🟠 Java

```java
int binarySearchLeft(ArrayList<Integer> arr, Integer target) {
    int left = 0, right = arr.size() - 1, index = -1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr.get(mid) >= target) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

int binarySearchRight(ArrayList<Integer> arr, Integer target) {
    int left = 0, right = arr.size() - 1, index = -1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr.get(mid) <= target) {
            index = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return index;
}
```

///

/// tab | 🟡 JavaScript

```javascript
function binarySearchLeft(arr, target) {
    let left = 0, right = arr.length - 1, index = -1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (arr[mid] >= target) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

function binarySearchRight(arr, target) {
    let left = 0, right = arr.length - 1, index = -1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (arr[mid] <= target) {
            index = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return index;
}
```

///

/// tab | 🟣 C

```c
int binarySearchLeft(int arr[], int n, int target) {
    int left = 0, right = n - 1, index = -1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] >= target) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

int binarySearchRight(int arr[], int n, int target) {
    int left = 0, right = n - 1, index = -1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] <= target) {
            index = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return index;
}
```

///

/// tab | 🟢 C#

```csharp
int BinarySearchLeft(List<int> arr, int target) {
    int left = 0, right = arr.Count - 1, index = -1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] >= target) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

int BinarySearchRight(List<int> arr, int target) {
    int left = 0, right = arr.Count - 1, index = -1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid] <= target) {
            index = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return index;
}
```

///

/// tab | 🔵 Go

```go
func binarySearchLeft(arr []int, target int) int {
    left, right, index := 0, len(arr)-1, -1
    for left <= right {
        mid := (left + right) >> 1
        if arr[mid] >= target {
            index = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return index
}

func binarySearchRight(arr []int, target int) int {
    left, right, index := 0, len(arr)-1, -1
    for left <= right {
        mid := (left + right) >> 1
        if arr[mid] <= target {
            index = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return index
}
```

///

/// tab | 🟤 Rust

```rust
fn binary_search_left(arr: &Vec<i32>, target: i32) -> i32 {
    let (mut left, mut right, mut index) = (0, arr.len() as i32 - 1, -1);
    while left <= right {
        let mid = (left + right) >> 1;
        if arr[mid as usize] >= target {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

fn binary_search_right(arr: &Vec<i32>, target: i32) -> i32 {
    let (mut left, mut right, mut index) = (0, arr.len() as i32 - 1, -1);
    while left <= right {
        let mid = (left + right) >> 1;
        if arr[mid as usize] <= target {
            index = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return index;
}
```

///

### 4.2 搜索峰谷值

二分搜索除了可以搜索左右边界之外，还可以搜索序列中的峰值和谷值。

- 峰值：严格大于其左右相邻元素的值
- 谷值：严格小于其左右相邻元素的值

对于序列的边界值，一般只考虑其存在元素的那一边，但有时也认为它们既不是峰值，也不是谷值，依具体进行分析。此处仅按照前者，考虑其存在元素的一边。

!!! warning "适用条件：序列中相邻元素的值不相等"

/// tab | 🔵 Python

```python
def binary_search_peak(arr: list[int]) -> int:
    left, right = 1, len(arr) - 2
    index = 0 if arr[0] > arr[-1] else len(arr) - 1
    while left <= right:
        mid = (left + right) >> 1
        if arr[mid - 1] > arr[mid]:
            right = mid - 1
        elif arr[mid + 1] > arr[mid]:
            left = mid + 1
        else:
            index = mid
            break
    return index


def binary_search_valley(arr: list[int]) -> int:
    left, right = 1, len(arr) - 2
    index = 0 if arr[0] < arr[-1] else len(arr) - 1
    while left <= right:
        mid = (left + right) >> 1
        if arr[mid - 1] < arr[mid]:
            right = mid - 1
        elif arr[mid + 1] < arr[mid]:
            left = mid + 1
        else:
            index = mid
            break
    return index
```

///

/// tab | 🔴 C++

```cpp
int binarySearchPeak(const std::vector<int> &arr) {
    int left = 1, right = arr.size() - 2;
    int index = arr.front() > arr.back() ? 0 : arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid - 1] > arr[mid]) {
            right = mid - 1;
        } else if (arr[mid + 1] > arr[mid]) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}

int binarySearchValley(const std::vector<int> &arr) {
    int left = 1, right = arr.size() - 2;
    int index = arr.front() < arr.back() ? 0 : arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid - 1] < arr[mid]) {
            right = mid - 1;
        } else if (arr[mid + 1] < arr[mid]) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}
```

///

/// tab | 🟠 Java

```java
int binarySearchPeak(ArrayList<Integer> arr) {
    int left = 1, right = arr.size() - 2;
    int index = arr.get(0) > arr.get(arr.size() - 1) ? 0 : arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr.get(mid - 1) > arr.get(mid)) {
            right = mid - 1;
        } else if (arr.get(mid + 1) > arr.get(mid)) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}

int binarySearchValley(ArrayList<Integer> arr) {
    int left = 1, right = arr.size() - 2;
    int index = arr.get(0) < arr.get(arr.size() - 1) ? 0 : arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr.get(mid - 1) < arr.get(mid)) {
            right = mid - 1;
        } else if (arr.get(mid + 1) < arr.get(mid)) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}
```

///

/// tab | 🟡 JavaScript

```javascript
function binarySearchPeak(arr) {
    let left = 1, right = arr.length - 2;
    let index = arr[0] > arr[arr.length - 1] ? 0 : arr.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (arr[mid - 1] > arr[mid]) {
            right = mid - 1;
        } else if (arr[mid + 1] > arr[mid]) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}

function binarySearchValley(arr) {
    let left = 1, right = arr.length - 2;
    let index = arr[0] < arr[arr.length - 1] ? 0 : arr.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (arr[mid - 1] < arr[mid]) {
            right = mid - 1;
        } else if (arr[mid + 1] < arr[mid]) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}
```

///

/// tab | 🟣 C

```c
int binarySearchPeak(int arr[], int n) {
    int left = 1, right = n - 2;
    int index = arr[0] > arr[n - 1] ? 0 : n - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid - 1] > arr[mid]) {
            right = mid - 1;
        } else if (arr[mid + 1] > arr[mid]) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}

int binarySearchValley(int arr[], int n) {
    int left = 1, right = n - 2;
    int index = arr[0] < arr[n - 1] ? 0 : n - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid - 1] < arr[mid]) {
            right = mid - 1;
        } else if (arr[mid + 1] < arr[mid]) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}
```

///

/// tab | 🟢 C#

```csharp
int BinarySearchPeak(List<int> arr) {
    int left = 1, right = arr.Count - 2;
    int index = arr.First() > arr.Last() ? 0 : arr.Count - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid - 1] > arr[mid]) {
            right = mid - 1;
        } else if (arr[mid + 1] > arr[mid]) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}

int BinarySearchValley(List<int> arr) {
    int left = 1, right = arr.Count - 2;
    int index = arr.First() < arr.Last() ? 0 : arr.Count - 1;
    while (left <= right) {
        int mid = (left + right) >> 1;
        if (arr[mid - 1] < arr[mid]) {
            right = mid - 1;
        } else if (arr[mid + 1] < arr[mid]) {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}
```

///

/// tab | 🔵 Go

```go
func BinarySearchPeak(arr []int) int {
    left, right := 1, len(arr)-2
    index := len(arr) - 1
    if arr[0] > arr[len(arr)-1] {
        index = 0
    }
    for left <= right {
        mid := (left + right) >> 1
        if arr[mid-1] > arr[mid] {
            right = mid - 1
        } else if arr[mid+1] > arr[mid] {
            left = mid + 1
        } else {
            index = mid
            break
        }
    }
    return index
}

func BinarySearchValley(arr []int) int {
    left, right := 1, len(arr)-2
    index := len(arr) - 1
    if arr[0] < arr[len(arr)-1] {
        index = 0
    }
    for left <= right {
        mid := (left + right) >> 1
        if arr[mid-1] < arr[mid] {
            right = mid - 1
        } else if arr[mid+1] < arr[mid] {
            left = mid + 1
        } else {
            index = mid
            break
        }
    }
    return index
}
```

///

/// tab | 🟤 Rust

```rust
fn binary_search_peak(arr: &Vec<i32>) -> i32 {
    let (mut left, mut right) = (1, arr.len() as i32 - 2);
    let mut index = if arr.first() > arr.last() { 0 } else { arr.len() as i32 - 1 };
    while left <= right {
        let mid = (left + right) >> 1;
        if arr[mid as usize - 1] > arr[mid as usize] {
            right = mid - 1;
        } else if arr[mid as usize + 1] > arr[mid as usize] {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}

fn binary_search_valley(arr: &Vec<i32>) -> i32 {
    let (mut left, mut right) = (1, arr.len() as i32 - 2);
    let mut index = if arr.first() < arr.last() { 0 } else { arr.len() as i32 - 1 };
    while left <= right {
        let mid = (left + right) >> 1;
        if arr[mid as usize - 1] < arr[mid as usize] {
            right = mid - 1;
        } else if arr[mid as usize + 1] < arr[mid as usize] {
            left = mid + 1;
        } else {
            index = mid;
            break;
        }
    }
    return index;
}
```

///

[^1]: [10.1   二分查找 - Hello 算法](https://www.hello-algo.com/chapter_searching/binary_search/){target=_blank}
[^2]: [二分 - OI Wiki](https://oiwiki.org/basic/binary/){target=_blank}
[^3]: [算法讲解006【入门】二分搜索_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1bX4y177uT/){target=_blank}

[^4]: [<small>:simple-leetcode:</small> 162. 寻找峰值](https://leetcode.cn/problems/find-peak-element/){target=_blank}
[^5]: [<small>:simple-leetcode:</small> 1901. 寻找峰值 II](https://leetcode.cn/problems/find-a-peak-element-ii/){target=_blank}
[^6]: [<small>:simple-leetcode:</small> 2951. 找出峰值](https://leetcode.cn/problems/find-the-peaks/){target=_blank}

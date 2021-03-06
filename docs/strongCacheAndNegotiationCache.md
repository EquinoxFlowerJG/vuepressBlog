
# 浏览器的强缓存和协商缓存
## 浏览器缓存分为强缓存和协商缓存两种。
### 一、强缓存：页面在发送某个请求时，浏览器会直接从本地缓存中获取对应资源，然后响应这个请求。强缓存是到不了后端的。
1. 它有两个重要的参数：
- （1）Expires：过期时间。这个时间之前的请求都会直接从本地缓存获取。
- （2）cache-control: max-age=[数字]：max-age表示缓存的有效时间，单位是秒；
2. 优点：
- （1）由于请求并没有发送给服务器，所以大大减轻了服务器的压力。
- （2）同样是因为上述原因，强缓存的响应速度会比较快（对比向后端请求）；
3. 缺点：
- （1）由于请求被浏览器拦截了下来，所以强缓存的数据会存在更新不及时的问题。
4. 如何避免使用强缓存：
- 解决办法很简单，每次请求时都在请求的链接后面添加一个问号传参，参数是一串随机的字符。浏览器会认为是不同的地址，所以不会走强缓存。

### 二、协商缓存：如果没有命中（不符合）强缓存，才会有可能走协商缓存。请求发送到了后端，但是请求的数据没有变化，后端告诉前端这个请求可以使用缓存。状态码是304。
1. 协商缓存也有两个字段：
   -（1）last-modified/if-modified-since：last-modified是后端生成的一个时间，其实就是当前请求对应的内容最后一次更新的时间；下次请求请求头中会带上if-modified-since这个属性，值是last-modified对应的值。后端进行比对，值相同则返回304浏览器走缓存，值不同则返回200，后端给前端返回响应的数据。
   -（2）etag/if-none-match：是后端生产的hash字符串，一次请求之后，后端会给我们返回这个字符，下一次请求的时候，浏览器会在请求头中添加一个 if-none-match 的属性，这个属性对应的值就是后端给的etag对应的值。后端发现 if-none-match 的属性值与后端的etag字段的值相同时，表示数据并没有发生变化，后端返回304。
2. 1
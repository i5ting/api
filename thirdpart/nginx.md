# nginx安装文档

## 下载
http://nginx.org/en/download.html

 	wget http://nginx.org/download/nginx-1.7.6.tar.gz
	
## 解压

	tar -zxvf nginx-1.7.6.tar.gz

## 进入解压目录  

	cd nginx-1.7.6 
	chmod a+rwx *

## 编译

	./configure --without-http_rewrite_module

## 安装

	make && make install

## 制作软连接

	 sudo ln -s  /usr/local/nginx/sbin/nginx /bin/niginx

## 启动

	sudo /usr/local/nginx/sbin/nginx

浏览器访问 localhost
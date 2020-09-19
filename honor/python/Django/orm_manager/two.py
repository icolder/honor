from redis import Redis

cache = Redis(host='192.168.0.106', port=6379, password='vagrant')
for x in range(3):
    cache.publish('email', 'xxx@qq.com')

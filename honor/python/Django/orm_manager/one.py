from redis import Redis

# one 和 two 两个文件是测试的用Python操作redis
cache = Redis(host='192.168.0.106', port=6379, password='vagrant')
# cache.set('username', 'dao', ex=30)
# cache.sadd('team', '')
# pip = cache.pipeline()
# pip.set('user', 'vagrant')
# pip.set('password', '111111')
# pip.execute()

# redis中的发布与订阅功能
ps = cache.pubsub()
ps.subscribe('email')
while True:
    for i in ps.listen():
        if i['type'] == 'message':
            print(i['data'])

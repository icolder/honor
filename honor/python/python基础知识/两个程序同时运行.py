
# 利用生成器的方式实现两个程序同时运行
#（两个程序交叉运行，在系统运行足够快的情况下，交叉运行的时候人是感觉不出来的，感觉就像是同时运行一样）

def neteasy_music(duration):
    time = 0
    while time <= duration:
        print("歌曲听到第%d分钟了"%time)
        time += 1
        yield None
#     raise StopIteration() #在学习的时候有这行代码，但是自己操作的时候带上这行代码会报错，去掉则不会
        
def youku_movie(duration):
    time = 0
    while time <= duration:
        print("电影看到第%d分钟了"%time)
        time += 1
        yield None
#     raise StopIteration() #在学习的时候有这行代码，但是自己操作的时候带上这行代码会报错，去掉则不会
        
def main():
    music_iter = neteasy_music(10)
    movie_iter = youku_movie(20)
    music_stop = False
    movie_stop = False
    while True:
        try:
            next(music_iter)
        except StopIteration:
            print("音乐已经听完了！")
            music_stop = True
            
        try:
            next(movie_iter)
        except StopIteration:
            print("电影已经看完了！")
            movie_stop = True
        if music_stop and movie_stop:
            break
        
    
if __name__ == "__main__":
    main()
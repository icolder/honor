# 用生成器实现两个函数同时执行（交替执行）

def music(duration):
    time = 0
    while time <= duration:
        print("音乐听到第%d分钟了！" % time)
        time += 1
        yield None


def movie(duration):
    time = 0
    while time <= duration:
        print("电影看到第%d分钟了" % time)
        time += 1
        yield None


def main():
    music_iter = music(10)
    movie_iter = movie(20)
    music_stop = False
    movie_stop = False
    while True:
        try:
            next(music_iter)
        except StopIteration:
            if music_stop == False:  # 只执行一句“音乐播放完了”，而不跟随电影播放进度每次都在执行一遍
                print("音乐播放完了！")
                music_stop = True

        try:
            next(movie_iter)
        except StopIteration:
            if movie_stop == False:
                print("电影看完了！")
                movie_stop = True

        if music_stop and movie_stop:
            break


if __name__ == '__main__':
    main()
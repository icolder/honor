class Plane(object):
    def __init__(self):
        self._alive = True
        self.score = 0

    # 当执行temp = p.alive的时候自动执行下面的代码，而不需要再用对象去调用它
    @property
    def alive(self):
        if not self._alive:   # 此处相当于temp = p.alive, 为了避免循环操作，给alive前面添加下划线作为区分
            self.cancel_schedule()
        return self._alive

    # 当执行p.alive = False的时候自动执行下面的代码，而不需要再用对象去调用它
    @alive.setter
    def alive(self, value):
        self._alive = value    # 此处相当于p.alive = False,为了避免循环操作，给alive前面添加下划线作为区分
        if value == False:
            self.die_action()

    def cancel_schedule(self):
        print("取消事件调度")

    def die_action(self):
        print("飞机被撞的状态")

p = Plane()

hit = True

if hit:
    p.alive = False   # set方法，给alive赋值  一旦此处代码成立（得到执行），会立即去执行@alive_setter装饰器下的set方法
    temp = p.alive   # get方法，获取值
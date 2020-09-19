# 通过git工具上传本地文件夹（本地项目）

# 下载git工具

    打开git-bash.exe（进入到项目所在文件夹，按住shift键点击鼠标右键，点击Git Bash here）
    在打开的GIt Bash中输入以下命令（用户和邮箱为你github注册的账号和邮箱）
        $ git config --global user.name "hanyuntao"
        $ git config --global user.email "hanyuntaocn@163.com"

# 设置SSH key

    如果没有密钥，则通过
        $ ssh-keygen -t rsa -C "hanyuntaocn@163.com"
    生成，生成过程中一路按3次回车键就好了。（默认路径，默认没有密码登录）
    生成成功后，去对应目录C:\Users\hyt.ssh里（hyt为电脑用户名，每个人不同）用记事本打开id_rsa.pub，复制里面的内容，得到ssh key公钥。

# 为github账号配置ssh key

    切换到github，展开个人头像的小三角，点击settings，然后打开SSH keys菜单， 点击Add SSH key新增密钥，填上标题（最好跟本地仓库保持一致）。
    接着将id_rsa.pub文件中key粘贴到此，最后Add key生成密钥。

# GitHub：上传本地项目（文件夹）到GitHub

    1.首先进入text文件夹  cd d:text（cd \d:进入D盘)
    2.初始化上传文件夹仓库  git init
    3.添加所有文件到git 
        $ git add .
        $ git add test.html（只提交当前目录的test.html文件到本地git仓库）
        $ git commit -m "first commit"
    [注意]：
        git commit -m与git commit -am的区别
        git commit -m用于提交暂存区的文件，git commit -am用于提交跟踪过的文件
        git commit -am可以写成git commit -a -m，但不能写成git commit -m -a
        
# 连接到GitHub仓库

    git remote add origin https://github.com/wangle1218/********.git
    （如果不是第一次上传，可能会提示一下信息：fatal: 远程 origin 已经存在）这时只需要将远程配置删除，重新添加即可
        $ git remote rm origin
        $ git remote add origin https://github.com/wangle1218/********.git
        
# 上传项目到Github

        $ git push -u origin master    
    如果提示错误：
        error: 无法推送一些引用到 'https://github.com/wangle1218/*********.git'
        提示：更新被拒绝，因为远程仓库包含您本地尚不存在的提交。这通常是因为另外
        提示：一个仓库已向该引用进行了推送。再次推送前，您可能需要先整合远程变更
        提示：（如 'git pull ...'）。
        提示：详见 'git push --help' 中的 'Note about fast-forwards' 小节。
    则可以尝试强行上传：  git push -u origin +master

# 删除GitHub 上的文件（用命令或bash）---只删除远程仓库的文件，不删除本地仓库

        $ git pull origin master  // 将项目从远程库拉下来
        $ git rm -r --cached 1.txt  // 删除指定文件，多个文件之间空格隔开
        $ git commit -m '删除1.txt'
        $ git push -u origin master

# 复制图片需要使用二进制方式写入和读取信息
# 输入地址时不要忘记写上文件的名字和格式
# 请输入需要复制的图片地址：C:\Users\Administrator\Desktop\timg.jpg
# 请输入图片目的地：D:\timg.jpg
# 恭喜文件复制成功！

source_path = input("请输入需要复制的图片地址：")
dest_path = input("请输入图片目的地：")
with open(source_path,"rb") as fp_r:
    with open(dest_path,"wb") as fp_w:
        fp_w.write(fp_r.read())
print("恭喜文件复制成功！")

# 注意：在输入文件地址的时候要把文件的格式也输入进去


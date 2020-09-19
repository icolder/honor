function NewsCategory() {

};


NewsCategory.prototype.listenAddCategoryEvent = function () {
    var addBtn = $("#add-btn");
    addBtn.click(function () {
        Swal.fire({
            title: '添加标签',
            input: 'text',
            inputPlaceholder: '请输入标签',
        }).then(function (inputValue) {
                $.ajax({
                    'url': '/cms/add_news_category/',
                    'type': 'POST',
                    'data': {
                        'name': inputValue.value
                    },
                    'success': function (result) {
                        if (result['code'] === 200) {
                            window.location.reload();
                        }
                    }
                })
            })
    });
};

NewsCategory.prototype.listenEditCategoryEvent = function () {
    var editBtn = $(".edit-btn");
    editBtn.click(function () {
        var currentBtn = $(this);
        var tr = currentBtn.parent().parent();
        var pk = tr.attr("data-pk");
        var name = tr.attr("data-name");
        Swal.fire({
            title: '修改标签',
            input: 'text',
            inputPlaceholder: '请输入新的标签',
            inputValue: name
        }).then(function (inputValue) {
            $.ajax({
                'url': '/cms/edit_news_category/',
                'type': 'POST',
                'data': {
                    'pk': pk,
                    'name': inputValue.value
                },
                'success': function (result) {
                    if (result['code'] === 200) {
                        window.location.reload()
                    }
                }
            })
        })
    });

};

NewsCategory.prototype.listenDeleteCategory = function () {
    var delBtn = $(".delete-btn");
    delBtn.click(function () {
        var currentBtn = $(this);
        var tr = currentBtn.parent().parent();
        var pk = tr.attr("data-pk");
        $.ajax({
            'url': '/cms/delete_news_category/',
            'type': 'POST',
            'data': {
                'pk': pk
            },
            'success': function (result) {
                if (result['code'] === 200) {
                    window.location.reload()
                }
            }
        });
    });
};

NewsCategory.prototype.run = function () {
    var self = this;
    self.listenAddCategoryEvent();
    self.listenEditCategoryEvent();
    self.listenDeleteCategory();
};

$(function () {
    var newCategory = new NewsCategory();
    newCategory.run();
});
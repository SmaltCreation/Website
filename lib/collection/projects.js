Projects.views = {
    portfolio: function () {
        return {
            selector: {
                portfolio: true,
                draft: false
            },
            options: {
                sort: {
                    importance: 1
                }
            }
        };
    },
    show: function (id) {
        return {
            selector: {
                id: id,
                draft: false
            },
            options: {}
        };
    }
};

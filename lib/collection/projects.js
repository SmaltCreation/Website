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
    }
};

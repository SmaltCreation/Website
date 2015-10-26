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
    contributions: function () {
        return {
            selector: {
                contribution: true,
                draft: false
            },
            options: {
                sort: {
                    importance: 1
                }
            }
        };
    },
    show: function (id, slug) {
        return {
            selector: {
                id: id,
                slug: slug,
                draft: false
            },
            options: {}
        };
    }
};

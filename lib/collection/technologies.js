Technologies.views = {
    list: function (ids) {
        return {
            selector: {
                id: {
                    $in: ids
                }
            },
            options: {
                sort: {
                    name: 1
                }
            }
        };
    },
    listBySlug: function (slugs) {
        return {
            selector: {
                slug: {
                    $in: slugs
                }
            },
            options: {
                sort: {
                    name: 1
                }
            }
        };
    },
    show: function (id) {
        return {
            selector: {
                id: id
            },
            options: {}
        };
    },
    skills: function () {
        return {
            selector: {
                isSkill: true
            },
            options: {
                sort: {
                    name: 1
                }
            }
        };
    }
};
